import { fetchRudraSuggestion } from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import Rudrasuggest from "../../../inKundli/getKundlipage/suggestions/rudra/Rudrasuggest";

export default async function Page({ params, searchParams }) {
  const { slug } = params;
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }


  const rudraData = await fetchRudraSuggestion(formData);

  if (!rudraData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Rudraksha suggestions.
      </p>
    );
  }


  return <Rudrasuggest rudraData={rudraData} />;
}
