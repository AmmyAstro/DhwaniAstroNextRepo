'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetChartKundliMutation } from '@/app/redux/services/astrologyAPI';
// import { useAPIFetchMHook } from '@/Hooks/useAPIFetchMHook';
import Basicdetail from './Basicdetail';


function colorizeKundliSvg(svg) {
  const colorMap = {
    Su: "#ff6f00", Mo: "#800080", Ma: "#ff00fe", Me: "#0000ff",
    Ve: "#034804", Sa: "#a52a2a", Ju: "#aa00ff", Ra: "#f44336",
    Ke: "#008000", Ur: "#ff1f1f",
    1: "#ff0000", 2: "#827717", 3: "#0000ff", 4: "#c51162", 5: "#ff00ff",
    6: "#f57c00", 7: "#800000", 8: "#008000", 9: "#000080", 10: "#ffa500",
    11: "#a52a2a", 12: "#800080",
  };

  return svg.replace(
    /<text([^>]*)>([^<]+)<\/text>/g,
    (match, attrs, inner) => {
      const key = inner.split(/[\s\-]/)[0];
      const fill = colorMap[key] || "#000000";
      attrs = attrs.replace(/style="[^"]*"/gi, '').replace(/fill="[^"]*"/gi, '');
      return `<text${attrs} fill="${fill}" style="fill:${fill}">${inner}</text>`;
    }
  );
}


function beautifyKundliSvg(svg) {
  svg = colorizeKundliSvg(svg);
  svg = svg.replace(
    /<svg([^>]*)>/,
    `<svg$1 style="background-color:#f1ebffb3; border-radius: 12px; padding: 9px;">`
  );
  svg = svg.replace(/stroke="black"/gi, `stroke="#FFD700"`);
  svg = svg.replace(/<text([^>]*)>/g, `<text$1 font-size="16" font-weight="600" fill="#333" dx="-4">`);
  svg = svg.replace(
    /<svg([^>]*)width="([^"]+)"([^>]*)height="([^"]+)"([^>]*)>/,
    `<svg$1 viewBox="0 0 350 350"$3$5>`
  );
  return svg;
}

export default function Basichart() {
  const formData = useSelector((state) => state.daUserForm);
  const [getChartKundli] = useGetChartKundliMutation();

  const [chartData, setChartData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (
      !formData?.day || !formData?.month || !formData?.year ||
      !formData?.hour || !formData?.min || !formData?.lat ||
      !formData?.lon || !formData?.tzone
    ) return;

    const fetchCharts = async () => {
      setLoading(true);
      try {
        const chartTypes = ["chalit", "D9"];
        const responses = await Promise.all(
          chartTypes.map((type) =>
            getChartKundli({ chartType: type, body: formData }).unwrap()
              .then((res) => ({ type, res }))
              .catch(() => ({ type, res: null }))
          )
        );

        const merged = {};
        responses.forEach(({ type, res }) => {
          if (res && res.svg) {
            merged[type] = res;
          }
        });

        setChartData(merged);
      } catch (err) {
        // console.error("Chart API error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharts();
  }, [formData, getChartKundli]);

  if (loading) return <div className="flex justify-center flex-col gap-4 items-center h-32">
    <span className="loader-all"></span>
    <span className="ml-3 text-purple-600 font-medium">Loading Reports...</span>
  </div>;
  if (error) return <p className="text-red-500">Failed to load chart data.</p>;

  const chartTypes = ["chalit", "D9"];
  const chartLabels = {
    chalit: "Lagna / Ascendant / Basic Birth Chart",
    D9: "Navamsa (Prospects of marriage)",
  };

  return (

    <div className="basic-kundli-charts flex flex-col gap-6 items-center">
      <div className="text-sm md:text-xl text-white text-center font-bold bg-[#2f1254] rounded-lg px-10 py-2 w-full shadow-lg">
        Dhwani Astro Kundli Birth Chart & Planetary Positions
      </div>
      <div className="lag-nav-chart w-full grid md:grid-cols-2 gap-6">
        {chartTypes.map((type) => (
          <div key={type} className="lagna-chart flex flex-col items-center gap-2">
            <h5 className="text-xs md:text-sm text-white bg-[#2f12549e] rounded-full px-6 py-1 capitalize">
              {chartLabels[type]}
            </h5>
            <div className="chart-img w-full">
              {chartData[type]?.svg ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: beautifyKundliSvg(chartData[type].svg),
                  }}
                />
              ) : (
                <p className="text-center text-red-500">Chart not available</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Basicdetail />
    </div>
  );
}





