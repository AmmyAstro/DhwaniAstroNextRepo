// 'use client';
// import useScrollZoom from "@/Hooks/scrollZoom";
// import Image from "next/image";
// // import Link from "next/link";



// export default function Ytvideo() {
// useScrollZoom(".head-wrap");
//     return (
//         <section>
//             <div className="head-wrap ytvideo flex flex-col gap-2 p-2 shadow-lg rounded-lg">
//                 <div className="founder-video-frame w-full rounded-lg"><iframe width={300} height={280} className="w-full rounded-lg"
//                     src="https://www.youtube.com/embed/Z1xtQkosANM?si=NFC7Ayx8lCwE0eBy" title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//                 </div>
//                 <div className="flex items-start gap-1"> <Image src={"/ds-img/youtube.png"} unoptimized width={30} height={30} alt="yt image" /> <span className="text-[#000] text-xs">Watch this video to know about the benefits of Tulsi  and the rituals you must know to get the best results.</span></div>

//             </div>
//         </section>
//     );
// }

// 'use client';

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import {
//     useGetKalDoshaMutation,
//     useGetManglikDoshaMutation,
//     useGetPitraDoshaMutation,
//     useGetSadeSatiDoshaMutation,
// } from "@/app/redux/services/astrologyAPI";

// import { useAPIFetchMHook } from "@/Hooks/useAPIFetchMHook";

// const DOSHAS = [
//     { id: "manglik", name: "Manglik Dosha", img: "/ds-img/mars.gif" },
//     { id: "kal", name: "Kaal Sarp Dosha", img: "/ds-img/k7.png" },
//     { id: "pitra", name: "Pitra Dosha", img: "/ds-img/horoscope.gif" },
//     { id: "sade", name: "Sade Sati", img: "/ds-img/uranus.gif" },
// ];

// export default function PresentDoshaOffers() {
//     const daUserForm = useSelector((state) => state.daUserForm);
// const router = useRouter();
//     const [getManglik] = useGetManglikDoshaMutation();
//     const [getKal] = useGetKalDoshaMutation();
//     const [getPitra] = useGetPitraDoshaMutation();
//     const [getSade] = useGetSadeSatiDoshaMutation();

//     const { mainData, extraData, loading } = useAPIFetchMHook(
//         getManglik,
//         daUserForm,
//         null,
//         true,
//         "",
//         [getKal, getPitra, getSade]
//     );

//     const dataMap = {
//         manglik: mainData,
//         kal: extraData[0],
//         pitra: extraData[1],
//         sade: extraData[2],
//     };

//     const presentDoshas = DOSHAS.filter(({ id }) => {
//         const d = dataMap[id];
//         if (!d) return false;

//         const isPresent =
//             d.is_present ??
//             d.present ??
//             d.is_pitri_dosha_present ??
//             d.is_saturn_retrograde ??
//             d.sadhesati_status ??
//             false;

//         return isPresent === true;
//     });

//     const [timeLeft, setTimeLeft] = useState(60);
//     const [expired, setExpired] = useState(false);

//     useEffect(() => {
//         if (timeLeft <= 0) {
//             setExpired(true);
//             return;
//         }
//         const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
//         return () => clearInterval(timer);
//     }, [timeLeft]);

//     const handleFreeChat = () => {
//         if (expired) return alert("Time up!");
//         router.push("/chat-with-astrologer")
//     };

//     if (loading) {
//         return <p className="text-center text-purple-600">Loading dosha offers...</p>;
//     }

//     if (presentDoshas.length === 0) {
//         return (
//             <div className="p-4 bg-white border border-red-400 rounded-2xl shadow-lg max-w-xl mx-auto">

//                 <p className="text-center text-red-600 font-bold text-xl mb-3 animate-pulse">
//                     Shani Mahadasha — Difficult Time
//                 </p>

//                 <p className="text-center text-gray-700 font-semibold mb-4">
//                     Hurry up to grab this offer of Free Chat — {timeLeft}s left
//                 </p>

//                 <div className="flex justify-center mb-4">
//                     <Image src="/ds-img/uranus.gif" alt="Shani" width={60} height={60} />
//                 </div>

//                 <button
//                     onClick={handleFreeChat}
//                     disabled={expired}
//                     className={`w-full py-2 rounded-full font-semibold transition-all
//                         ${expired
//                             ? "bg-gray-400 text-white cursor-not-allowed"
//                             : "bg-red-600 text-white hover:bg-red-700"
//                         }`}
//                 >
//                     {expired ? "Offer Expired" : "Free Chat"}
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="p-4 bg-white border border-red-200 rounded-2xl shadow-lg max-w-xl mx-auto">
//             <h4 className="text-red-600 font-bold text-lg text-center">Dosha detcted in your Kundli</h4>

//             <p className="text-center text-black font-semibold text-base mb-4">
//                 Hurry up!! FREE Chat with astrologer.
//             </p>
//             <div className=" flex justify-center mb-3">
//                 <span className="bg-gray-800 text-yellow-400 font-bold px-4 py-3 rounded-full self-center align-center ">Offer Ends in : {timeLeft}s</span>
//             </div>

//             <div className=" grid grid-cols-2 justify-center gap-8 mb-4">
//                 {presentDoshas.map((d) => (
//                     <div
//                         key={d.id}
//                         className="animate-alert bg-red-100 border border-red-100 rounded-2xl px-4 py-3 flex flex-col items-center  shadow-md"
//                     >
//                         <Image src={d.img} alt={d.name} width={40} height={40} className="rounded-full"/>

//                         <p className="text-black font-semibold text-xs mt-2">{d.name}</p>
//                         <span className="text-xs font-bold text-red-500">PRESENT</span>
//                     </div>
//                 ))}
//             </div>

//             <button
//                 onClick={handleFreeChat}
//                 disabled={expired}
//                 className={`w-full py-2 rounded-full font-semibold transition-all
//                     ${expired
//                         ? "bg-gray-400 text-white cursor-not-allowed"
//                         : "bg-red-600 text-white hover:bg-red-700"
//                     }`}
//             >
//                 {expired ? "Offer Expired" : "Free Chat"}
//             </button>
//         </div>
//     );
// }


