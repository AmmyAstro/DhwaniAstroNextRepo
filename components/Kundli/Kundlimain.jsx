"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { setdaUserForm } from "@/app/redux/services/daUserFormSlice";
import { useGetBirthDetailsMutation } from "@/app/redux/services/astrologyAPI";

import Kundlioth from "../Smcompo/Kundlioth";
import Bestsell from "../Smcompo/Bestsell/Bestsell";
import Sidebanner from "../Smcompo/Sidebanner";
import Freereport from "../Smcompo/Freereport";
import Recastro from "../Smcompo/Recastro";
import FAQue from "../FAQue";
import Callchatsec from "../Smcompo/Callchatsec";

import CustomInput from "../Custom/CustomInput";
import CustomButton from "../Custom/CustomButton";
import { AlertLoading, LocationSelector } from "@/app/common";
import { useLanguage } from "@/app/context/LangContext";

import { createKundliFromMain } from "../../app/actions/createKundliFromMain";

const Kundlimain = () => {
  const { messages: t } = useLanguage();
  const dispatch = useDispatch();
  const [getBirthDetails] = useGetBirthDetailsMutation();

  const [alert, setAlert] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    birthTime: "",
    birthplace: "",
    lat: "",
    lon: "",
    tzone: 5.5,
  });



  const validateForm = () => {
    const err = {};
    if (!formData.name) err.name = "Name is required";
    if (!formData.dob) err.dob = "Date of Birth is required";
    if (!formData.birthTime) err.birthTime = "Birth Time is required";
    if (!formData.birthplace) err.birthplace = "Birth Place is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationSelect = (location) => {
    setFormData((prev) => ({
      ...prev,
      birthplace: `${location.city}, ${location.state}, ${location.country}`,
      lat: Number(location.latitude),
      lon: Number(location.longitude),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(true);

    if (!validateForm()) {
      setAlert(false);
      return;
    }

    try {
      const [year, month, day] = formData.dob.split("-").map(Number);
      const [hour, min] = formData.birthTime.split(":").map(Number);

      const payload = {
        name: formData.name,
        day,
        month,
        year,
        hour,
        min,
        lat: formData.lat,
        lon: formData.lon,
        tzone: formData.tzone,
        birthplace: formData.birthplace,
      };


      dispatch(setdaUserForm(payload));


      await getBirthDetails(payload).unwrap();


      const fd = new FormData();
      Object.entries(payload).forEach(([key, value]) =>
        fd.append(key, value)
      );

      await createKundliFromMain(fd);
    } catch (err) {
      console.error("Kundli submit failed:", err);
    } finally {
      setAlert(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };



  return (
    <section className="kundli-main-page py-5">
      <div className="kundli-img-txt flex justify-center bg-linear-to-r from-pink-100 to-yellow-100 shadow-xl rounded-2xl p-5">
        <div className="text-black text-center">
          <h4 className="text-xl md:text-2xl uppercase font-bold">
            {t?.kform?.top || "Discover Your Future with a Free Online Kundli"}
          </h4>
          <p>
            Kundli is an astrological chart showing planetary positions at birth.
          </p>
        </div>
      </div>

      <div className="kundli-page mt-5 md:max-w-7xl grid grid-cols-7 gap-5 p-2">
        <div className="col-span-5 flex flex-col gap-5">
          <div className="grid grid-cols-6 gap-5 text-black">

            <div className="col-span-2 bg-linear-to-r from-pink-100 to-yellow-100 shadow-lg rounded-2xl p-5 text-center">
              <Image
                src="/ds-img/ganeshji.png"
                width={100}
                height={100}
                alt="Ganesh Ji"
                className="mx-auto hidden md:block"
              />
              <h4 className="text-xl font-semibold mt-2">
                KUNDLI FREE ONLINE
              </h4>
              <p className="text-sm">
                Accurate horoscope and birth chart analysis.
              </p>
            </div>


            <div className="col-span-4 bg-purple-200 shadow-lg rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-center text-purple-700 mb-5">
                {t?.kform?.head || "Enter Your Birth Details"}
              </h2>

              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto flex flex-col gap-4"
              >
                <CustomInput
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autofill="name"
                />

                <CustomInput
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  autofill="dob"
                />

                <CustomInput
                  label="Birth Time"
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                  required
                  autofill="birthTime"
                />

                <LocationSelector
                  placeholder="Your birth place"
                  onSelect={handleLocationSelect}
                />

                {errors.birthplace && (
                  <p className="text-red-500 text-sm">
                    {errors.birthplace}
                  </p>
                )}

                <CustomButton
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 w-40 text-white px-4 py-2 self-center rounded-full shadow-lg"
                >
                  {t?.kform?.submit || "Submit"}
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
      </div>

      <AlertLoading show={alert} title="Generating Kundli..." />

      <Freereport />
      <Recastro />
      <FAQue />
      <Callchatsec />
    </section>
  );
};

export default Kundlimain;
