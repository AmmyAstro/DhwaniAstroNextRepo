"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useMemo } from "react";

const ME_QUERY = gql`
  query Me {
    me {
      id
      name
    }
  }
`;

export function useAuth() {
  const { data, loading, error, refetch } = useQuery(ME_QUERY, {
    fetchPolicy: "cache-first",
  });

  const value = useMemo(() => {
    return {
      user: data?.me || null,
      isAuth: !!data?.me,
      loading,
      error,
      refetchUser: refetch,
    };
  }, [data, loading, error, refetch]);

  return value;
}