"use client";

import { useLanguage } from "@/app/context/LangContext";
import useScrollZoom from "@/Hooks/scrollZoom";
import BestsellServer from "./Bestsell.server";

export default function Bestsell() {
  const { messages: t } = useLanguage();

  useScrollZoom(".head-wrap");

  const bestsell = [
    {
      id: 0,
      name: t?.comfree?.pend || "Pendant",
      src: "/ds-img/machpennd.jpg",
      link: "https://shop.dhwaniastro.com/collections/pendants",
    },
    {
      id: 1,
      name: t?.comfree?.kada || "Kada",
      src: "/ds-img/kada.jpg",
      link: "https://shop.dhwaniastro.com/collections/kada",
    },
    {
      id: 2,
      name: t?.comfree?.brace || "Bracelet",
      src: "/ds-img/Business.png",
      link: "https://shop.dhwaniastro.com/collections/bracelets",
    },
    {
      id: 3,
      name: t?.comfree?.mala || "Divine Mala",
      src: "/ds-img/dmala.jpg",
      link: "https://shop.dhwaniastro.com/collections/mala",
    },
  ];

  const title = t?.comfree?.shop || "Shop Best Sellers At Shopify";

  return <BestsellServer title={title} items={bestsell} />;
}
