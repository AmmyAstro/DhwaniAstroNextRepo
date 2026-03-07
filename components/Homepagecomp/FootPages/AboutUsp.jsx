"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangContext";

export default function AboutP() {
            const {messages:t} = useLanguage();

    return (
        <div className="w-full flex flex-col items-center">
            <section className="horo-icons-zod relative w-full mx-auto py-5 mt-1.5 h-36 sm:py-5 px-4 rounded-b-xl  overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-3/3 h-full bg-cover  bg-center"
                        style={{ backgroundImage: "url('/ds-img/mnew.jpg')" }}
                    ></div>
                </div>

                <div className="relative service-horocope flex flex-col justify-center">
                    <div className=" flex flex-col  justify-center  bg-[#000000c0] px-15 py-5 w-[50%] place-self-center rounded-xl">
                        <span className="text-2xl text-white font-bold place-self-center">{t?.fopages?.f1 || "About Us"}</span>
                        <h1 dangerouslySetInnerHTML={{__html: t?.fopages?.f2 || "Unlock Your Destiny With Dhwani Astro"}} className="text-[#efd335] text-base sm:text-xl  text-center font-semibold"/>
                    </div>
                </div>

            </section>
          
            <div className="max-w-7xl place-self-center text-black py-5">
                <div className="flex flex-col items-center  gap-5">
                    <div className="abp">
                        <p className="text-base text-center">{t?.fopages?.f3 || "Dhwani Astro is India's most renowned astrology consultancy company. We're an online marketplace for.."}.</p>
                    </div>

                    <div className="max-w-6xl mx-auto p-4 md:p-4">
                        <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-xl flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 neumorphism-card">
                            <div className="flex-shrink-0">
                                <div className="w-60 h-60 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
                                    <Image
                                        src="/prblm/gajanand.jpeg"
                                        alt="Pandit Gajanand Dixit"
                                        width={208}
                                        height={208}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>


                            <div className="text-center md:text-left text-gray-800">
                                <h2 className="text-2xl md:text-3xl font-semibold text-purple-900  capitalize">
                                    {t?.fopages?.f4 || "DAIVAGYA SHIROMANI PANDIT GAJANAND DIXIT"}
                                </h2>
                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.f5 || "Mentor"}</h3>
                                <p className="mt-4 text-sm md:text-sm leading-relaxed text-gray-700">
                                    {t?.fopages?.f6 || "A renowned Vedic Astrologer, Scholar & Life Coach having experience of more than 35+ years in the Field of Vedic Astrology"}.
                                    <br />
{t?.fopages?.f7 || "He opted the path of Vedic Culture and Sciences to enshrine the roots of wisdom, spirituality, dharma, self awareness and Devotion."}                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto p-4 md:p-4">
                        <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-xl flex flex-col md:flex-row items-center gap-6 p-4 md:p-6 neumorphism-card">
                            <div className="flex-shrink-0">
                                <div className="w-60 h-auto rounded-lg overflow-hidden shadow-xl border-4 border-white bg-white">
                                    <Image
                                        src="/prblm/dhwani-jain.jpg"
                                        alt="         Dhwani Jain"
                                        width={208}
                                        height={208}
                                        className=" bg-center object-cover w-full h-full "
                                    />
                                </div>
                            </div>


                            <div className="text-center md:text-left text-gray-800">
                                <h2 className="text-2xl md:text-3xl font-semibold text-purple-900  capitalize">
                                    {t?.fopages?.f8 || "Dhwani Jain"}
                                </h2>
                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.f9 || "Founder"}</h3>
                                <p className="mt-4 text-sm md:text-sm leading-relaxed text-gray-700">
                                    {t?.fopages?.f10 || "A Legal consultant by profession, Mrs Dhwani found her path into spirituality 12 years ago, when she met her guru. And it was under his guidance and blessings, she discovered the real meaning of life."}
                                    <br />
                                    {t?.fopages?.f11 || "Her journey started with meditation, but little did she know that it would lead her to a new world of spirituality and cosmic."}
                                    <br />
                                    {t?.fopages?.f12 || "Passionate to provide skilled and holistic guidance to everyone in need, Dhwani jain along with the team of expert are here to guide you."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  