"use client";

import React from "react";

export default function LalkitabClient({
  kitabData,
  debtData,
  houseData,
  planetData,
}) {
  if (!kitabData || !debtData || !houseData || !planetData) {
    return (
      <div className="flex justify-center items-center h-32">
        <span className="loader-all" />
      </div>
    );
  }

  return (
    <div className="px-4 pb-10 flex flex-col gap-6 items-center">
      <h5 className="text-xl md:text-2xl font-semibold text-black">
        <span className="text-red-500">Lal Kitab</span> Prediction & Remedies
      </h5>


      <Section title="Lal Kitab Predictions">
        <div className="overflow-x-auto text-sm basic-box flex flex-col gap-1 w-160 md:w-full">
          <div className="grid grid-cols-5 bg-purple-400 text-white font-semibold px-4 py-2 rounded-t-lg">
            <span>Sign</span>
            <span>Sign Name</span>
            <span>Planet</span>
            <span>Planet Small</span>
            <span>Planet Degree</span>
          </div>

          {kitabData.map((item, i) => (
            <div key={i} className="grid grid-cols-5 px-4 py-2 bg-purple-100 text-black rounded-lg">
              <span>{item.sign}</span>
              <span>{item.sign_name}</span>
              <span>{item.planet?.join(", ") || "—"}</span>
              <span>{item.planet_small?.join(", ") || "—"}</span>
              <span>{item.planet_degree?.join(", ") || "—"}</span>
            </div>
          ))}
        </div>
      </Section>


      <Section title="Lal Kitab Debts mt-2" className="space-y-2">
        {debtData.map((d, i) => (
          <Card key={i} title={d.debt_name} className="border border-purple-300 p-4 rounded-2xl shadow-sm bg-purple-50">
            <p><b >Indications:</b> {d.indications}</p>
            <p><b>Events:</b> {d.events}</p>
          </Card>
        ))}
      </Section>

 
      <Section title="Lal Kitab Houses">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {houseData.map((h, i) => (
            <Card key={i} title={`House ${h.khana_number}`}>
              <p>Maalik: {h.maalik}</p>
              <p>Pakka Ghar: {h.pakka_ghar}</p>
              <p>Kismat: {h.kismat}</p>
                            <p>Soya : {h.soya }</p>

              <p>Exalt : {h.exalt}</p>

              <p>Debilitated : {h.debilitated }</p>

            </Card>
          ))}
        </div>
      </Section>


      <Section title="Lal Kitab Planets">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {planetData.map((p, i) => (
            <Card key={i} title={p.planet}>
              <p>Rashi: {p.rashi}</p>
              <p>Position: {p.position}</p>
              <p>Nature: {p.nature}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}



function Section({ title, children }) {
  return (
    <section className="w-full max-w-6xl space-y-3">
      <h2 className="text-xl font-bold text-purple-800 mb-3 text-center">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-purple-100 p-4 rounded-xl shadow text-sm text-black">
      <h4 className="text-purple-700 font-bold text-lg mb-2">{title}</h4>
      {children}
    </div>
  );
}
