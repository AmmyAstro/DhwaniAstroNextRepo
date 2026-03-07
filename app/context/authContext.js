"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const ME_QUERY = gql`
  query Me {
    me {
      id
      name
    }
  }
`;

export function AuthProvider({ children }) {
  const { data, loading, refetch } = useQuery(ME_QUERY);

  const [showLogin, setShowLogin] = useState(false);
  const [pendingRoute, setPendingRoute] = useState(null);

  const value = {
    user: data?.me || null,
    isAuth: !!data?.me,
    loading,
    refetchUser: refetch,
    showLogin,
    setShowLogin,
    pendingRoute,
    setPendingRoute,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);