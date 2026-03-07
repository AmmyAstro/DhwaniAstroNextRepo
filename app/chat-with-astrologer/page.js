"use client";
import { Suspense } from "react";
import { graphqlEndpoint } from "@/app/redux/config/apiConfig";
import ChatAstrologer from "./ChatAstrologer";
import Astroskelton from "@/components/Smcompo/Astroskelton";
export const dynamic = "force-dynamic";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";


const GET_ASTROLOGERS = gql`
  query GetAstrologers($searchInput: AstrologerSearchInput) {
    getAstrologerListBySearch(searchInput: $searchInput) {
      data {
        id
        profilePic
        name
        experience
        price
        rating
        skills
        languages
      }
      totalCount
      currentPage
      totalPages
    }
  }
`;

export default function AstrologerPage() {
  const { data, loading, error } = useQuery(GET_ASTROLOGERS, {
    variables: {
      searchInput: {
        limit: 12,
        page: 1,
        sortField: "RATING",
        sortOrder: "DESC",
      },
    },
    fetchPolicy: "network-only",
  });

  if (loading) return <Astroskelton />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ChatAstrologer
      serverdata={data?.getAstrologerListBySearch}
    />
  );
}

