"use client";
import FilterBar from "../Smcompo/Filter";
import AstroCCard from "./AstroCCard";
import { useLanguage } from "@/app/context/LangContext";
import { useAstroList } from "@/Hooks/useAstroList ";
export default function Callastro() {
  const { messages: t } = useLanguage();
  const {
    search,
    setSearch,
    handleSortChange,
    filteredAstrologers,
    loading,
  } = useAstroList();

  return (
    <section className="relative flex flex-col items-center self-center w-full p-2 sm:p-5">
      <FilterBar
        title={t?.astrocard?.headcall || "Talk To Astrologer"}
        balance={100}
        onRecharge={() => {}}
        onFilter={() => {}}
        onSort={() => {}}
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        mode="call"
        onSortChnage={handleSortChange}
      />

      <AstroCCard mode="call" data={filteredAstrologers} loading={loading} />
    </section>
  );
}
