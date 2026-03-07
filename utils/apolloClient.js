"use client";

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

/* =========================
   HTTP LINK
========================= */
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include", // needed for refresh token cookie
});

/* =========================
   AUTH LINK (Attach Token)
========================= */
const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken")
      : null;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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

const errorLink = onError(
  ({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.message === "Unauthorized") {

          if (!isRefreshing) {
            isRefreshing = true;

            return fetch("http://localhost:4000/graphql", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
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
                const newToken =
                  result?.data?.refreshToken?.accessToken;

                if (!newToken) {
                  throw new Error("Refresh failed");
                }

                localStorage.setItem("accessToken", newToken);

                isRefreshing = false;
                resolvePendingRequests();

                return forward(operation);
              })
              .catch(() => {
                isRefreshing = false;
                localStorage.removeItem("accessToken");
                window.location.href = "/";
              });
          }

          return new Promise((resolve) => {
            pendingRequests.push(() => {
              resolve(forward(operation));
            });
          });
        }
      }
    }
  }
);

/* =========================
   APOLLO CLIENT
========================= */
const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;