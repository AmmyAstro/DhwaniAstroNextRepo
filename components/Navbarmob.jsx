"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LangContext";
import useScrollZoom from "@/Hooks/scrollZoom";
export default function Navbarmob() {
  useScrollZoom(".head-wrap")
  const { messages: t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isDhwaniOpen, setIsDhwaniOpen] = useState(false);
  const [isFreeOpen, setIsFreeOpen] = useState(false);

  const navbaritems = [
    { id: 1, src: "/ds-img/chatx.png", alt: "Chat", ulname: `${t.navbar.n1}`, href: "/chat-with-astrologer" },
    { id: 2, src: "/ds-img/telephonex.png", alt: "Talk", ulname: `${t.navbar.n2}`, href: "/talk-to-astrologer" },
    { id: 3, src: "/ds-img/instagram-live.png", alt: "live", ulname: `${t.navbar.n3}`, href: "" },
    { id: 4, src: "/ds-img/muladharax.png", alt: "Protect", ulname: `${t.navbar.n4}`, href: "https://shop.dhwaniastro.com/collections/kavach" },
    { id: 5, src: "/prblm/healingnw.png", alt: "Heal", ulname: `${t.navbar.n5}`, href: "/inHealing" },
    // { id: 6, src: "/prblm/puja.png", alt: "Puja", ulname: "Online Puja", href: "/online-puja" },
    { id: 7, src: "/prblm/social-work.png", alt: "Dhwani", ulname: `${t.navbar.n6}`, href: "/dhServices" },
  ];

  const dhwaniStoreItems = [
    { id: 1, name: `${t.navbar.n7}`, src: "/ds-img/bracelet.png", href: "https://shop.dhwaniastro.com/collections/bracelets" },
    { id: 2, name: `${t.navbar.n8}`, src: "/ds-img/pendant.png", href: "https://shop.dhwaniastro.com/collections/pendants" },
    { id: 3, name: `${t.navbar.n9}`, src: "/ds-img/marriage.png", href: "https://shop.dhwaniastro.com/collections/crystal-rings" },
    { id: 4, name: `${t.navbar.n10}`, src: "/ds-img/compass.png", href: "https://shop.dhwaniastro.com/collections/vastu-1" },
    { id: 5, name: `${t.navbar.n11}`, src: "/ds-img/mala.png", href: "https://shop.dhwaniastro.com/collections/mala" },
  ];

  const freeServicesItems = [
    { id: 1, name: `${t.navbar.n12}`, src: "/ds-img/horoscope.webp", href: "/horoscope", slug: "" },
    { id: 2, name: `${t.navbar.n16}`, src: "/ds-img/panchang.webp", href: "/panchang", slug: "" },
    { id: 3, name: `${t.navbar.n14}`, src: "/ds-img/kundli.webp", href: "/inKundli", slug: "" },
    { id: 4, name: `${t.navbar.n15}`, src: "/ds-img/menu-match.webp", href: "/inKundli/getKundlipage/matchkundli", slug: "" },
    { id: 5, name: `${t.navbar.n13}`, src: "/ds-img/numerology.webp", href: "/formpage", slug: "numerokundli" },
    { id: 6, name: `${t.navbar.n17}`, src: "/ds-img/panchang.webp", href: "/chaughadiya", slug: "" },

  ];
  const serdrop = [
    { id: 1, name: `${t.navbar.n12}`, src: "/ds-img/horoscope.webp", href: "/horoscope", slug: "" },
    { id: 2, name: `${t.navbar.n16}`, src: "/ds-img/panchang.webp", href: "/panchang", slug: "" },
    { id: 3, name: `${t.navbar.n14}`, src: "/ds-img/kundli.webp", href: "/inKundli", slug: "" },
    { id: 4, name: `${t.navbar.n15}`, src: "/ds-img/menu-match.webp", href: "/inKundli/getKundlipage/matchkundli", slug: "" },
    { id: 5, name: `${t.navbar.n13}`, src: "/ds-img/numerology.webp", href: "/formpage", slug: "numerokundli" },
    { id: 6, name: `${t.navbar.n17}`, src: "/ds-img/panchang.webp", href: "/chaughadiya", slug: "" },

  ];



  return (
    <>
      <button aria-label="Open Menu" className="sm:hidden fixed top-3 left-3 z-50 text-white" onClick={() => setIsOpen(true)}>
    <svg width={18} height={18} viewBox="0 0 640 640"><path d="M64 160C64 142.3 78.3 128 96 128L480 128C497.7 128 512 142.3 512 160C512 177.7 497.7 192 480 192L96 192C78.3 192 64 177.7 64 160zM128 320C128 302.3 142.3 288 160 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L160 352C142.3 352 128 337.7 128 320zM512 480C512 497.7 497.7 512 480 512L96 512C78.3 512 64 497.7 64 480C64 462.3 78.3 448 96 448L480 448C497.7 448 512 462.3 512 480z"/></svg>
      </button>

      <div className={`sm:hidden fixed inset-0 z-51 bg-[#00000076] bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`fixed flex flex-col gap-5 top-0 left-0 p-6 h-full w-[60%] sm:w-[50%] md:w-[40%]  bg-[#f5f5a8] shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}>

          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Image src={"/ds-img/user2.png"} width={40} height={40} priority alt="user image" />
              <span className="text-sm font-bold text-black">Hello User</span>
            </div>
            <button aria-label="Close Menu" className=" text-[#8334e4]" onClick={() => setIsOpen(false)}>
      
              <svg width="800px" height="800px" viewBox="0 0 15 15" version="1.1" id="cross" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#xA;&#x9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#xA;&#x9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#xA;&#x9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#xA;&#x9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col items-start  space-y-5">
            {navbaritems.map((navit) => (
              <li key={navit.id} className="w-full">
                <Link href={navit.href} className="flex items-center space-x-3 text-lg text-[#2f1254] hover:text-[#8334e4]" onClick={() => setIsOpen(false)}>
                  <Image priority src={navit.src} width={20} height={20} alt={navit.alt} className="sm:w-15 sm:h-15" />
                  <h2 className="text-sm">{navit.ulname}</h2>
                </Link>
              </li>
            ))}

            <li className="w-full">
              <button aria-label="Toggle Dhwani Store Menu"
                className="flex items-center justify-between w-full text-sm text-[#2f1254] hover:text-[#8334e4]"
                onClick={() => setIsDhwaniOpen(!isDhwaniOpen)}
              >
                <div className="flex items-center space-x-3">
                  <Image src="/prblm/store.png" width={20} height={20} priority alt="Dhwani Store" />
                  <h2 className="text-sm">Dhwani Store</h2>
                </div>
                <svg className={`transition-transform ${isDhwaniOpen ? "rotate-180" : ""}`} fill="#000000" width="800px" height="800px" viewBox="0 -6 524 524" xmlns="http://www.w3.org/2000/svg" ><title>down</title><path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" /></svg>
             
              </button>
              {isDhwaniOpen && (
                <ul className="pl-8 mt-2 space-y-2">
                  {dhwaniStoreItems.map((item) => (
                    <li key={item.id}>
                      <Link href={item.href} className="flex items-center space-x-3 text-[#2f1254] hover:text-[#8334e4]">
                        <Image src={item.src} width={20} height={20} priority alt={item.name} />
                        <h3 className="text-sm">{item.name}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="w-full">
              <button aria-label="Toggle Free Services Menu"
                className="flex items-center justify-between w-full text-sm text-[#2f1254] hover:text-[#8334e4]"
                onClick={() => setIsFreeOpen(!isFreeOpen)}
              >
                <div className="flex items-center space-x-3">
                  <Image src="/prblm/prize.png" width={20} height={20} priority alt="Free Services" />
                  <h2 className="text-sm">Free Services</h2>
                </div>
                <svg className={`transition-transform ${isDhwaniOpen ? "rotate-180" : ""}`} fill="#000000" width="800px" height="800px" viewBox="0 -6 524 524" xmlns="http://www.w3.org/2000/svg" ><title>down</title><path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" /></svg>

              </button>
              {isFreeOpen && (
                <ul className="pl-8 mt-2 space-y-2">
                  {freeServicesItems.map((item) => (
                    <li key={item.id}>
                      <Link href={{
                        pathname: item.href,
                        query: { slug: item.slug },
                      }} className="flex items-center space-x-3 text-[#2f1254] hover:text-[#8334e4]">
                        <Image src={item.src} width={20} height={20} priority alt={item.name} />
                        <h3 className="text-sm">{item.name}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* navbar color  */}
      {/* bg-[#f5f5a8] */}

      <nav className="hidden sm:block   bg-linear-to-r from-yellow-100 to-yellow-200 w-full transition-transform duration-300 ease-in-out">
        <ul className="flex items-center justify-evenly">
          {navbaritems.map((navit) => (
            <li key={navit.id} className="desk-nav-li hover:scale-108">
              <Link href={navit.href} className="flex flex-col head-wrap items-center gap-1">
                <Image className="img-head-nav sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9" src={navit.src} width={35} height={35}  alt={navit.alt} />
                <h3 className="head-spn text-black text-xs sm:text-[10px] lg:text-[12px]">{navit.ulname}</h3>
              </Link>
            </li>
          ))}
          <li className="drop-free-new desk-nav-li">
            <Link href="#" className="flex flex-col items-center gap-1 head-wrap ">
              <Image
                className="img-head-nav sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9"
                src="/prblm/store.png"
                width={35}
                height={35}                
                alt="navbar-image" priority
              />
              <h3 className="head-spn text-black text-xs sm:text-[10px] lg:text-[12px]">{t.navbar.n18}</h3>
            </Link>
            <ul className="free-service-drop-n">
              <li>
                <Link href="https://shop.dhwaniastro.com/collections/bracelets" target="_" className="free-drp-a flex items-center ">
                  <Image
                    className="free-drp-img"
                    src="/ds-img/bracelet.png"
                    width={35}
                    height={35}
                    alt="free image" priority
                  />
                  <h3 className="free-ser-spn text-black text-xs"> {t.navbar.n7}</h3>
                </Link>
              </li>
              <li>
                <Link href="https://shop.dhwaniastro.com/collections/pendants" target="_" className="free-drp-a flex items-center ">
                  <Image
                    className="free-drp-img"
                    src="/ds-img/pendant.png"
                    width={35}
                    height="35"
                    alt="free image" priority
                  />
                  <h3 className="free-ser-spn text-black text-xs"> {t.navbar.n8}</h3>
                </Link>
              </li>
              <li>
                <Link href="https://shop.dhwaniastro.com/collections/crystal-rings" className="free-drp-a flex items-center ">
                  <Image
                    className="free-drp-img"
                    src="/ds-img/marriage.png"
                    width={35}
                    height={35}
                    alt="free image" priority
                  />
                  <h3 className="free-ser-spn text-black text-xs">{t.navbar.n9}</h3>
                </Link>
              </li>
              <li>
                <Link href="https://shop.dhwaniastro.com/collections/vastu-1" target="_" className="free-drp-a flex items-center">
                  <Image
                    className="free-drp-img"
                    src="/ds-img/compass.png"
                    width={35}
                    height={35}
                    alt="free image" priority
                  />
                  <h3 className="free-ser-spn text-black text-xs">{t.navbar.n10}</h3>
                </Link>
              </li>
              <li>
                <Link href="https://shop.dhwaniastro.com/collections/mala" target="_" className="free-drp-a flex items-center">
                  <Image
                    className="free-drp-img"
                    src="/ds-img/mala.png"
                    width={35}
                    height={35}
                    alt="free image" priority
                  />
                  <h3 className="free-ser-spn text-black text-xs">{t.navbar.n11}</h3>
                </Link>
              </li>
              <li>
                <Link
                  href="https://shop.dhwaniastro.com/" target="_"
                  className="free-drp-a a-wh flex items-center px-4 text-black text-[14px] justify-center">
                  <svg fill="#000000" width="15px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color"><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" ></path></svg>
                  <h3 className="text-black text-xs">{t.navbar.n20}</h3>
                </Link>
              </li>
            </ul>
          </li>



          <li className="drop-free-new desk-nav-li">
            <Link href="#" className="flex flex-col items-center gap-1 head-wrap">
              <Image
                className="img-head-nav  sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9"
                src="/prblm/prize.png"
                width={35}
                height={35}             
                alt="navbar-image" priority
              />
              <h3 className="head-spn text-black text-xs sm:text-[10px] lg:text-[12px]">{t.navbar.n19}</h3>
            </Link>
            <ul className="free-service-drop-n ">
              {serdrop?.map((sdrp) => (
                <li key={sdrp.id} >
                  <Link href={
                    sdrp.slug
                      ? { pathname: sdrp.href, query: { slug: sdrp.slug } }
                      : { pathname: sdrp.href }
                  }
                    className="free-drp-a flex items-center ">
                    <Image
                      className="free-drp-img"
                      src={sdrp?.src}
                      width={35}
                      height={35} priority
                      alt="free image"
                    />
                    <h3 className="free-ser-spn text-black text-xs">{sdrp.name}</h3>
                  </Link>
                </li>
              ))
              }

            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
