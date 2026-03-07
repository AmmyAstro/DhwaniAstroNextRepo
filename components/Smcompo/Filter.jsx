import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { callAstroData, chatAstroData } from "../navbarcomp/ccastrodata";
export const astroData = [...chatAstroData, ...callAstroData];
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFetch } from "../../app/redux/reducer/auth/userSlice";
import CustomInput from "../Custom/CustomInput";

import { useLanguage } from "@/app/context/LangContext";
import { cookieHelper } from "@/src/helpers/cookieHelper";
import { useAuth } from "@/app/context/authContext";

function FilterBar({
  title,
  balance = 0,
  onFilter,
  onSort,
  searchValue,
  onSearchChange,
  mode,
  onSortChnage,
}) {


  const { messages: t } = useLanguage();
  const dispatch = useDispatch();
  const router = useRouter();

  const { userData } = useSelector((state) => state.getuserDetail);
  const [user, setUser] = useState(false);
  const { token } = useSelector((state => state.auth));
 const { isAuth, setShowLogin, setPendingRoute } = useAuth();


  useEffect(() => {
    const cookieToken = cookieHelper.get("access_token");
    if (token || cookieToken) {
      dispatch(getUserFetch());
      setUser(true);
    }
  }, [token]);


  const onRecharge = () => {
    // if (!isAuth) {
    //   setPendingRoute("/add-wallet-money/price-list");
    //   setShowLogin(true);
    //   return;
    // }

    router.push("/add-wallet-money/price-list");
  };


  const userbalance = useMemo(() => {
    return userData?.balance_amount

  }, [userData])






  // Filter button

  const [selectedFilters, setSelectedFilters] = useState({
    Skills: [],
    Languages: [],
    Rating: [],
    Experience: [],
    Price: [],
  });

  const data = {
    Skills: [
      "Vedic",
      "Tarot",
      "KP & Horary Astrology",
      "Lal Kitab",
      "Numerology",
      "Vastu",
      "Prashna",
      "Palmistry",
      "Naadi",
      "Pendulum Dowsing",
      "Fengshui",
      "Psychic Reading & Healing",
      "Love & Relationship",
      "Career in Education",
    ],
    Languages: ["English", "Hindi", "Tamil", "Bengali", "Gujarati", "Telugu"],
    Rating: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
    Experience: [
      "0-5 Year",
      "5-10 Years",
      "10-15 Years",
      "15-20 Years",
      "20-25 Years",
    ],
    Price: ["0-20", "21-40", "41-60", "61-80"],
  };



  // Sort button
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selected, setSelected] = useState("popularity");

  const sortOptions = [
    { id: "expHigh", label: `${t?.astrocard?.sort1 || "Experience : High to Low"}` },
    { id: "expLow", label: `${t?.astrocard?.sort2 || "Experience : Low to High"}` },
    { id: "priceHigh", label: `${t?.astrocard?.sort3 || "Price : High to Low"}` },
    { id: "priceLow", label: `${t?.astrocard?.sort4 || "Price : Low to High"}` },
    { id: "ratingHigh", label: `${t?.astrocard?.sort5 || "Rating : High to Low"}` },
    { id: "ratingLow", label: `${t?.astrocard?.sort6 || "Rating : Low to High"}` },
  ];

  const handleSortSelect = (id) => {
    setSelected(id);
    setIsSortOpen(false);
    if (onSortChnage) onSortChnage(id);
  };

  const handleReset = () => {
    setSelected("popularity");
    setIsSortOpen(false);
    if (onSortChnage) onSortChnage("popularity");
  };

  return (
    <div className="flex flex-col sm:flex-col lg:flex-row justify-between items-center sm:w-[95%] w-full gap-2 sm:gap-1">
      <button aria-label={`Filter by ${title}`}
        className="text-[#2f1254] text-md sm:text-xl py-1 text-center font-bold cursor-pointer"
      >
        {title}
      </button>

      <div className="flex items-center justify-between w-full gap-10 pb-2 ava-search sm:gap-2 sm:w-auto sm:py-0">
        <div className="flex items-center justify-between gap-5 p-0 border-purple-500 rounded-lg avail-bal-rech">
          <div className="avail-bal">


            {user ? (
              <h5 className="text-black flex items-center text-sm">
                <svg fill="#000000" width={18} height={18} viewBox="0 0 24 24" ><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" /></svg>
                &nbsp; ₹{userbalance || ""}.00
              </h5>
            ) : (
              <h5 className="text-black text-sm"></h5>
            )}
          </div>
          <div className="recharge-btn">
            <button aria-label="Recharge Account"
              className="cursor-pointer text-xs sm:text-sm py-2 px-4 rounded-full border border-b-green-600 text-green-600"
              onClick={onRecharge}
            >
              {t?.astrocard?.recharge || "recharge"}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-5 filter-sort-search">
          <div className="fixed z-22 w-full bottom-0 left-0 md:relative filter-items bg-[#2f1254] p-2 py-3  md:bg-transparent flex items-center  justify-evenly sm:gap-3">



            <div className="relative sort-btn">
              <button aria-label="Sort Options"
                className="sort-button cursor-pointer text-xs sm:text-sm py-2 px-8 w-fit bg-[#ffd70a] flex items-center justify-center gap-1 rounded-full border border-[#ffd70a]"
                onClick={() => setIsSortOpen((prev) => !prev)}
              >
                <svg width={18} height={18} viewBox="0 0 24 24" version="1.1" >
                  <title>sort_descending_line</title>
                  <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Editor" transform="translate(-768.000000, -96.000000)" fillRule="nonzero">
                      <g id="sort_descending_line" transform="translate(768.000000, 96.000000)">
                        <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero">

                        </path>
                        <path d="M18,4 C18.5523,4 19,4.44772 19,5 L19,17.414 L20.1213,16.2927 C20.5118,15.9022 21.145,15.9022 21.5355,16.2927 C21.9261,16.6832 21.9261,17.3164 21.5355,17.7069 L18.7071,20.5354 C18.3166,20.9259 17.6834,20.9259 17.2929,20.5354 L14.4645,17.7069 C14.0739,17.3164 14.0739,16.6832 14.4645,16.2927 C14.855,15.9022 15.4882,15.9022 15.8787,16.2927 L17,17.414 L17,5 C17,4.44772 17.4477,4 18,4 Z M11,18 C11.5523,18 12,18.4477 12,19 C12,19.51285 11.613973,19.9355092 11.1166239,19.9932725 L11,20 L4,20 C3.44772,20 3,19.5523 3,19 C3,18.48715 3.38604429,18.0644908 3.88337975,18.0067275 L4,18 L11,18 Z M13,11 C13.5523,11 14,11.4477 14,12 C14,12.51285 13.613973,12.9355092 13.1166239,12.9932725 L13,13 L4,13 C3.44772,13 3,12.5523 3,12 C3,11.48715 3.38604429,11.0644908 3.88337975,11.0067275 L4,11 L13,11 Z M13,4 C13.5523,4 14,4.44772 14,5 C14,5.55228 13.5523,6 13,6 L4,6 C3.44772,6 3,5.55228 3,5 C3,4.44772 3.44772,4 4,4 L13,4 Z" id="形状" fill="#09244B">

                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <h5 className="text-black">{t?.astrocard?.sort || "Sort"}</h5>
              </button>
              {isSortOpen && (
                <div className="absolute sm:left-0 -left-16  z-30 w-50 sm:w-64 p-4 sm:mt-2 space-y-3 bg-white rounded-2xl shadow-lg bg-linear-to-r from-yellow-100 to-yellow-200 -top-50 md:top-full">
                  {sortOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="sort"
                        value={option.id}
                        checked={selected === option.id}
                        onChange={() => handleSortSelect(option.id)}
                        className="text-blue-500 form-radio"
                      />
                      <span className="sm:text-sm text-xs text-gray-800">{option.label}</span>
                    </label>
                  ))}
                </div>
              )}

            </div>

            <div className="relative reset-btn">
              <button aria-label="Reset Sort Options"
                className="cursor-pointer text-xs sm:text-sm py-2 px-8 w-fit bg-[#ffd70a] flex items-center justify-center gap-1 rounded-full border border-[#ffd70a]"
                onClick={handleReset}
              >
                  <svg width={18} height={18} viewBox="0 0 24 24" version="1.1" >
                  <title>sort_descending_line</title>
                  <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Editor" transform="translate(-768.000000, -96.000000)" fillRule="nonzero">
                      <g id="sort_descending_line" transform="translate(768.000000, 96.000000)">
                        <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero">

                        </path>
                        <path d="M18,4 C18.5523,4 19,4.44772 19,5 L19,17.414 L20.1213,16.2927 C20.5118,15.9022 21.145,15.9022 21.5355,16.2927 C21.9261,16.6832 21.9261,17.3164 21.5355,17.7069 L18.7071,20.5354 C18.3166,20.9259 17.6834,20.9259 17.2929,20.5354 L14.4645,17.7069 C14.0739,17.3164 14.0739,16.6832 14.4645,16.2927 C14.855,15.9022 15.4882,15.9022 15.8787,16.2927 L17,17.414 L17,5 C17,4.44772 17.4477,4 18,4 Z M11,18 C11.5523,18 12,18.4477 12,19 C12,19.51285 11.613973,19.9355092 11.1166239,19.9932725 L11,20 L4,20 C3.44772,20 3,19.5523 3,19 C3,18.48715 3.38604429,18.0644908 3.88337975,18.0067275 L4,18 L11,18 Z M13,11 C13.5523,11 14,11.4477 14,12 C14,12.51285 13.613973,12.9355092 13.1166239,12.9932725 L13,13 L4,13 C3.44772,13 3,12.5523 3,12 C3,11.48715 3.38604429,11.0644908 3.88337975,11.0067275 L4,11 L13,11 Z M13,4 C13.5523,4 14,4.44772 14,5 C14,5.55228 13.5523,6 13,6 L4,6 C3.44772,6 3,5.55228 3,5 C3,4.44772 3.44772,4 4,4 L13,4 Z" id="形状" fill="#09244B">

                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <h5 className="text-black">{t?.astrocard?.reset || "Reset"}</h5>
              </button>
            </div>

          </div>

          <div className="search-astro h-[2.1rem] w-50 sm:w-68 flex items-center gap-1 px-5 rounded-full border border-green-600">
            <CustomInput
              type="text"
              placeholder={t?.astrocard?.search || "Search by name.."}
              className="w-full text-black p-0 px-1 text-sm sm:text-md outline-none border-none rounded-full placeholder:text-[12px]"
              value={searchValue}
              onChange={onSearchChange}
            />
            <svg fill="#000000" width={18} height={18} viewBox="0 0 24 24" ><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg>

          </div>
        </div>
      </div>
    </div>
  );
}




export default React.memo(FilterBar);