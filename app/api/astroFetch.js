// lib/astroFetch.js
import { BASE_URL, ASTRO_ENDPOINTS } from "./astroEndpoints";

const USER_ID = process.env.NEXT_PUBLIC_ASTROLOGY_USER_ID;
const API_KEY = process.env.NEXT_PUBLIC_ASTROLOGY_API_KEY;

async function astroPost(endpoint, params) {

  try {

    console.log("Params sent to Astro API:", USER_ID, API_KEY);
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${USER_ID}:${API_KEY}`).toString("base64"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Astro API Error ${res.status}: ${res.statusText}`);
    }

    // console.log("xxxxxxxxxxxxxxxxxxx", await res.json());


    const response = await res.json();

    console.log("Response from Astro APIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:", response);

    return response;
  } catch (err) {
    console.error("❌ Astro API Fetch Error:", err?.message);

  }
}



// Panchang
export async function fetchAdvPanchang(params) {
  return astroPost(ASTRO_ENDPOINTS.ADV_PANCHANG, params);
}

// Chaughadiya Muhurat
export async function fetchChaughadiya(params) {
  return astroPost(ASTRO_ENDPOINTS.CHAUGHADIYA, params);
}


export async function fetchHoraMuhurat(params) {
  return astroPost(ASTRO_ENDPOINTS.HORA_MUHURTA, params);
}
