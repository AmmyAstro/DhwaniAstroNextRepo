// app/inKundli/getKundlipage/suggestions/page.js

import {
  fetchGemSuggestion,
  fetchPujaSuggestion,
  fetchRudraSuggestion,
} from "@/app/api/astroapi.server";

import { decodeKundliHash } from "@/utils/kundliHash";
import SuggestTabsClient from "./SuggestTabsClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center text-gray-400">Invalid or expired link</p>;
  }


  const [pujaData, gemData, rudraData] = await Promise.all([
    fetchPujaSuggestion(formData),
    fetchGemSuggestion(formData),
    fetchRudraSuggestion(formData),
  ]);

  return (
    <SuggestTabsClient
      pujaData={pujaData}
      gemData={gemData}
      rudraData={rudraData}
    />
  );
}
