import { fetchPujaSuggestion } from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import Pujasuggest from "../../../inKundli/getKundlipage/suggestions/puja/Pujasuggest";

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

  const pujaData = await fetchPujaSuggestion(formData);

  if (!pujaData) {
    return (
      <p className="text-center text-red-500">
        Failed to load puja suggestions.
      </p>
    );
  }


  return <Pujasuggest pujaData={pujaData} />;
}
