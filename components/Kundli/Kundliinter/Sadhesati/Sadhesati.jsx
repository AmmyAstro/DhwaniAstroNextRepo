"use client";

export default function Sadhesati(props) {
  console.log("CLIENT Sadhesati PROPS:", props);

  const { satiData, remeData, detailsData } = props;

  if (!satiData) {
    console.error("CLIENT ❌ satiData missing", props);
    return <p className="text-red-500 text-center">Failed to load Sadhesati data.</p>;
  }
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h5 className="text-xl md:text-2xl text-black font-semibold text-center mb-4">
        <span className="text-red-500">Sadhesati </span> Report
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-5 rounded-2xl bg-linear-to-r from-pink-100 to-yellow-100 shadow-lg text-black border border-orange-300">
        <Card label="Is Present" value={satiData.sadhesati_status ? "Yes" : "No"} />
        <Card label="Saturn Sign" value={satiData.saturn_sign || "—"} />
        <Card label="Saturn Retrograde" value={satiData.is_saturn_retrograde ? "Yes" : "No"} />
        <Card label="Moon Sign" value={satiData.moon_sign || "—"} />
      </div>

      {remeData?.what_is_sadhesati && (
        <div className="mt-6 bg-violet-100 rounded-2xl p-6 shadow">
          <h4 className="text-lg font-semibold text-purple-900 mb-2">
            What is Sadhesati?
          </h4>
          <p className="text-gray-800 leading-relaxed">
            {remeData.what_is_sadhesati}
          </p>
        </div>
      )}

      {Array.isArray(remeData?.remedies) && (
        <div className="mt-6 bg-purple-100 rounded-2xl p-6 shadow">
          <h4 className="text-lg font-semibold text-purple-900 mb-4">
            Remedies for Sadhe Sati
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            {remeData.remedies.map((remedy, index) => (
              <li key={index}>{remedy}</li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(detailsData) && detailsData.length > 0 && (
        <div className="mt-6 overflow-x-auto bg-white rounded-2xl shadow border">
          <h4 className="text-lg bg-purple-200 text-purple-900  font-semibold text-center px-6 py-4">
            Sadhe Sati Timeline
          </h4>

          <table className="min-w-full text-sm text-gray-800">
            <tbody>
              {detailsData.map((item, index) => (
                <tr key={index} className="grid grid-cols-6">
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.type?.replace(/_/g, " ")}</td>
                  <td className="px-4 py-2">{item.moon_sign}</td>
                  <td className="px-4 py-2">{item.saturn_sign}</td>
                  <td className="px-4 py-2">{item.is_saturn_retrograde ? "Yes" : "No"}</td>
                  <td className="px-4 py-2">{item.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


function Card({ label, value }) {
  return (
    <div className="flex items-center shadow font-semibold justify-around bg-purple-50 rounded-lg text-black flex-col sm:flex-row md:rounded-full px-2 md:px-5 py-2">
      <h4 className="text-base text-purple-700 font-semibold">{label}</h4>
      <p className="text-base font-light">{value}</p>
    </div>
  );
}
