import metadata from "libphonenumber-js/metadata.min.json";

export function getCountries() {
  const displayNames = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  const countryCodes = Object.keys(metadata.countries);

  return countryCodes.map((iso) => {
    const countryData = metadata.countries[iso];
    const dialCode = `+${countryData[0]}`;

    return {
      iso,
      name: displayNames.of(iso),
      dialCode,
    };
  });
}
