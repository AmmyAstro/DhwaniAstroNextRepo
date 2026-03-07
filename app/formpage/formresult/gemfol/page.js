import { fetchGemSuggestion } from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import Gemsuggest from "../../../inKundli/getKundlipage/suggestions/gem/Gemsuggest"

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


  const gemData = await fetchGemSuggestion(formData);
console.log("cccccccccccccccccccccccccccccccccccc",gemData);

  if (!gemData) {
    return (
      <p className="text-center text-red-500">
        Failed to load gemstone suggestions.
      </p>
    );
  }


  return <Gemsuggest gemData={gemData} />;
}
