"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  fetchNumeroPred,
  fetchNumeroDet,
  fetchNumeroRepo,
  fetchNumeroFav,
  fetchNumeroPlace,
  fetchNumeroFast,
  fetchNumeroLord,
  fetchNumeroMantra,
} from "../../../api/astroapi.server";

import NumerokundliUI from "./NumerokundliUI";

export default function NumerokundliClientWrapper({ hash }) {
  const formData = useSelector((state) => state.daUserForm);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!hash || !formData?.day) return;

    Promise.all([
      fetchNumeroPred(formData),
      fetchNumeroDet(formData),
      fetchNumeroRepo(formData),
      fetchNumeroFav(formData),
      fetchNumeroPlace(formData),
      fetchNumeroFast(formData),
      fetchNumeroLord(formData),
      fetchNumeroMantra(formData),
    ]).then(
      ([
        pred,
        det,
        repo,
        fav,
        place,
        fast,
        lord,
        mantra,
      ]) => {
        setData({
          main: pred,
          det,
          repo,
          fav,
          place,
          fast,
          lord,
          mantra,
        });
      }
    );
  }, [hash, formData]);

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }

  if (!formData?.day) {
    return <p className="text-center text-gray-400">Kundli session expired</p>;
  }

  if (!data) {
    return (
      <div className="flex justify-center flex-col gap-4 items-center h-32">
        <span className="loader-all"></span>
        <span className="ml-3 text-purple-600 font-medium">
          Loading Numerology...
        </span>
      </div>
    );
  }

  return <NumerokundliUI data={data} />;
}
