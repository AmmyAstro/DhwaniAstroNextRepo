"use client";

import { useState, useMemo, useEffect } from "react";
import { useLanguage } from "../context/LangContext";
import FilterBar from "@/components/Smcompo/Filter";
import AstroCCard from "@/components/navbarcomp/AstroCCard";

export default function ChatAstrologer({ serverdata, fetchMore }) {
  const { messages: t } = useLanguage();

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("ratingHigh");
  const [page, setPage] = useState(1);

  const allAstrologers = useMemo(() => serverdata?.data || [], [serverdata?.data]);
  const totalPages = serverdata?.totalPages || 1;

  // 🔍 SEARCH + SORT
  const filteredAstrologers = useMemo(() => {
    let filtered = allAstrologers.filter((astro) =>
      astro.name?.toLowerCase().includes(search.toLowerCase())
    );

    const sortMap = {
      expHigh: (a, b) => b.experience - a.experience,
      expLow: (a, b) => a.experience - b.experience,
      priceHigh: (a, b) => b.price - a.price,
      priceLow: (a, b) => a.price - b.price,
      ratingHigh: (a, b) => b.rating - a.rating,
      ratingLow: (a, b) => a.rating - b.rating,
    };

    if (sortMap[sortType]) {
      filtered = [...filtered].sort(sortMap[sortType]);
    }

    return filtered;
  }, [allAstrologers, search, sortType]);

  // 📜 INFINITE SCROLL
  useEffect(() => {
    const handleScroll = async () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (nearBottom && page < totalPages) {
        const nextPage = page + 1;

        await fetchMore({
          variables: {
            searchInput: {
              limit: 8,
              page: nextPage,
              sortField: "RATING",
              sortOrder: "DESC",
            },
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;

            return {
              getAstrologerListBySearch: {
                ...fetchMoreResult.getAstrologerListBySearch,
                data: [
                  ...prev.getAstrologerListBySearch.data,
                  ...fetchMoreResult.getAstrologerListBySearch.data,
                ],
              },
            };
          },
        });

        setPage(nextPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, totalPages, fetchMore]);

  return (
    <section className="relative flex flex-col items-center w-full sm:p-5">
      <FilterBar
        title={t?.astrocard?.headchat || "Chat With Astrologer"}
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        onSortChnage={(id) => setSortType(id)}
        mode="chat"
      />

      <AstroCCard
        mode="chat"
        data={filteredAstrologers}
        loading={false}
      />
    </section>
  );
}