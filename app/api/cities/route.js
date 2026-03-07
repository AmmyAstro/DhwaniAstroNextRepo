import { Country, State, City } from "country-state-city";

export async function GET() {
  // 1. Find India (you can make this dynamic if needed)
  const countries = Country.getAllCountries();
  const india = countries.find((c) => c.name === "India");

  if (!india) {
    return new Response(JSON.stringify({ error: "Country not found" }), { status: 404 });
  }

  // 2. Get all states and cities
  const states = State.getStatesOfCountry(india.isoCode);
  const cities = states.flatMap((state) =>
    City.getCitiesOfState(india.isoCode, state.isoCode)
  );

  // 3. Send as JSON
  return new Response(JSON.stringify(cities), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
