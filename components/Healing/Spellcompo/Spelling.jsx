"use client";

import useScrollZoom from "@/Hooks/scrollZoom";
import CustomInput from "@/components/Custom/CustomInput";
import Searchtop from "@/components/Smcompo/Searchtop";
import Image from "next/image";
import Link from "next/link";

export default function Spelling() {
    useScrollZoom(".head-wrap");
    const spelling = [
        { name: "Love Spell", img: "/prblm/sp1.jpg", pri: "999", description:  "Pranic Healing is a natural, no-touch energy healing technique that aims to balance and harmonize the body's energy.", link: "/spelling/sp1" },
        { name: "Career Spell", img: "/prblm/sp2.jpg", pri: "1000", description: "Pregnancy Healing helps you recover from a tough or long birth by improving your physical and emotional well-being.", link: "/spelling/sp2" },
        { name: "Blessing Spell", img: "/prblm/sp3.jpg", pri: "888", description: "Legal Matters Healing is a specialized energy healing approach aimed at reducing.", link: "/spelling/sp3" },
        { name: "Protection Spell", img: "/prblm/sp4.jpg", pri: "1999", description: "Prosperity Healing is an energy-based healing technique focused on removing energetic.", link: "/spelling/sp4" },
        { name: "Love Honey Spell", img: "/prblm/sp5.jpg", pri: "2999", description: "Career Healing is a focused energy healing technique that helps release mental blocks.", link: "/spelling/sp5" },
        { name: "Family Protection and Blessing Spell", img: "/prblm/sp6.jpg", pri: "1001", description: "Medical Healing is an energy-based support system that complements conventional medical.", link: "/spelling/sp6" },
        { name: "Finance Spell", img: "/prblm/sp7.jpg", pri: "800", description: "Angel Healing is a gentle spiritual healing method that involves calling upon divine angelic light.", link: "/spelling/sp7" },
        { name: "Call My Love Back Spell", img: "/prblm/sp8.jpg", pri: "900", description: "A Relationship Healing Session helps to mend emotional wounds and restore harmony relationships.", link: "/spelling/sp8" },
        { name: "Forever Love Spell", img: "/prblm/sp3.jpg", pri: "1300", description: "Chakra Healing Sessions help balance and align the body’s energy centers, promoting overall peace.", link: "/spelling/sp9" },
        { name: "Divine Marriage & Blessing Spell", img: "/prblm/sp9.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp10" },
        { name: "Aura Cleansing and Peace Spell", img: "/prblm/sp13.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp11" },
        { name: "Career Advancement and Success Spell", img: "/prblm/sp14.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp12" },
        { name: "Evil Eye Removal Spell", img: "/prblm/sp11.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp13" },
        { name: "Money Magnet Spell", img: "/prblm/sp10.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp14" },
        { name: "Success Attraction Spell", img: "/prblm/sp15.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp15" },
        { name: "Jealousy Removal Spell", img: "/prblm/sp5.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp16" },
        { name: "Get Your Dream Job", img: "/prblm/sp16.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp17" },
        { name: "Business Boom Spell", img: "/prblm/sp17.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp18" },
        { name: "Lost Love Manifestation Spell", img: "/prblm/sp18.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp19" },
        { name: "Interview Success Spell", img: "/prblm/sp19.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp20" },
        { name: "Impression & Confidence Spell", img: "/prblm/sp20.jpg", pri: "1400", description: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life process.", link: "/spelling/sp21" },

    ];

    return (
        <section className=" relative p-2 sm:p-5 flex w-full flex-col items-center self-center ">
    <Searchtop/>

            <div className="healing-card-main grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 py-5 xl:p-5 w-[100%] xl:w-[90%]">
                {spelling.map((spell, index) => (
                    <div
                        key={index}
                        className="element-item head-wrap cat-Service  rounded-[2rem] overflow-hidden bg-[#892be226] shadow-xl text-center"
                        data-category="cat-Service"
                    >
                        <div className="block">

                            <div className="relative w-full sm:h-50 h-35 overflow-hidden">
                                <Image
                                    src={spell.img}
                                    alt="healing product"
                                    className="w-full h-full object-cover"
                                    width={300}
                                    height={160}
                                    style={{
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                    }}
                                />
                            </div>

                            <div className="sm:p-2 p-1">
                                <h3 className="text-[#8a2be2] font-bold text-base  sm:text-lg mb-1">{spell.name}</h3>

                                {/* <div className="inline-block bg-white px-4 py-1 rounded-full text-[#333] text-sm font-semibold shadow-md mb-2">
                  ₹{heal.pri} Per Session
                </div> */}

                                <p className="text-xs text-gray-500 hidden sm:block">
                                    {spell.description.slice(0, 75)}{spell.description.length > 75 ? '...' : ''}
                                </p>

                                <div className="mt-1 sm:mt-3 mb-1 flex flex-col lg:flex-row w-full items-center justify-around gap-2 sm:gap-3">
                                    <div className="flex flex-col w-full items-center gap-1">
                                        <span className="inline-block text-[#8a2be2] bg-white px-2 py-1 rounded-full font-bold text-xs sm:text-base shadow-md">
                                            ₹ {spell.pri} <span className="text-[10px] sm:text-xs">Per Session</span>
                                        </span>

                                    </div>
                                    <Link href={spell.link} className="bg-[#8a2be2] w-[80%] text-white px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-base font-medium hover:bg-[#7325c0] transition">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </section> 
    );
}
