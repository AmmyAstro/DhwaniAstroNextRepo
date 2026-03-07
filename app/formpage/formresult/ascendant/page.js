import { decodeKundliHash } from "@/utils/kundliHash";
import AscendantClient from "../../../inKundli/getKundlipage/ascendant/AscendantClient";
import {  fetchGenAscRep,   fetchGenNakRep,} from "@/app/api/astroapi.server";


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


  const [ascData, nakData] = await Promise.all([
    fetchGenAscRep(formData),
    fetchGenNakRep(formData),
  ]);

  if (!ascData || !nakData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Ascendant Report.
      </p>
    );
  }
  return (
    <AscendantClient
      ascData={ascData}
      nakData={nakData}
    />
  );
}
