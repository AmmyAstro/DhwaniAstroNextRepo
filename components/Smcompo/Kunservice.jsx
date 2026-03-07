import useScrollZoom from "@/Hooks/scrollZoom";
import Image from "next/image";
import Link from "next/link";

const kunser = [
    {
        id: 0,
        name: "Precious Gemstones",
        src: "/ds-img/gemk.png",
        buy: "Buy Now",
        para: "We provide genuine tested gemstones. Ruby, Moonga, Panna, Pukhraj, Heera, Gomed, Moti, Neelam and many more."
    },
    {
        id: 1,
        name: "5-Mukhi Rudraksha",
        src: "/ds-img/rud.jpg",
        buy: "Buy Now",
        para: "These Rudraksh beads are known to enhance mental clarity, reduce stress and anxiety, and promote overall well-being."
    },
    {
        id: 2,
        name: "Feng-Shui Items",
        src: "/ds-img/fen.png",
        buy: "Buy Now",
        para: "Improve the energy flow and balance in your space with our range of Feng Shui Items."
    },
    {
        id: 3,
        name: "3-D Metal Yantra",
        src: "/ds-img/yan.png",
        buy: "Buy Now",
        para: "Yantras are powerful tools for manifestation, protection, prosperity, and success."
    },

];
useScrollZoom(".head-wrap");

export default function Kunservice() {
    return (
        <section>
            <div className=" p-3 flex flex-col gap-3 border-2 rounded-lg">
                <span className="text-black text-center font-semibold text-xl"> Astrology Remedies & Services</span>
                <div className="  flex items-center flex-wrap flex-col justify-between gap-3">
                    {kunser.map((kuns, index) => (
                        <div key={index} className="head-wrap flex flex-col items-center justify-items-center gap-1">
                            <h5 className="text-black text-sm bg-purple-200 flex items-center justify-around py-1 w-full rounded-lg text-center">{kuns.name} <Link href={"#"} className="  text-xs justify-end items-end self-end bg-green-600 text-white px-3 py-1 rounded-lg"> {kuns.buy}</Link></h5>
                            <div className="name-con flex items-center gap-1">
                                <Image
                                    alt="best seller image "
                                    className="kundli-imgs w-25 h-20 rounded-lg"
                                    loading="lazy"
                                    width={50}
                                    height={50}
                                    unoptimized
                                    src={kuns.src}
                                />
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-black"> {kuns.para}</p>

                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
}
