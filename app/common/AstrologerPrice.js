"use client";

import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useLanguage } from "../context/LangContext";

const ME_QUERY = gql`
  query Me {
    me {
      id
    }
  }
`;

function AstrologerPrice({ mode, astro }) {
  const { messages: t } = useLanguage();

  const { data, loading } = useQuery(ME_QUERY, {
    fetchPolicy: "cache-first",
  });

  const isAuth = !!data?.me;

  // Prevent flicker while checking auth
  if (loading) return null;

  return (
    <>
      {/* 🔹 NOT LOGGED IN */}
      {!isAuth && (
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center gap-3 text-base font-semibold text-red-500 sm:text-[16px]">
            {t?.astrocard?.free || "Free"}
          </span>

          <span className="text-sm font-semibold text-black line-through">
            ₹{astro?.price} /{t?.astrocard?.min || "min"}
          </span>
        </div>
      )}

      {/* 🔹 LOGGED IN */}
      {isAuth && (
        <>
          <span className="flex items-center justify-center gap-3 text-sm font-semibold text-red-500 sm:text-lg">
            ₹{astro?.price}
          </span>

          <span className="text-sm font-semibold text-black line-through">
            ₹{astro?.price} /min
          </span>
        </>
      )}
    </>
  );
}

export default React.memo(AstrologerPrice);