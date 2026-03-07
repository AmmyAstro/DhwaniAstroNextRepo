"use client";

import { useParams } from "next/navigation";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import PayOPT from "@/components/Smcompo/Paycomp/PayOPT";

const GET_SINGLE_PACK = gql`
  query GetRechargePackById($id: ID!) {
    getRechargePackById(id: $id) {
      id
      name
      price
      coins
      talktime
      validityDays
    }
  }
`;

export default function CartPage() {
  const params = useParams();
  const packId = params?.id;

  const { data, loading, error } = useQuery(GET_SINGLE_PACK, {
    variables: { id: packId },
    skip: !packId,
  });

  const pack = data?.getRechargePackById;

  if (loading) {
    return <div className="p-6 text-center">Loading pack details...</div>;
  }

  if (error || !pack) {
    return (
      <div className="p-6 text-center text-red-500">
        Invalid Recharge Pack
      </div>
    );
  }


  const gstAmount = (pack.price * 18) / 100;
  const totalAmount = pack.price + gstAmount;

  return (
    <div className="text-gray-500 lg:w-[80%] w-full md:p-4 p-2 bg-white rounded-xl shadow-md flex flex-col gap-3 my-8 place-self-center">
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        
        <div className="p-4 shadow-xl rounded-xl bg-white">
          
          <h3 className="bg-gradient-to-r from-purple-400 to-purple-600 py-2 px-3 text-white rounded-lg font-bold mb-4">
            Recharge Summary
          </h3>

          <div className="space-y-3 text-black">
            
            <div className="flex justify-between">
              <span>Selected Pack</span>
              <span className="font-semibold">{pack.name}</span>
            </div>

            <div className="flex justify-between">
              <span>Amount</span>
              <span>₹ {pack.price}</span>
            </div>

            <div className="flex justify-between">
              <span>GST @18%</span>
              <span>₹ {gstAmount.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total Payable</span>
              <span>₹ {totalAmount.toFixed(2)}</span>
            </div>

          </div>
        </div>

        <PayOPT
          amount={pack.price}
          oriamount={pack.price}
          coupon_id={0}
          couponprice={0}
        />

      </div>
    </div>
  );
}