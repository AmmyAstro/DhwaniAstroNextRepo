"use client";
import Image from "next/image";
import Link from "next/link";

import Callchatsec from "../Smcompo/Callchatsec";
import Freereport from "../Smcompo/Freereport";
import Recastro from "../Smcompo/Recastro";
import dynamic from "next/dynamic";




const categories = [
    { name: "Horoscope", smanme: "H" },
    { name: "Festivals", smanme: "F" },
    { name: "Transits & Retrograde", smanme: "T" },
    { name: "Celebrities", smanme: "C" },
    { name: "Numerology", smanme: "N" },
    { name: "Zodiacs & Planets", smanme: "Z" },
    { name: "Vedic astrology", smanme: "V" },
    { name: "Mythological Stories", smanme: "M" },
    { name: "Kundli", smanme: "K" },
    { name: "Remedies & Healing", smanme: "R" },
    { name: "Puja Vidhi", smanme: "P" },
    { name: "Mandir", smanme: "M" },
    { name: "Sports", smanme: "S" },
    { name: "Buisness", smanme: "B" },
    { name: "Palmistry", smanme: "P" },
    { name: "Tarot Reading", smanme: "T" },
    { name: "Vastu & Feng-Shui", smanme: "V" },
    { name: "Aarti, Chalisa & Mantra", smanme: "A" },
    { name: "Gemstones", smanme: "G" },
    { name: "Predictions", smanme: "P" },
];
const mvblarr = [
    { src: "/prblm/jobp4.jpg", state: "3 Zodiac Signs that will see a rise in wealth in 2025" },
    { src: "/prblm/jobp4.jpg", state: "5 Remedies that will helop you in this year" },
    { src: "/prblm/marriage.jpeg", state: "10 Universe Signs in wealth in 2025" },
]
const recblarr = [
    { src: "/prblm/educat.jpeg", state: "3 Zodiac Signs that will see a rise in wealth in 2025" },
    { src: "/prblm/jobb.jpeg", state: "5 Remedies that will helop you in this year" },
    { src: "/prblm/educat.jpeg", state: "10 Universe Signs in wealth in 2025 ghrthjr rth 44hw h6" },
]
export default function Inblog() {
    return (
        <section className="flex flex-col gap-10 w-full md:w-[90%] py-10 ">
            <section className="blog-category-main flex flex-col lg:flex-row  gap-5">
                <div className="blog-sec-callchat flex flex-col gap-3 md:gap-5  basis-3/4 items-center justify-start">
                    <div className=" flex  flex-col gap-3 justify-center items-center">
                        <h6 className="text-black text-xl lg:text-2xl font-semibold">
                            Onam Festival 2024: Dates, Rituals and Significance
                        </h6>
                        <div className="bldate-nw w-100 blog-date-card flex items-center justify-between ">
                            <span className="bldat1-nw flex items-start justify-between flex-col gap-2">
                                <span className="bl-d-t-nw flex items-center text-black gap-3">
                                    <svg width={18} height={18} viewBox="0 0 640 640"><path d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z" /></svg>                                    <span className="text-xs">March 15</span>
                                </span>
                                <span className="bl-d-c-nw text-xs text-black">
                                    By: Suman Ghosh
                                </span>
                            </span>

                            <span className="bldat1-nw bld-mob flex items-end justify-between gap-2 flex-col">
                                <span className="bl-d-t-nw flex items-center gap-3 text-black">
                                    <svg width={18} height={18} viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>

                                    <svg width={18} height={18} viewBox="0 0 640 640"><path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" /></svg>
                                </span>
                                <span className="bl-d-c-nw flex items-center text-black gap-2">
                                    <svg width={18} height={18} viewBox="0 0 512 512" ><path d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z" /></svg>
                                    <span className="text-xs">Comments</span>
                                </span>
                            </span>
                        </div>
                        <div className="w-full flex-col sm:flex-row flex rounded-lg overflow-hidden">
                            <div className="img-blog-nw basis-4/6">
                                <Image
                                    src="/ds-img/onman.webp"
                                    width={100}
                                    height={100}
                                    unoptimized
                                    alt="blog image"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="basis-2/6 bg-[#a298bd8e] p-5 flex items-center justify-center">
                                <div className=" blog-side-con gap-2 flex flex-col items-center justify-center">
                                    <h6 className="text-black text-base font-semibold text-center">
                                        Need Guidance On Your Problems?
                                    </h6>
                                    <p className="text-black text-sm text-center">
                                        Consult With The Best Online Astrologers
                                    </p>
                                    <div className=" flex  sm:flex-col w-full gap-2">
                                        <Link href={"/homepage/callAstro"}>

                                            <button aria-label="Talk To Astrologers"
                                                type="button"
                                                className="rounded-full hover:scale-102 cursor-pointer w-full bg-green-600 p-3 text-xs"
                                            >
                                                Talk To Astrologers
                                            </button>
                                        </Link>
                                        <Link href={"/homepage/chatAstro"}>

                                            <button aria-label="Chat With Astrologers"
                                                type="button"
                                                className="rounded-full hover:scale-102 w-full cursor-pointer bg-green-600 p-3 text-xs"
                                            >
                                                Chat With Astrologers
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-content-sec">
                            <p className="text-black text-base py-5 font-medium ">
                                One of the most asked questions is which is the best day for a
                                haircut or nail cut? As per astrology, there are many limitations
                                on the cutting of hair and nails.
                            </p>

                            <div className="blog-para-img">
                                <div className="bg-con-bx">
                                    <h5 className="text-sm text-black font-medium">
                                        Onam Festival 2024: Dates
                                    </h5>
                                    <p className="text-sm text-black">
                                        The main Onam festival is celebrated on 12th September 2024 on
                                        Sunday. However, the ritual is related to the Onam Festival
                                        this year starting on 6th September 2024 on Thursday and will
                                        continue till 17th September 2024 on Tuesday. There are
                                        different rituals related to Thiruvonam 2024 between 6th
                                        September 2024 to 17th September 2024.
                                    </p>
                                    <p className="text-black text-sm">
                                        Onam (Hindu New Year) is a festival celebrated on the 27th of
                                        January, marking the beginning of the new year in Hinduism. It
                                        is a time of renewal and rebirth, symbolizing the
                                        transformation of life from the cycle of birth, death, and
                                        rebirth. The festival is popular among Hindus and other
                                        communities, and it is believed to bring about a sense of
                                        renewal, spiritual growth, and a new beginning for all beings.
                                        Onam has been celebrated in various forms and styles
                                        throughout history, with various festivals and celebrations
                                        being held annually. In this blog, we will explore the
                                        significance of Onam, the dates of its festivals, and some
                                        popular rituals associated with it. Let's dive into the
                                        details.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Callchatsec />
                </div>
                <div className="category-sec basis-1/4 flex items-start justify-center">
                    <div className="da-store-card-nw grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-1 gap-5  items-start">
                        <div className="blog-cat-nw rounded-2xl">
                            <h6 className=" text-xl font-semibold text-center  text-black">
                                Dhwani Shop
                            </h6>
                            <div className="">
                                <Link href="https://shop.dhwaniastro.com/" className="decoration-none">
                                    <div className="category-nw flex flex-col rounded-lg overflow-hidden">
                                        <div className="bl-cath-f">
                                            <Image
                                                src="/ds-img/onman.webp"
                                                width={100}
                                                height={50}
                                                className="bl-hin h-50 w-full"
                                                alt="store image "
                                            />
                                        </div>
                                        <div className="b-fest-con-nw">
                                            <p className="b-fest-d">
                                                Dhwani Shop: Premium Religious Gifts, Gemstones, & Decor
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="blog-cat-nw rounded-2xl md:block">
                            <h6 className="text-xl font-semibold text-center  text-black">Category</h6>
                            <div className="bl-cat-main-nw grid grid-cols-3 lg:grid-cols-2 max-h-[400px] overflow-y-scroll">
                                {categories.map((categories, index) => (
                                    <Link href="#" key={index} className="category-nw flex flex-col  items-center justify-center">
                                        <div className="bl-cat-nw">{categories.smanme}</div>
                                        <h6 className="text-xs md:font-semibold text-black text-center">{categories.name}</h6>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="most-wrapper">
                                <div className="blog-cat zoom-image bg-purple-200 rounded-xl p-2">
                                    <h5 className="text-center  text-black text-lg font-semibold py-2">Most Viewed </h5>
                                    <div className="flex flex-col gap-2">
                                        {mvblarr.map((mv, index) => (
                                            <Link key={index} href="https://store.dhwaniastro.com/" className="text-decoration-none">
                                                <div className=" bg-[#ffffffba] pr-2 rounded-full  flex gap-2 items-center hover:scale-102">
                                                    <div className="trend-bi w-14 h-14 rounded-full overflow-hidden object-cover"><Image src={mv.src} className="trend-img object-cover  w-full h-full" width={100} height={100} alt="" />
                                                    </div>
                                                    <p className="text-[14px] w-60 text-gray-600 line-clamp-2">{mv.state}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="rec-wrapper">
                                <div className="blog-cat zoom-image bg-purple-200 rounded-xl p-2">
                                    <h5 className="text-center  text-black text-lg font-semibold py-2">Recent Blogs </h5>
                                    <div className="flex flex-col gap-2">
                                        {recblarr.map((rec, index) => (
                                            <Link key={index} href="https://store.dhwaniastro.com/" className="text-decoration-none">
                                                <div className="bg-[#ffffffba] pr-2 rounded-full  flex gap-2 items-center hover:scale-102">
                                                    <div className="trend-bi w-14 h-14 rounded-full overflow-hidden object-cover"><Image src={rec.src} className="trend-img object-cover  w-full h-full" width={100} height={100} alt="" />
                                                    </div>
                                                    <p className="text-[14px] w-60 text-gray-600 line-clamp-2">{rec.state}</p>

                                                </div>
                                            </Link>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Freereport />
            <Recastro />
        </section>
    );
}
