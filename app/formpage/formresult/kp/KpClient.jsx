"use client";

function roundUp(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.ceil(num * factor) / factor;
}

export default function KpClient({ kp, houseData, planetSigData }) {
  if (!kp?.length || !houseData?.length || !planetSigData?.length) {
    return (
      <div className="text-center text-red-500">
        KP Card data not available.
      </div>
    );
  }

  return (
    <section className="kundli-inter-page w-full flex justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-6">

        <h2 className="text-xl font-bold text-center">
          <span className="text-red-500">Krishnamurti</span> Paddhati (KP)
        </h2>

      
        <Section title="KP Planets ">
          <div className="overflow-x-auto text-black">
            <div className="min-w-[60rem]">
              <div className="grid grid-cols-11 bg-purple-500 text-white px-4 py-2">
                {[
                  "Planet ID",
                  "Name",
                  "Degree",
                  "Retro",
                  "House",
                  "Sign",
                  "Sign Lord",
                  "Nakshatra",
                  "Nakshatra Lord",
                  "Charan",
                  "Sub Lord",
                ].map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>

              {kp.map((p, i) => (
                <div
                  key={i}
                  className="grid grid-cols-11 bg-purple-100 px-4 py-2"
                >
                  <span>{p.planet_id}</span>
                  <span>{p.planet_name}</span>
                  <span>{roundUp(p.degree, 2)}</span>
                  <span>{p.is_retro ? "Yes" : "No"}</span>
                  <span>{p.house}</span>
                  <span>{p.sign}</span>
                  <span>{p.sign_lord}</span>
                  <span>{p.nakshatra}</span>
                  <span>{p.nakshatra_lord}</span>
                  <span>{p.charan}</span>
                  <span>{p.sub_lord}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>


        <Section title="KP Houses Significators">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
            {houseData.map((h) => (
              <div key={h.house_id} className="p-4 bg-purple-50 rounded">
                <h3 className="font-bold text-purple-700">
                  House {h.house_id}
                </h3>
                <p>{h.significators.join(", ")}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="KP Planet Significators">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
            {planetSigData.map((p) => (
              <div key={p.planet_id} className="p-4 bg-purple-50 rounded">
                <h3 className="font-bold">{p.planet_name}</h3>
                <p>{p.significators.join(", ")}</p>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h3 className="text-lg font-bold text-center mb-4">
        {title}
      </h3>
      {children}
    </section>
  );
}
