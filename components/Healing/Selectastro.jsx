'use client';
import { useRouter, useParams } from 'next/navigation';
import { Healdata } from './Healcompo/healdata';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '../Custom/CustomButton';

export default function Selectastro() {
    const router = useRouter();
    const params = useParams();
    const pageName = params?.main?.[1];

    
    const pageContent = Healdata[pageName] || null;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const payNow = () => {
           const basePath = params?.main?.[0];
       router.push(`/${basePath}/${pageName}/selectastro/paynow`) ;
    };
   


    const astrolist = [
        {
            img: "/ds-img/parth.svg",
            anm: "Astro Parth",
            skill: "Vedic, Tarot, Palmistry",
            lang: "Hindi, Kannada",
            ordr: 6600,
            expas: 5,
            serprice: 14000,
            canprice: 5000,
        },
        {
            img: "/ds-img/anvi.svg",
            anm: "Astro Anshika",
            skill: "Face Reading, Tarot, Neumrology",
            lang: "Hindi, Punjabi",
            ordr: 600,
            expas: 15,
            serprice: 1000,
            canprice: 5000,
        },
        {
            img: "/ds-img/anvi.svg",
            anm: "Astro Shefali",
            skill: "Vedic, Neumrology",
            lang: "Hindi",
            ordr: 100,
            expas: 10,
            serprice: 4000,
            canprice: 5000,
        }
    ];

    return (
        <div className="mb-4 bg-white rounded-lg max-w-7xl p-2  md:p-4 grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-2  md:gap-5 ">
            {astrolist.map((select, index) => (
                <div key={index} className=" bg-[#e0e5ec8d] rounded-lg p-2 shadow-lg">
                    <div className="bg-white flex flex-col pt-3 border border-purple-50 rounded-lg  justify-center p-3">
                        <div className="w-1/3 place-self-center">
                            <Link href="#">
                                <div className="relative w-full h-22 rounded overflow-hidden place-self-center">
                                    <Image
                                        src={select.img}
                                        alt="astrologer name"
                                        objectFit="cover"
                                        className="rounded place-self-center"
                                        loading="lazy"
                                        height={100}
                                        width={100} />
                                </div>
                            </Link>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center text-center">
                            <h6 className="text-base font-semibold text-black mb-1">{select.anm}</h6>

                            <p className="text-sm mb-1">
                                <span className="block text-white text-xs  p-1 rounded-lg truncate bg-[linear-gradient(to_right,_#a65ed6cf_54%,_#ba38cbbb_100%)]">
                                    {select.skill}
                                </span>
                                <span className="inline-block mt-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg text-xs">
                                    {select.lang}
                                </span>
                            </p>

                            <div className=" w-full flex flex-col items-center justify-center space-y-1">
                                <div className="flex items-center justify-between w-full text-sm">
                                    <div className="flex space-x-1 text-yellow-500 text-lg">
                                        {'★★★★★'.split('').map((star, idx) => (
                                            <span key={idx} className="text-yellow-500">★</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-600">{select.ordr} orders</p>
                                </div>

                                <div className="flex items-center justify-between w-full text-sm text-gray-700">
                                    <span>Exp: {select.expas} Years</span>
                                    <div className="flex items-center gap-1 ">
                                        <span> ₹ {select.serprice} </span>
                                        <span className='line-through text-red-400'> ₹ {select.canprice} </span>
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <CustomButton aria-label="Select Astrologer" onClick={payNow} variant={"green"}
                                        className=" transition">
                                        Select
                                    </CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
