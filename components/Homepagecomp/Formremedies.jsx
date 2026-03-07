"use client";

import { useState } from "react";
import Image from "next/image";

import CustomButton from "../Custom/CustomButton";
import CustomInput from "../Custom/CustomInput";
import CustomSelect from "../Custom/CustomSelect";

import Kundlioth from "../Smcompo/Kundlioth";
import Bestsell from "../Smcompo/Bestsell/Bestsell";
import Sidebanner from "../Smcompo/Sidebanner";
import Freereport from "../Smcompo/Freereport";
import Recastro from "../Smcompo/Recastro";
import FAQue from "../FAQue";
import Callchatsec from "../Smcompo/Callchatsec";

import { LocationSelector } from "@/app/common";
import { useLanguage } from "@/app/context/LangContext";
import { createKundliAction } from "@/app/actions/createKundliAction";

export default function Formremedies({ slug }) {
  const { messages: t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    min: "",
    birthplace: "",
    lat: "",
    lon: "",
    tzone: 5.5,
  });

  const currentYear = new Date().getFullYear();

  const range = (n, start = 0) =>
    Array.from({ length: n }, (_, i) => i + start);

  const options = {
    day: ["Day", ...range(31, 1)],
    month: ["Month", ...range(12, 1)],
    year: [
      "Year",
      ...Array.from(
        { length: currentYear - 1960 + 1 },
        (_, i) => currentYear - i
      ),
    ],
    hour: ["Hour", ...range(24)],
    min: ["Min", ...range(60)],
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleLocationSelect = (data) => {
    setFormData((prev) => ({
      ...prev,
      birthplace: `${data.city}, ${data.state}, ${data.country}`,
      lat: Number(data.latitude),
      lon: Number(data.longitude),
    }));
  };

  return (
    <section className="kundli-main-page py-5">
      <div className="kundli-img-txt flex justify-center bg-linear-to-r from-pink-100 to-yellow-100 shadow-xl rounded-2xl p-5">
        <div className="text-center text-black">
          <h4 className="text-xl md:text-2xl font-bold uppercase">
            {t?.kform?.top || "Discover Your Future with a Free Online Kundli"}
          </h4>
          <p>Kundli is an astrological chart that shows planetary positions.</p>
        </div>
      </div>

      <div className="kundli-page mt-5 md:max-w-7xl grid grid-cols-7 gap-5 p-2">
        <div className="col-span-5">
          <div className="grid grid-cols-6 gap-5">
           
            <div className="col-span-2 bg-linear-to-r from-pink-100 to-yellow-100 shadow-lg rounded-2xl p-5 text-center text-black">
              <Image
                src="/ds-img/ganeshji.png"
                width={100}
                height={100}
                alt="ganesh ji"
                className="mx-auto hidden md:block"
              />
              <h4 className="text-xl font-semibold mt-2">
                KUNDLI FREE ONLINE
              </h4>
              <p className="text-sm">Get accurate birth chart analysis.</p>
            </div>

        
            <div className="col-span-4 bg-[#dfc7fd6e] shadow-lg rounded-2xl p-6 text-black">
              <h2 className="text-xl font-semibold text-center text-purple-700 mb-5">
                {t?.kform?.head || "Enter Your Details"}
              </h2>

              <form action={createKundliAction} className="flex flex-col gap-3">

                <input type="hidden" name="slug" value={slug} />
                <input type="hidden" name="lat" value={formData.lat} />
                <input type="hidden" name="lon" value={formData.lon} />
                <input
                  type="hidden"
                  name="birthplace"
                  value={formData.birthplace}
                />
                <input type="hidden" name="tzone" value="5.5" />

                <CustomInput
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autofill="name"
                />

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Date of Birth</label>
                  <div className="flex items-center">
                    {["day", "month", "year"].map((field) => (
                      <CustomSelect
                        key={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        options={options[field]}
                        required
                        autofill={field}
                        className="border border-gray-200 bg-white px-5 py-1 rounded-full ring-0 focus:outline-none focus:ring-0"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Time of Birth</label>
                  <div className="flex items-center">

                    {["hour", "min"].map((field) => (
                      <CustomSelect
                        key={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        options={options[field]}
                        required
                        autofill={field}
                        className="border border-gray-200 bg-white px-5 py-1 rounded-full ring-0 focus:outline-none focus:ring-0"

                      />
                    ))}
                  </div>
                </div>

                <LocationSelector
                  placeholder="Birth place"
                  onSelect={handleLocationSelect}
                />

                <CustomButton variant={"purple"} type="submit" className="mt-4">
                  SUBMIT
                </CustomButton>
              </form>
            </div>
          </div>

          <Kundlioth />
        </div>

        <div className="col-span-2">
          <Bestsell />
          <Sidebanner />
        </div>
      </div >

      <Freereport />
      <Recastro />
      <FAQue />
      <Callchatsec />
    </section >
  );
}