const BASE_URL = "https://json.astrologyapi.com/v1/";

const USER_ID = process.env.NEXT_PUBLIC_ASTROLOGY_USER_ID;
const API_KEY = process.env.NEXT_PUBLIC_ASTROLOGY_API_KEY;

function getHeaders() {
    return {
        Authorization:
            "Basic " +
            Buffer.from(`${USER_ID}:${API_KEY}`).toString("base64"),
        "Content-Type": "application/json",
    };
}

async function post(endpoint, body) {
    const sanitizedBody = {
        day: Number(body.day),
        month: Number(body.month),
        year: Number(body.year),
        hour: Number(body.hour),
        min: Number(body.min),
        lat: Number(body.lat),
        lon: Number(body.lon),
        tzone: Number(body.tzone),
    };

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(sanitizedBody),


        cache: "force-cache",
        next: {
            revalidate: 60 * 60,
            tags: [`astro-${endpoint}`],
        },
    });

    const data = await res.json();

    if (!res.ok || data?.error) {
        console.error("SERVER API FAILED:", endpoint, data);
        return null;
    }

    return data;
}



// moon biorythm
export const fetchMoonBio = (body) =>
    post("moon_biorhythm", body);



// My Day Prediction
export async function fetchMyDay(body) {
    return post("daily_nakshatra_prediction", body);
}

export async function fetchNumeroDay(body) {
    return post("numero_prediction/daily", body);
}


// Nakshatra Prediction 
export const fetchNakPrev = (body) =>
    post("daily_nakshatra_prediction/previous", body);


export const fetchNakToday = (body) =>
    post("daily_nakshatra_prediction", body);


export const fetchNakTomorrow = (body) =>
    post("daily_nakshatra_prediction/next", body);


// Kundli Doshas
export const fetchManglik = (body) =>
    post("manglik", body);

export const fetchKalSharp = (body) =>
    post("kalsarpa_details", body);

export const fetchPitraDosha = (body) =>
    post("pitra_dosha_report", body);


// Sadhesati APIs
export const fetchSadheSati = (body) =>
    post("sadhesati_current_status", body);

export const fetchSadheRemedies = (body) =>
    post("sadhesati_remedies", body);

export const fetchSadheDetails = (body) =>
    post("sadhesati_life_details", body);

// Lalkiatab api 
export const fetchLalKitab = (body) =>
    post("lalkitab_horoscope", body);

export const fetchLalDebt = (body) =>
    post("lalkitab_debts", body);

export const fetchLalHouses = (body) =>
    post("lalkitab_houses", body);

export const fetchLalPlanet = (body) =>
    post("lalkitab_planets", body);


// Puja gemstone rudraksha suggestions
export const fetchGemSuggestion = (body) =>
    post("basic_gem_suggestion", body);

export const fetchPujaSuggestion = (body) =>
    post("puja_suggestion", body);

export const fetchRudraSuggestion = (body) =>
    post("rudraksha_suggestion", body);


// Ascendant report 
export const fetchGenAscRep = (body) =>
    post("general_ascendant_report", body);

export const fetchGenNakRep = (body) =>
    post("general_nakshatra_report", body);

// Char Yogni dasha 
export const fetchCharDasha = (body) =>
    post("major_chardasha", body);

export const fetchCurrentCharDasha = (body) =>
    post("current_chardasha", body);

export const fetchYoginiDasha = (body) =>
    post("major_yogini_dasha", body);

export const fetchCurrentYoginiDasha = (body) =>
    post("current_yogini_dasha", body);


// Numerology Kundli
export const fetchNumeroPred = (body) =>
    post("numero_prediction/daily", body);

export const fetchNumeroDet = (body) =>
    post("numero_table", body);

export const fetchNumeroRepo = (body) =>
    post("numero_report", body);

export const fetchNumeroFav = (body) =>
    post("numero_fav_time", body);

export const fetchNumeroPlace = (body) =>
    post("numero_place_vastu", body);

export const fetchNumeroFast = (body) =>
    post("numero_fasts_report", body);

export const fetchNumeroLord = (body) =>
    post("numero_fav_lord", body);

export const fetchNumeroMantra = (body) =>
    post("numero_fav_mantra", body);



// KP APIs
export const fetchKPPlanets = (body) =>
  post("kp_planets", body);

export const fetchKPHouses = (body) =>
  post("kp_house_significator", body);

export const fetchKPPlanetSignificators = (body) =>
  post("kp_planet_significator", body);
