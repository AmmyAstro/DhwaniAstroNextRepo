"use client";
import { useSelector } from "react-redux";
import { useGetChartKundliMutation } from "@/app/redux/services/astrologyAPI";
import { useState, useEffect } from "react";

function colorizeKundliSvg(svg) {
  const colorMap = {
    Su: "#ff6f00", Mo: "#800080", Ma: "#ff00fe", Me: "#0000ff",
    Ve: "#034804", Sa: "#a52a2a", Ju: "#aa00ff", Ra: "#f44336",
    Ke: "#008000", Ur: "#ff1f1f",
    1: "#ff0000", 2: "#827717", 3: "#0000ff", 4: "#c51162", 5: "#ff00ff",
    6: "#f57c00", 7: "#800000", 8: "#008000", 9: "#000080",
    10: "#ffa500", 11: "#a52a2a", 12: "#800080",
  };

  return svg.replace(/<text([^>]*)>([^<]+)<\/text>/g, (match, attrs, inner) => {
    const key = inner.split(/[\s\-]/)[0];
    const fill = colorMap[key] || "#000000";
    attrs = attrs.replace(/style="[^"]*"/gi, "").replace(/fill="[^"]*"/gi, "");
    return `<text${attrs} fill="${fill}" style="fill:${fill}">${inner}</text>`;
  });
}

function beautifyKundliSvg(svg) {
  svg = colorizeKundliSvg(svg);
  svg = svg.replace(
    /<svg([^>]*)>/,
    `<svg$1 style="background-color:#f1ebffb3; border-radius: 12px; padding: 9px;">`
  );
  svg = svg.replace(/stroke="black"/gi, `stroke="#FFD700"`);
  svg = svg.replace(
    /<text([^>]*)>/g,
    `<text$1 font-size="16" font-weight="600" fill="#333" dx="-4">`
  );
  svg = svg.replace(
    /<svg([^>]*)width="([^"]+)"([^>]*)height="([^"]+)"([^>]*)>/,
    `<svg$1 viewBox="0 0 350 350"$3$5>`
  );
  return svg;
}

export default function Charts() {
  const formData = useSelector((state) => state.daUserForm);
  const [getChartKundli] = useGetChartKundliMutation();

  const [chartSvgs, setChartSvgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const chartType = [
    "SUN", "MOON", "D1", "D2", "D3", "D4", "D5", "D7", "D8",
    "D9", "chalit", "D10", "D12", "D16", "D20", "D24", "D27",
    "D30", "D40", "D45", "D60"
  ];

  const chartLabels = {
    SUN: "Sun Chart",
    MOON: "Moon Chart",
    D1: "Rasi Chart",
    D2: "Hora (Wealth / Income Chart)",
    D3: "Drekkana (Relationship with siblings)",
    D4: "Chaturthamsa (Assets)",
    D5: "Panchamsha Chart",
    D7: "Saptamsa (Progeny)",
    D8: "Ashtamansha Chart",
    D9: "Navamsa (Prospects of marriage)",
    chalit: "Lagna / Ascendant / Basic Birth Chart",
    D10: "Dasamsa (Profession)",
    D12: "Dwadasamsa (Native parents / Ancestors)",
    D16: "Shodasamsa (Travel)",
    D20: "Vimsamsa (Spiritual progress)",
    D24: "Chaturvimsamsa (Intellectual)",
    D27: "Saptavimsamsa (Strength / Protection)",
    D30: "Trimsamsa (Misfortunes)",
    D40: "Khavedamsa (Auspicious time)",
    D45: "Akshavedamsa (General issues)",
    D60: "Shashtymsha Chart",
  };

  useEffect(() => {
    if (
      !formData?.day ||
      !formData?.month ||
      !formData?.year ||
      !formData?.hour ||
      !formData?.min ||
      !formData?.lat ||
      !formData?.lon ||
      !formData?.tzone
    ) {
      return;
    }

    const fetchCharts = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await Promise.all(
          chartType.map(async (type) => {
            try {
              const res = await getChartKundli({
                chartType: type,
                body: {
                  day: Number(formData.day),
                  month: Number(formData.month),
                  year: Number(formData.year),
                  hour: Number(formData.hour),
                  min: Number(formData.min),
                  lat: Number(formData.lat),
                  lon: Number(formData.lon),
                  tzone: Number(formData.tzone),
                },
              }).unwrap();

              return { type, svg: res?.svg ? beautifyKundliSvg(res.svg) : null };
            } catch (err) {
              // console.error(`❌ Error fetching ${type}:`, err);
              return { type, svg: null };
            }
          })
        );

        setChartSvgs(results);
      } catch (err) {
        setError("Failed to fetch charts");
      } finally {
        setLoading(false);
      }
    };

    fetchCharts();
  }, [formData, getChartKundli]);

  if (
    !formData?.day ||
    !formData?.month ||
    !formData?.year ||
    !formData?.hour ||
    !formData?.min ||
    !formData?.lat ||
    !formData?.lon ||
    !formData?.tzone
  ) {
    return <p className="text-center text-gray-400">Waiting for user data...</p>;
  }

  if (loading) {
    return (
      <div className="flex justify-center flex-col gap-4 items-center h-32">
        <span className="loader-all"></span>
        <span className="ml-3 text-purple-600 font-medium">Loading Reports...</span>
      </div>
    );
  }

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!chartSvgs.length) {
    return <p className="text-center text-red-500">No charts available</p>;
  }

  return (
    <div className="basic-kundli-charts flex flex-col gap-6 items-center">
      <div className="lag-nav-chart w-full grid md:grid-cols-2 gap-6">
        {chartSvgs.map((chart) => (
          <div
            key={chart.type}
            className="lagna-chart flex flex-col items-center gap-2"
          >
            <h5 className="text-xs md:text-sm text-white bg-[#2f12549e] rounded-full px-6 py-1 capitalize">
              {chartLabels[chart.type] || chart.type}
            </h5>
            <div className="chart-img w-full">
              {chart.svg ? (
                <div
                  className="w-full h-auto object-contain flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: chart.svg }}
                />
              ) : (
                <p className="text-center text-red-500">Chart not available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
