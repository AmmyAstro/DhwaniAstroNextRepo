
"use client";
import { useState } from 'react';
import { PACKAGES, SESSION_LENGTHS, BASE_PRICE, TYPES } from "./package";
import CustomButton from '@/components/Custom/CustomButton';


export default function Packdet({ data , onNext, astrologerTypes }) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [lengthKey, setLengthKey] = useState("HALF_HOUR");
    const [pkgId, setPkgId] = useState("single");
    const [contyp, setContyp] = useState(null);

scrollToTop();
    const sessionLen = SESSION_LENGTHS[lengthKey];
    const pkg = PACKAGES.find((p) => p.id === pkgId);

    if (!pkg) {
        return <div>Error: Selected package not found</div>;
    }
    const rawPrice = BASE_PRICE * sessionLen.multiplier * pkg.sessions;
    const finalPrice = rawPrice * (1 - pkg.discount);

    return (

        <div className="space-y-3 text-black">
            <div className="flex flex-col">
                <h1 className="md:text-2xl text-[17px] md:font-bold font-semibold text-black">
                    {data.mainnm}
                </h1>
                <p className="md:text-md text-[13px]">
                   {data.desc}
                </p>
            </div>
            <div className="bg-white rounded-2xl md:py-4 py-2 w-full relative">
                <h2 className="md:text-[18px] text-[15px] md:font-bold font-semibold md:mb-4 mb-2">
                    Choose Consultation Type
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.keys(astrologerTypes).map((key) => (
                        <div
                            key={key}
                            onClick={() => setContyp(key)}
                            className={`cursor-pointer text-center p-3 md:text-sm text-[12px] font-semibold border border-gray-300 rounded-xl shadow transition-all duration-200 ${contyp === key
                                ? "bg-purple-500 text-white border-purple-500"
                                : "bg-purple-100 text-black hover:bg-purple-200"
                                }`}
                        >
                            {astrologerTypes[key].label}
                        </div>
                    ))}
                </div>
            </div>

   

            <div className="flex flex-col gap-2">
                <h5 className="md:text-[18px] text-[15px] md:font-bold font-semibold">
                    Get Consultation according to the Time Duration:
                </h5>
                <div className="flex gap-2 flex-wrap">
                    {Object.keys(SESSION_LENGTHS).map((key) => (
                        <button aria-label={`Select session length ${SESSION_LENGTHS[key].label}`}
                            key={key}
                            onClick={() => setLengthKey(key)}
                            className={`px-4 md:text-sm text-[12px] font-semibold py-2 rounded-lg border border-gray-300 ${lengthKey === key
                                ? "bg-purple-500 text-white"
                                : "bg-purple-100"
                                }`}
                        >
                            {SESSION_LENGTHS[key].label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h5 className="md:text-sm text-[15px] font-semibold">
                    Please select session:
                </h5>
                <div className="grid grid-cols-3 gap-4">
                    {PACKAGES.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => setPkgId(p.id)}
                            className={`cursor-pointer   rounded-2xl border-gray-300 p-3 border shadow ${pkgId === p.id
                                ? "bg-purple-500 text-white"
                                : "bg-purple-100"
                                }`}
                        >
                            <h3 className="md:text-sm text-[12px] font-semibold">{p.name}</h3>
                            {p.discount > 0 && (
                                <span className={`text-xs  `}>
                                    Save {Math.round(p.discount * 100)}%
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center text-xl font-bold">
                ₹{finalPrice.toLocaleString()}
                <span className="text-sm font-normal"> incl. GST</span>
            </div>

            <CustomButton aria-label="Book Now" variant={"purple"} onClick={onNext} className="w-full bg-purple-500 hover:bg-purple-700 text-white md:py-3 py-2 rounded-xl">
                Book Now
            </CustomButton>
        </div>
    )
}