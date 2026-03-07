"use client";

import { useLanguage } from "@/app/context/LangContext";
import CustomButton from "@/components/Custom/CustomButton";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";

const GET_RECHARGE_PACKS = gql`
  query GetRechargePacks {
    getRechargePacks {
      data {
        id
        name
        description
        price
        coins
        talktime
        validityDays
      }
      totalCount
    }
  }
`;

const RePack = () => {
  const { messages: t } = useLanguage();
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_RECHARGE_PACKS);

  const packData = data?.getRechargePacks?.data || [];

  const handleSelect = (id) => {
   router.push(`/add-wallet-money/cart/${id}`);
  };

  if (loading) {
    return <div className="p-6 text-center">Loading recharge packs...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="p-6 w-7xl">
      <div>
        <div className="flex flex-col justify-between gap-4 mb-8 md:flex-row md:items-center">
          <div className="relative flex items-center justify-center w-full p-6 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="text-lg font-semibold text-gray-800">
                <span className="text-xl font-semibold">
                  {t?.astrocard?.add || "Add Money to Wallet"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {packData.map((pack) => (
            <div
              key={pack.id}
              className="relative flex flex-col justify-between p-5 bg-white border border-gray-200 shadow-lg rounded-xl"
            >
              <span className="rotate-[-42deg] w-28 text-center absolute top-[17px] left-[-27px] bg-gradient-to-r from-yellow-400 to-orange-400 text-[0.6rem] text-white px-2 py-1 rounded-tr-lg rounded-bl-lg shadow">
                {t?.astrocard?.offer || "Special Offer"}
              </span>

              <div className="text-center">
                <h3 className="mb-1 text-lg font-semibold text-purple-700">
                  {pack.name}
                </h3>

                <p className="text-2xl font-bold text-gray-900">
                  ₹ {pack.price}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {pack.coins} Coins • {pack.talktime} mins •{" "}
                  {pack.validityDays} days
                </p>
              </div>

              <CustomButton
                aria-label={`Select Pack ${pack.name}`}
                className="w-full px-4 py-2 mt-4 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                onClick={() => handleSelect(pack.id)}
              >
                {t?.astrocard?.pack || "Select Pack"}
              </CustomButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RePack;