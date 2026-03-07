"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";



const PROMISES = [
  {
    title: "Spiritually Aligned Solutions Guided by Traditional Astrology",
    icon: "/ds-img/cred1.webp",
  },
  {
    title: "Hassle-Free Delivery Across India at No Additional Cost",
    icon: "/ds-img/cred3.webp",
  },
  {
    title: "Data-Backed Astrological Insights for Accurate Guidance",
    icon: "/ds-img/cred4.webp",
  },
  {
    title: "Guidance Provided by Licensed & Verified Astrologers",
    icon: "/ds-img/cred5.webp",
  },
];



function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}



function parseStatValue(value) {
  if (value.includes("Lakh")) return parseInt(value) * 100000;
  if (value.includes("K")) return parseInt(value) * 1000;
  return parseInt(value.replace("+", ""));
}

function formatStatValue(number, originalValue) {
  if (originalValue.includes("Lakh")) {
    return `${Math.floor(number / 100000)} Lakh`;
  }
  if (originalValue.includes("K")) {
    return `${Math.floor(number / 1000)}K`;
  }
  if (originalValue.includes("+")) {
    return `${number}+`;
  }
  return number;
}

function useCountUp(target, start, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    function animate(time) {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, start, duration]);

  return count;
}



export default function PromisesCredentials() {
  return (
    <section className="relative py-8 bg-linear-to-b from-[#f6f0ff] to-[#ede4ff]">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-xl md:text-2xl font-semibold text-[#2a0e44] mb-8">
          • Dhwani Astro Promises & Credentials At a Glance •
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
          {PROMISES.map((item, index) => (
            <Card key={index} title={item.title} icon={item.icon} />
          ))}
        </div>

        <div className="flex items-center justify-center mb-5">
          <span className="w-24 h-px bg-[#f9ca5c]" />
          <span className="mx-3 text-[#f9ca5c] text-xl">✦</span>
          <span className="w-24 h-px bg-[#f9ca5c]" />
        </div>

        <div
          className="mt-5 rounded-2xl px-6 py-8 shadow-lg bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: "url('/ds-img/credbck.jpg')" }}
        >
          <div className="absolute inset-0 bg-white/0 backdrop-blur-xs" />

          <div className="relative rounded-2xl px-10 py-8 flex flex-col items-center justify-center bg-white/80">

            <div className="flex items-center gap-3 mb-6">
              <Image src="/ds-img/cred5.webp" alt="" width={50} height={50} />
              <div className="text-purple-950 text-2xl font-serif font-semibold text-center">
                Lab Certified and Abhimantarit Products by Expert Astrologers
              </div>
              <Image src="/ds-img/cred2.webp" alt="" width={50} height={50} />
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <Stat img="/ds-img/cred6.webp" value="800+" label="Astrologers" />
              <Stat img="/ds-img/cred8.webp" value="200K" label="Kundalis Served" />
              <Stat img="/ds-img/cred7.webp" value="50 Lakh" label="Customer Base" />
              <Stat img="/ds-img/cred8.webp" value="100K" label="Consultations" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}



function Card({ icon, title }) {
  return (
    <div
      className="group relative flex flex-col gap-1 justify-center rounded-2xl px-4 py-4 text-center shadow-xl border border-[#d6b76c]/30 hover:-translate-y-1 transition overflow-hidden"
      style={{
        backgroundImage: "url('/ds-img/credbck.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#2b123f]/35 backdrop-blur-xs" />

      <div className="relative flex flex-col gap-2">
        <div className="flex justify-center">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>
        <p className="text-[#f3e6b8] font-medium text-[15px]">
          {title}
        </p>
      </div>
    </div>
  );
}

function Stat({ img, value, label }) {
  const [ref, isVisible] = useInView({ threshold: 0.3 });
  const target = parseStatValue(value);
  const count = useCountUp(target, isVisible, 1800);

  return (
    <div
      ref={ref}
      className="flex border-r border-purple-900 pr-3 items-center gap-2"
    >
      <Image src={img} alt={label} width={50} height={50} />
      <div>
        <p className="text-3xl font-bold font-serif text-purple-950">
          {formatStatValue(count, value)}
        </p>
        <p className="text-xl font-semibold font-serif text-purple-950 mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}
