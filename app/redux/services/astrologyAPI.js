import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const encodedAuth = 'NjE4NzQyOjdjMjA1OTllYjIzYmUyNzZlOGM4YWNlOGJlZjg4MGMy';

const USER_ID = process.env.NEXT_PUBLIC_ASTROLOGY_USER_ID;
const API_KEY = process.env.NEXT_PUBLIC_ASTROLOGY_API_KEY;
export const astrologyApi = createApi({
  reducerPath: 'astrologyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json.astrologyapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Basic " + btoa(`${USER_ID}:${API_KEY}`));
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({

    // getLalKitab: builder.mutation({
    //   query: (body) => ({
    //     url: 'lalkitab_horoscope',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getLalDebt: builder.mutation({
    //   query: (body) => ({
    //     url: 'lalkitab_debts',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getLalHouses: builder.mutation({
    //   query: (body) => ({
    //     url: 'lalkitab_houses',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getLalPlanet: builder.mutation({
    //   query: (body) => ({
    //     url: 'lalkitab_planets',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    getBirthDetails: builder.mutation({
      query: (body) => ({
        url: 'birth_details',
        method: 'POST',
        body,
      }),
    }),

    getAstroDetails: builder.mutation({
      query: (body) => ({
        url: 'astro_details',
        method: 'POST',
        body,
      }),
    }),

    getBasicPanchang: builder.mutation({
      query: (body) => ({
        url: 'basic_panchang',
        method: 'POST',
        body,
      }),
    }),

    getPlanets: builder.mutation({
      query: (body) => ({
        url: 'planets',
        method: 'POST',
        body,
      }),
    }),

    getVimAll: builder.mutation({
      query: (body) => ({
        url: 'major_vdasha',
        method: 'POST',
        body,
      }),
    }),

    // getKalDosha: builder.mutation({
    //   query: (body) => ({
    //     url: 'kalsarpa_details',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getManglikDosha: builder.mutation({
    //   query: (body) => ({
    //     url: 'manglik',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getPitraDosha: builder.mutation({
    //   query: (body) => ({
    //     url: 'pitra_dosha_report',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getSadeSatiDosha: builder.mutation({
    //   query: (body) => ({
    //     url: 'sadhesati_current_status',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getGenPred: builder.mutation({
    //   query: (body) => ({
    //     url: 'general_nakshatra_report',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNumeroDet: builder.mutation({
    //   query: (body) => ({
    //     url: 'numero_table',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNumeroRepo: builder.mutation({
    //   query: (body) => ({
    //     url: 'numero_report',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNumeroFav: builder.mutation({
    //   query: (body) => ({
    //     url: 'numero_fav_time',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNumeroPlace: builder.mutation({
    //   query: (body) => ({
    //     url: 'numero_place_vastu',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNumeroFast: builder.mutation({
    //   query: (body) => ({
    //     url: 'numero_fasts_report',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNumeroLord: builder.mutation({
    //   query: (body) => ({
    //     url: 'numero_fav_lord',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNumeroMantra: builder.mutation({
    //   query: (body) => ({
    //     url: 'numero_fav_mantra',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNumeroPred: builder.mutation({
    //   query: (body) => ({
    //     url: 'numero_prediction/daily',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getDailyPred: builder.mutation({
    //   query: (body) => ({
    //     url: 'daily_nakshatra_prediction',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNakPrev: builder.mutation({
    //   query: (body) => ({
    //     url: 'daily_nakshatra_prediction/previous',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getNakNext: builder.mutation({
    //   query: (body) => ({
    //     url: 'daily_nakshatra_prediction/next',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getSadheSati: builder.mutation({
    //   query: (body) => ({
    //     url: 'sadhesati_current_status',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getSadheReme: builder.mutation({
    //   query: (body) => ({
    //     url: 'sadhesati_remedies',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getSadheDetails: builder.mutation({
    //   query: (body) => ({
    //     url: 'sadhesati_life_details',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getPujaSugg: builder.mutation({
    //   query: (body) => ({
    //     url: 'puja_suggestion',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getGemSugg: builder.mutation({
    //   query: (body) => ({
    //     url: 'basic_gem_suggestion',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getRudraSugg: builder.mutation({
    //   query: (body) => ({
    //     url: 'rudraksha_suggestion',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getGenAscRep: builder.mutation({
    //   query: (body) => ({
    //     url: 'general_ascendant_report',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getGenNakRep: builder.mutation({
    //   query: (body) => ({
    //     url: 'general_nakshatra_report',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getCharDasha: builder.mutation({
    //   query: (body) => ({
    //     url: 'major_chardasha',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getCurrentD: builder.mutation({
    //   query: (body) => ({
    //     url: 'current_chardasha',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getYogDasha: builder.mutation({
    //   query: (body) => ({
    //     url: 'major_yogini_dasha',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // getCrtYogD: builder.mutation({
    //   query: (body) => ({
    //     url: 'current_yogini_dasha',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    getMatchAsktP: builder.mutation({
      query: (body) => ({
        url: 'match_ashtakoot_points ',
        method: 'POST',
        body,
      }),
    }),

    getMatchObst: builder.mutation({
      query: (body) => ({
        url: 'match_obstructions',
        method: 'POST',
        body,
      }),
    }),

    getMatchAstro: builder.mutation({
      query: (body) => ({
        url: 'match_astro_details',
        method: 'POST',
        body,
      }),
    }),

    getMatchManglik: builder.mutation({
      query: (body) => ({
        url: 'match_manglik_report',
        method: 'POST',
        body,
      }),
    }),

    getMatchMrepo: builder.mutation({
      query: (body) => ({
        url: 'match_making_report',
        method: 'POST',
        body,
      }),
    }),

    getAdvPanchang: builder.mutation({
      query: (body) => ({
        url: 'advanced_panchang',
        method: 'POST',
        body,
      }),
    }),

    getChaugadiya: builder.mutation({
      query: (body) => ({
        url: 'chaughadiya_muhurta',
        method: 'POST',
        body,
      }),
    }),

    getHoraChart: builder.mutation({
      query: (body) => ({
        url: 'hora_muhurta',
        method: 'POST',
        body,
      }),
    }),

    getSunSignPredToday: builder.mutation({
      query: ({ zodiacName, body }) => ({
        url: `sun_sign_prediction/daily/${encodeURIComponent(zodiacName)}`,
        method: 'POST',
        body,
      }),
    }),

    getSunSignPredNxt: builder.mutation({
      query: ({ zodiacName, body }) => ({
        url: `sun_sign_prediction/daily/next/${encodeURIComponent(zodiacName)}`,
        method: 'POST',
        body,
      }),
    }),

    getSunSignPredPrev: builder.mutation({
      query: ({ zodiacName, body }) => ({
        url: `sun_sign_prediction/daily/previous/${encodeURIComponent(zodiacName)}`,
        method: 'POST',
        body,
      }),
    }),

    getSunSignPredMonth: builder.mutation({
      query: ({ zodiacName, body }) => ({
        url: `horoscope_prediction/monthly/${encodeURIComponent(zodiacName)}`,
        method: 'POST',
        body,
      }),
    }),

    getKPplanets: builder.mutation({
      query: (body) => ({
        url: 'kp_planets',
        method: 'POST',
        body,
      }),
    }),

    getKPhouse: builder.mutation({
      query: (body) => ({
        url: 'kp_house_significator',
        method: 'POST',
        body,
      }),
    }),

    getKPplanetSig: builder.mutation({
      query: (body) => ({
        url: 'kp_planet_significator',
        method: 'POST',
        body,
      }),
    }),

    
    getMoonBio: builder.mutation({
      query: (body) => ({
        url: 'moon_biorhythm',
        method: 'POST',
        body,
      }),
    }),

    getChartKundli: builder.mutation({
      query: ({ chartType, body }) => {
        const finalType = chartType === 'chalit' ? ':chalit' : chartType;
        return {
          url: `horo_chart_image/${encodeURIComponent(finalType)}`,
          method: 'POST',
          body,
        };
      },
    }),


  }),
});

export const {
  useGetLalKitabMutation,
  useGetBirthDetailsMutation,
  useGetChartKundliMutation,
  useGetAstroDetailsMutation,
  useGetBasicPanchangMutation,
  useGetPlanetsMutation,
  useGetVimAllMutation,
  useGetGenPredMutation,
  // useGetKalDoshaMutation,
  // useGetManglikDoshaMutation,
  // useGetPitraDoshaMutation,
  // useGetSadeSatiDoshaMutation,
  useGetNumeroDetMutation,
  useGetNumeroRepoMutation,
  useGetNumeroFavMutation,
  useGetNumeroPlaceMutation,
  useGetNumeroFastMutation,
  useGetNumeroLordMutation,
  useGetNumeroMantraMutation,
  useGetNumeroPredMutation,
  useGetDailyPredMutation,
  useGetNakPrevMutation,
  useGetNakNextMutation,
  useGetLalDebtMutation,
  useGetLalHousesMutation,
  useGetLalPlanetMutation,
  // useGetSadheSatiMutation,
  // useGetSadheRemeMutation,
  // useGetSadheDetailsMutation,
  useGetPujaSuggMutation,
  useGetGemSuggMutation,
  useGetRudraSuggMutation,
  useGetGenAscRepMutation,
  useGetGenNakRepMutation,
  useGetCharDashaMutation,
  useGetCurrentDMutation,
  useGetYogDashaMutation,
  useGetCrtYogDMutation,
  useGetMatchAsktPMutation,
  useGetMatchObstMutation,
  useGetMatchAstroMutation,
  useGetMatchManglikMutation,
  useGetMatchMrepoMutation,
  useGetAdvPanchangMutation,
  useGetChaugadiyaMutation,
  useGetHoraChartMutation,
  useGetSunSignPredTodayMutation,
  useGetSunSignPredNxtMutation,
  useGetSunSignPredPrevMutation,
  useGetSunSignPredMonthMutation,
  useGetKPplanetsMutation,
  useGetKPhouseMutation,
  useGetKPplanetSigMutation,
  useGetMoonBioMutation,

} = astrologyApi;