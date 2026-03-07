"use client";

import { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/Custom/CustomButton";
import { useRouter } from "next/navigation";

const DOSHAS = [
    { id: "manglik", name: "Manglik Dosha", img: "/ds-img/mars.gif" },
    { id: "kal", name: "Kaal Sarp Dosha", img: "/ds-img/k7.png" },
    { id: "pitra", name: "Pitra Dosha", img: "/ds-img/horoscope.gif" },
    { id: "sade", name: "Sade Sati", img: "/ds-img/uranus.gif" },
];

export default function Doshas({
    manglikData,
    kalSharpData,
    pitraDoshaData,
    satiData,
}) {
    console.log("CLIENT Doshas PROPS:", {
        manglikData,
        kalSharpData,
        pitraDoshaData,
        satiData,
    });

    const [active, setActive] = useState("manglik");
    const router = useRouter();

    const dataMap = {
        manglik: manglikData,
        kal: kalSharpData,
        pitra: pitraDoshaData,
        sade: satiData,
    };

    const Info = ({ label, value, block }) => (
        <div className="mb-2 text-sm text-black">
            <strong>{label}:</strong>{" "}
            {block ? (
                <div dangerouslySetInnerHTML={{ __html: value }} />
            ) : (
                <span>{String(value)}</span>
            )}
        </div>
    );

const goToRem = () => {
  router.push(`/inKundli/getKundlipage/suggestion?hash=${searchParams.hash}`);
};


    const renderDetails = () => {
        const dosha = dataMap[active];

        if (!dosha) {
            return (
                <p className="text-center text-gray-500">
                    No data available for this dosha.
                </p>
            );
        }

        switch (active) {
            case "manglik":
                return (
                    <>
                        <Info label="Manglik Dosha Present" value={dosha.is_present ? "Yes" : "No"} />
                        <Info label="Manglik Status" value={dosha.manglik_status} />
                        <Info label="Percentage" value={`${dosha.percentage_manglik_present}%`} />
                        <Info
                            label="After Cancellation"
                            value={`${dosha.percentage_manglik_after_cancellation}%`}
                        />
                        <Info label="Report" value={dosha.manglik_report} block />
                    </>
                );

            case "kal":
                return (
                    <>
                        <Info label="Kalsharp Dosha Present" value={dosha.present ? "Yes" : "No"} />
                        <Info label="Type" value={dosha.type} />
                        <Info label="Name" value={dosha.name} />
                        <Info label="House Affected" value={dosha.report?.house_id} />
                        <Info label="One-liner" value={dosha.one_line} />
                        <Info label="Report" value={dosha.report?.report} block />
                    </>
                );

            case "pitra":
                return (
                    <>
                        <Info
                            label="Pitra Dosha Present"
                            value={dosha.is_pitri_dosha_present ? "Yes" : "No"}
                        />
                        <Info label="What is it?" value={dosha.what_is_pitri_dosha} block />
                        <Info label="Causes" value={dosha.rules_matched} block />
                        <Info label="Conclusion" value={dosha.conclusion} block />
                        <Info label="Effects" value={dosha.effects} block />
                    </>
                );

            case "sade":
                return (
                    <>
                        <Info label="Sade Sati Present" value={dosha.sadhesati_status ? "Yes" : "No"} />
                        <Info label="Saturn Retrograde" value={dosha.is_saturn_retrograde ? "Yes" : "No"} />
                        <Info label="Saturn Sign" value={dosha.saturn_sign} />
                        <Info label="Moon Sign" value={dosha.moon_sign} />
                        <Info label="Is Undergoing Sade Sati" value={dosha.is_undergoing_sadhesati ? "Yes" : "No"} />
                        <Info label="What is Sadhesati?" value={dosha.what_is_sadhesati} block />
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full p-4">
            <h2 className="text-xl font-semibold text-center text-purple-700 mb-4">
                • Dosha in Kundli •
            </h2>

            <div className="grid grid-cols-4 gap-4 mb-6">
                {DOSHAS.map((d) => {
                    const doshaData = dataMap[d.id];
                    const isPresent =
                        doshaData?.is_present ??
                        doshaData?.present ??
                        doshaData?.is_pitri_dosha_present ??
                        doshaData?.sadhesati_status;

                    return (
                        <div
                            key={d.id}
                            className="bg-linear-to-r from-[#c54e5a6b] to-[#7042ac98] rounded-xl shadow-lg p-3 text-center flex flex-col items-center"
                        >
                            <Image
                                src={d.img}
                                alt={d.name}
                                width={40}
                                height={40}
                                unoptimized
                                className="rounded-full"
                            />
                            <span className="text-white font-semibold text-sm mt-1">
                                {d.name}
                            </span>
                            <span className="text-xs bg-white text-black rounded-full px-2 py-1 mt-1">
                                Present: <b>{isPresent ? "Yes" : "No"}</b>
                            </span>
                            <button
                                onClick={() => setActive(d.id)}
                                className={`mt-2 px-4 py-1 text-xs font-semibold rounded-full ${active === d.id ? "bg-purple-600 text-white" : "bg-[#fff8] text-purple-600"}`} >
                                View
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="p-4 bg-purple-50 shadow-md rounded-lg border-2 border-violet-300">
                {renderDetails()}
                <CustomButton
                    onClick={goToRem}
                    className="mt-4 bg-purple-400 px-3 py-1 text-white hover:bg-purple-500 text-sm rounded-full"
                >
                    Click to check Remedies and Suggestions
                </CustomButton>
            </div>
        </div>
    );
}
