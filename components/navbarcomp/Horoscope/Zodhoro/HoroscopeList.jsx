'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useZodiac } from "@/app/context/ZodiacContext";
import { SkeletonText } from "./SkeletonText";

const defaultCategories = [
  { id: 0, name: "Personal Life", icon: "/ds-img/user2.png", key: "personal_life" },
  { id: 1, name: "Professional Life", icon: "/ds-img/handshake.png", key: "profession" },
  { id: 2, name: "Health", icon: "/ds-img/healthcare.png", key: "health" },
  { id: 3, name: "Travel", icon: "/ds-img/airplane.png", key: "travel" },
  { id: 4, name: "Luck", icon: "/ds-img/fingers.png", key: "luck" },
  { id: 5, name: "Emotions", icon: "/ds-img/emotional.png", key: "emotions" },
];

export default function HoroscopeList({ usePredictionHook }) {
  const { zodiac } = useZodiac();
  const [categories, setCategories] = useState(defaultCategories);

  const [getPrediction] = usePredictionHook();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!zodiac) return;

    setIsLoading(true);
    setIsError(false);

    getPrediction({
      zodiacName: zodiac,
      body: { timezone: 5.5 }
    })
      .unwrap()
      .then((res) => {
        if (!res?.status || !res?.prediction) {
          throw new Error("Invalid API response");
        }

        const updated = defaultCategories.map(cat => ({
          ...cat,
          content: res.prediction[cat.key] || "No content -- not available."
        }));

        setCategories(updated);
      })
      .catch(() => {
        setIsError(true);
        setCategories(
          defaultCategories.map(cat => ({
            ...cat,
            content: "No content -- API error."
          }))
        );
      })
      .finally(() => setIsLoading(false));

  }, [zodiac]);

  return (
    <div className="zod-life-det mt-4 space-y-4 text-black">
      {categories.map((category) => (
        <div
          key={category.id}
          className="rounded-2xl border-2 border-violet-200 p-4"
        >
          {/* Heading */}
          <div className="flex items-center gap-3 mb-2">
            <Image
              src={category.icon}
              alt={category.name}
              width={28}
              height={28}
            />
            <h3 className="text-sm md:text-base font-semibold">
              {category.name}
            </h3>
          </div>

          {/* Content */}
          {isLoading ? (
            <SkeletonText />
          ) : isError ? (
            <p className="text-xs text-red-500">
              No content -- API error or no prediction.
            </p>
          ) : (
            <p className="text-xs md:text-sm leading-relaxed">
              {category.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
