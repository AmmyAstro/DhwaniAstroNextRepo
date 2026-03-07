
import { API_ENDPOINTS } from "@/app/redux/config/apiConfig";
import CallAstrologer from "./CallAstrologer";
import { Suspense } from "react";
import Astroskelton from "@/components/Smcompo/Astroskelton";
import { graphqlEndpoint } from "@/app/redux/config/apiConfig";

export const dynamic = "force-dynamic";

export default function AstrologerPage() {
  return (
    <Suspense fallback={<Astroskelton />}>
      <AstrologerData />
    </Suspense>
  );
}

async function AstrologerData({ limit = 12, page = 1 }) {
  const query = `
    query {
      astrologer_list(limit: ${limit}, page: ${page}) {
        data {
          id
          full_name
          profile_name_en
          rating
          gender
          profile_image
          specialisation
          languages
          experience
          availability
          is_chat_online
          is_call_online
          astro_call_charges
          astro_chat_charges
          astro_video_charges
          disc_chat_charge
          disc_call_charge
          offer_price
          astro_tag
        }
        total
        limit
        page
      }
    }
  `;

  const res = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 5 },
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status} ${res.statusText}`);
  }


  const json = await res.json();

  // ✅ Check GraphQL errors here
  if (json.errors) {
    const msg = json.errors[0]?.message ?? "Unknown GraphQL error";
    throw new Error(`GraphQL error: ${msg}`);
  }



  return <CallAstrologer serverdata={json.data?.astrologer_list} />;
}

