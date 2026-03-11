"use client";

import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

/* =========================
   HTTP LINK
========================= */
const httpLink = new HttpLink({
  uri: "https://dhwaniastro.com/userAuth/graphql",
  credentials: "include", 
});

/* =========================
   AUTH LINK (Attach Token)
========================= */
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

/* =========================
   TOKEN REFRESH LOGIC
========================= */
let isRefreshing = false;
let pendingRequests = [];

const resolvePendingRequests = () => {
  pendingRequests.forEach((callback) => callback());
  pendingRequests = [];
};

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null;

      if (
        token &&
        (err.message === "Unauthorized" ||
          err.extensions?.code === "UNAUTHENTICATED")
      ) {
        if (!isRefreshing) {
          isRefreshing = true;

          console.log("GraphQL errors:", graphQLErrors);

          return new Promise((resolve, reject) => {
            fetch("https://dhwaniastro.com/userAuth/graphql", {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                query: `
                  mutation {
                    refreshToken {
                      accessToken
                    }
                  }
                `,
              }),
            })
              .then((res) => res.json())
              .then((result) => {
                const newToken = result?.data?.refreshToken?.accessToken;

                if (!newToken) throw new Error("Refresh failed");

                localStorage.setItem("accessToken", newToken);

                // attach new token to current operation
                operation.setContext(({ headers = {} }) => ({
                  headers: {
                    ...headers,
                  },
                }));

                isRefreshing = false;
                resolvePendingRequests();

                resolve(forward(operation));
              })
              .catch((err) => {
                isRefreshing = false;
                reject(err);
              });
          });
        }

        return new Promise((resolve) => {
          pendingRequests.push(() => {
            operation.setContext(({ headers = {} }) => ({
              headers: {
                ...headers,
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }));

            resolve(forward(operation));
          });
        });
      }
    }
  }
});


const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
