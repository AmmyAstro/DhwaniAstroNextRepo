"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Callchatsec from "../Smcompo/Callchatsec";
import Searchtop from "../Smcompo/Searchtop";



export default function Blogcomp() {
    useEffect(() => {
        const blogWrappers = document.querySelectorAll(
            ".most-wrapper, .rec-wrapper, .fol-wrapper, .blog-bx-wrapper, .callcaht-wrap"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            { threshold: 0.5 }
        );

        blogWrappers.forEach((wrapper) => {
            observer.observe(wrapper);
        });

        return () => {
            blogWrappers.forEach((wrapper) => {
                observer.unobserve(wrapper);
            });
        };
    }, []);


    const blogarray = [
        {
            id: 1,
            src: "/ds-img/onman.webp",
            ulname: "Phalguna Purnima 2025 Muhurat Date, Time, Significance & More ",
            dat: "September 11, 2024",
            vw: "666",
            textpa: "Purnima is one of the most auspicious days of the year. let' s explore Phalguna Purnima 2025 Muhurat Date, Time, Significance & More.",
            link: "/blogComp/inblog",
        },
        {
            id: 2,
            src: "/ds-img/ganc.webp",
            ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
            dat: "December 5, 2024",
            vw: "1232",
            textpa:
                "Purnima is one of the most auspicious days of the year. let' s explore Phalguna Purnima 2025 Muhurat Date, Time, Significance & More.",
            link: "/blogComp/inblog",

        },
        {
            id: 3,
            src: "/ds-img/dhg.webp",
            ulname: "Namkaran Muhurat 2025 Dates, Time, Significance and More ",
            dat: "January 5, 2025",
            vw: "8732",
            textpa:
                " A complete lunar eclipse or Blood Moon is visible in March. In this blog, we mentioned Blood Moon 2025 Date, Time, Visibility, and Astrological Effects.",
            link: "/blogComp/inblog",

        },
        {
            id: 4,
            src: "/ds-img/onman.webp",
            ulname: "Top 5 Zodiac Signs Are Most Likely to Become Parents in 2025 ",
            dat: "September 5, 2024",
            vw: "12372",
            textpa:
                "Do you want to know the zodiac signs that will have a baby in 2025? Let’s find out the top zodiac signs expecting a baby in 2025.",
            link: "/blogComp/inblog",

        },
        {
            id: 5,
            src: "/ds-img/dhg.webp",
            ulname: "Blood Moon 2025 Date, Time, Visibility & Astrological Effects",
            dat: "July 5, 2024",
            vw: "2",
            textpa:
                "As per Hinduism, the name you select for your kid has some special energy.  In this blog we explore Namkaran Muhurat 2025 Dates, Time, Significance and More.",
            link: "/blogComp/inblog",

        },
    ];
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

    const gotoblog = () => {
        router.push("/homepage/blogComp/inblog");
    };

    return (

        <section className=" relative p-0 sm:pt-4 pt-1 sm:p-5 w-[90%] sm:w-[95%] flex gap-1  flex-col items-center self-center ">

            <div className=" sm:hidden w-full mb-1 overflow-hidden">
                <div className="bl-cat-main-nw flex overflow-auto gap-1">
                    {categories.map((categories, index) => (
                        <Link href="#" key={index} className="text-decoration-none">
                            <div className="category-nw p-1 sm:w-25 w-21 md:w-30 flex flex-col  items-center justify-center">
                                <div className="bl-cat-nw">{categories.smanme}</div>
                                <h6 className="text-[10px] md:font-semibold text-black text-center">{categories.name}</h6>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Searchtop />

            <section className="blog-category-main flex flex-col lg:flex-row w-full md:w-[90%] lg:w-full py-5 gap-5">

                <div className="blog-sec-callchat flex flex-col gap-3 md:gap-5  basis-3/4 items-center justify-start">
                    <div className="blog-main-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-5 content-start">
                        {blogarray.map((blg, index) => (
                            <Link href={blg.link} key={index} className="blog-and-gem blog-bx-wrapper ">

                                <div className="blog-bx-nw gap-2 md:gap-0  grid grid-cols-5 hover:scale-102   md:flex flex-col">
                                    <div className="col-span-2 ">
                                        <Image
                                            src={blg.src}
                                            alt="image here"
                                            width={100}
                                            height={100}
                                            className="bl-img-nw md:h-42 h-26 hover:scale-102"
                                        />
                                    </div>

                                    <div className="bl-con-nw col-span-3 flex flex-col p-2  justify-between">
                                        <div className="decoration-none">
                                            <h6 className="text-sm font-semibold line-clamp-2 md:text-sm text-start text-[#4c307a]">{blg.ulname}</h6>
                                        </div>

                                        <div className="review_upper_image-nw">
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 96C239.2 96 174.5 132.8 127.4 176.6C80.6 220.1 49.3 272 34.4 307.7C31.1 315.6 31.1 324.4 34.4 332.3C49.3 368 80.6 420 127.4 463.4C174.5 507.1 239.2 544 320 544C400.8 544 465.5 507.2 512.6 463.4C559.4 419.9 590.7 368 605.6 332.3C608.9 324.4 608.9 315.6 605.6 307.7C590.7 272 559.4 220 512.6 176.6C465.5 132.9 400.8 96 320 96zM176 320C176 240.5 240.5 176 320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320zM320 256C320 291.3 291.3 320 256 320C244.5 320 233.7 317 224.3 311.6C223.3 322.5 224.2 333.7 227.2 344.8C240.9 396 293.6 426.4 344.8 412.7C396 399 426.4 346.3 412.7 295.1C400.5 249.4 357.2 220.3 311.6 224.3C316.9 233.6 320 244.4 320 256z"/></svg>
                                            <span>
                                                <p className="pvc_stats font-semibold total_only text-xs text-[#0008] md:text-white">
                                                    &nbsp;4185&nbsp;
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <Callchatsec className="callcaht-wrap" />
                </div>

                <div className="category-sec basis-1/4 flex items-start justify-center">
                    <div className="da-store-card-nw flex-col gap-5 flex items-">

                        {/* <div className="blog-cat-nw">
                            <h6 className=" text-xl font-semibold text-center  text-[#000]">
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
                                            <p className="b-fest-d text-xs md:text-sm">
                                                Dhwani Store: Premium Religious Gifts, Gemstones, &
                                                Decor
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div> */}

                        <div className="blog-cat-nw hidden md:block">
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
        </section>
    );
}
