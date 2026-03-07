

import { decodeKundliHash } from "@/utils/kundliHash";
import { fetchSadheSati, fetchSadheRemedies, fetchSadheDetails, } from "@/app/api/astroapi.server";
import Sadhesati from "../../../../components/Kundli/Kundliinter/Sadhesati/Sadhesati"

export default async function Page({ params, searchParams }) {
  const { slug } = params;
  const hash = searchParams.hash;


  if (!hash) {
    return <p className="text-center">Missing sadesati data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }


  const satiData = await fetchSadheSati(formData);
  const remediesData = await fetchSadheRemedies(formData);
  const detailsData = await fetchSadheDetails(formData);



  if (!satiData || !remediesData || !detailsData) {
    return (
      <p className="text-center text-red-500">
        Failed to load sadesati data.
      </p>
    );
  }


  return (
    <Sadhesati
      satiData={satiData}
      remeData={remediesData}
      detailsData={detailsData}
    />
  );
}
