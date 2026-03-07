"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";


import { useDispatch, useSelector } from "react-redux";

import AstroCCard from "@/components/navbarcomp/AstroCCard";
import { fetchAstrologers, fetchAstrologersSuccess } from "../redux/reducer/astrologer/astrlogerSlice";
import { useLanguage } from "../context/LangContext";
import FilterBar from "@/components/Smcompo/Filter";






export default function CallAstrologer({ serverdata }) {
    const { messages: t } = useLanguage();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [sortType, setSortType] = useState("expHigh");
    const [page, setPage] = useState(1);
    const limit = 8;
    const debounceTimeout = useRef(null);

    const { data = {}, loading } = useSelector((state) => state.astrologerReducer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const allAstrologers = Array.isArray(data.sortedAstrologers) ? data.sortedAstrologers : [];




    const filteredAstrologers = useMemo(() => {
        if (!allAstrologers) return [];
        let filtered = allAstrologers.filter((astro) =>
            astro.full_name?.toLowerCase().includes(search.toLowerCase())
        );
        const availabilityOrder = { 1: 1, 2: 2, 0: 3 };
        filtered = filtered.sort(
            (a, b) => (availabilityOrder[a.availability] || 4) - (availabilityOrder[b.availability] || 4)
        );


        const sortMap = {
            expHigh: (a, b) => b.experience - a.experience,
            expLow: (a, b) => a.experience - b.experience,
            priceHigh: (a, b) => b.price_per_min - a.price_per_min,
            priceLow: (a, b) => a.price_per_min - b.price_per_min,
            ratingHigh: (a, b) => b.rating - a.rating,
            ratingLow: (a, b) => a.rating - b.rating,
        };

        if (sortMap[sortType]) {
            filtered = [...filtered].sort((a, b) => {

                const availDiff =
                    (availabilityOrder[a.availability] || 4) -
                    (availabilityOrder[b.availability] || 4);
                if (availDiff !== 0) return availDiff;

                return sortMap[sortType](a, b);
            });
        }

        return filtered;
    }, [allAstrologers, search, sortType]);

    const loadAstrologers = useCallback(() => {
        if (
            page === 1 &&
            serverdata?.data?.length > 0 &&
            allAstrologers.length === 0
        ) {
            dispatch(
                fetchAstrologersSuccess({
                    sortedAstrologers: serverdata?.data || [],
                    total: serverdata?.total,
                    page: 1,
                })
            );

            return;
        }
    }, [dispatch, page, serverdata, allAstrologers.length]);

    useEffect(() => {
        if (page > 1) {
            dispatch(fetchAstrologers({ page, limit }));
        }
    }, [page, limit, dispatch])

    useEffect(() => {
        loadAstrologers();
    }, [loadAstrologers]);

    // reset page when search changes
    useEffect(() => {
        setPage(1);
    }, [search]);

    // -----------------------------
    //  INFINITE SCROLL
    // -----------------------------
    useEffect(() => {
        const handleScroll = () => {
            if (debounceTimeout.current) return;

            debounceTimeout.current = setTimeout(() => {
                debounceTimeout.current = null;

                const nearBottom =
                    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

                const hasMore = allAstrologers.length < (data.total || 0);

                if (nearBottom && !loading && hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            }, 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [allAstrologers.length, data.total, loading]);


    //  HANDLE SORT CHANGE

    const handleSortChange = (id) => {
        setSortType(id);
    };

    return (
        <section className="relative flex flex-col items-center self-center w-full p-2 sm:p-5">
            <FilterBar
                title={t?.astrocard?.headcall || "Talk To Astrologer"}
                balance={100}
                onRecharge={() => { }}
                onFilter={() => { }}
                onSort={() => { }}
                searchValue={search}
                onSearchChange={(e) => setSearch(e.target.value)}
                mode="call"
                onSortChnage={handleSortChange}
            />

            <AstroCCard mode="call" data={filteredAstrologers} loading={loading} />
        </section>
    );
}
