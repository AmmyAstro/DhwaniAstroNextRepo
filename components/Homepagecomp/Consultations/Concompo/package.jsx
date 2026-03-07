export const BASE_PRICE = 800;

export const SESSION_LENGTHS = {
    HALF_HOUR: { label: "15 Minutes", multiplier: 1 },
    ONE_HOUR: { label: "20 Minutes", multiplier: 1.75 },
    FULL_DAY: { label: "30 Minutes", multiplier: 3.5 },
};

export const PACKAGES = [
    { id: "single", name: "Single Session", sessions: 1, discount: 0 },
    { id: "three", name: "3 Sessions", sessions: 3, discount: 0.15 },
    { id: "five", name: "5 Sessions", sessions: 5, discount: 0.25 },
];

export const ATYPES = [
    { id: "1", label: "Birth Chart Analysis", href: "/past-life" },
    { id: "2", label: "Varshphal", href: "/kundli" },
    { id: "3", label: "Kundli Milan", href: "/numerology" },
    { id: "4", label: "Mangal Dosha ", href: "/matchmaking" },
];

export const MTYPES = [
    { id: "1", label: " General Physician Consultation", href: "/past-life" },
    { id: "2", label: "Chronic Illness & Disease Consultation", href: "/kundli" },
    { id: "3", label: "Disease Timing & Recovery Forecast", href: "/numerology" },
    { id: "4", label: "Mental & Emotional Health Consultation", href: "/matchmaking" },
    { id: "5", label: "Fertility, Pregnancy & Reproductive Health", href: "/matchmaking" },
    { id: "6", label: "Remedial Therapy & Planetary Healing", href: "/past-life" },
];

export const PTYPES = [
    { id: "1", label: "Reiki Healing Consultation", href: "/past-life" },
    { id: "2", label: "Chakra Balancing Session", href: "/kundli" },
    { id: "3", label: "Ayurvedic Healing Consultation", href: "/numerology" },
    { id: "4", label: "Spiritual Energy Cleansing", href: "/matchmaking" },
    { id: "5", label: "Crystal Healing Consultation", href: "/matchmaking" },
    { id: "6", label: "Pranic Healing Session", href: "/matchmaking" },
];
export const BTYPES = [
  { id: "1", label: "Business Partnership Compatibility", href: "/business-astrology" },
  { id: "2", label: "Business Start Date Muhurat", href: "/business-astrology" },
  { id: "3", label: "Industry & Business Type Selection", href: "/business-astrology" },
  { id: "4", label: "Financial Growth & Profit Forecasting", href: "/business-astrology" },
  { id: "5", label: "Business Name Numerology", href: "/business-astrology" },
  { id: "6", label: "Dasha & Transit Impact on Business", href: "/business-astrology" },
  { id: "7", label: "Remedies for Business Obstacles", href: "/business-astrology" },
  { id: "8", label: "Foreign Expansion & Trade Potential", href: "/business-astrology" },
];
export const KTYPES = [
  { id: "1", label: "Unresolved Past Life Karma Reading", href: "/past-life-karma" },
  { id: "2", label: "Karmic Relationships & Soul Ties", href: "/past-life-karma" },
  { id: "3", label: "Recurring Patterns & Life Blockages", href: "/past-life-karma" },
  { id: "4", label: "Health Issues Linked to Past Karma", href: "/past-life-karma" },
  { id: "5", label: "Career & Financial Karma Analysis", href: "/past-life-karma" },
  { id: "6", label: "Spiritual Progress & Soul Evolution", href: "/past-life-karma" },
  { id: "7", label: "Past Life Influences on Present Life", href: "/past-life-karma" },
  { id: "8", label: "Remedies for Karmic Cleansing", href: "/past-life-karma" },
];
export const DTYPES = [
     { id: "1", label: "Ishta Devata Revelation & Connection", href: "/bhakti-consultation" },
  { id: "2", label: "Daily Bhakti Practices & Routine Setup", href: "/bhakti-consultation" },
  { id: "3", label: "Mantra & Japa Guidance", href: "/bhakti-consultation" },
  { id: "4", label: "Bhakti Path Based on Horoscope", href: "/bhakti-consultation" },
  { id: "5", label: "Temple Visits & Pilgrimage Recommendations", href: "/bhakti-consultation" },
  { id: "6", label: "Deity Worship Remedies & Rituals", href: "/bhakti-consultation" },
  { id: "7", label: "Planetary Devotion (Navagraha Bhakti)", href: "/bhakti-consultation" },
  { id: "8", label: "Spiritual Block Removal through Devotion", href: "/bhakti-consultation" },
];
