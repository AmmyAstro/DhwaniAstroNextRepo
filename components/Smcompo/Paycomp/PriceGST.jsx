'use client';

import { addTwoValues } from "@/app/helper/helper";


export default function PriceGST({ price = 0 }) {
  const gst = price * 0.18;
  const sgst = gst;
  const talkingAmount = price;
  
  const total= addTwoValues(parseInt(talkingAmount),sgst);
 

  return (
  <> <div className="p-2 text-white shadow-2xl rounded-xl sm:p-4">
          <h3 className=" bg-[linear-gradient(to_right,#a65ed677_54%,#ba38cb67_100%)] py-1 px-2 place-self-center w-full rounded-lg text-sm sm:text-lg font-bold mb-2">Payment </h3>
          <div className="p-2 space-y-2 text-black bg-white rounded-xl sm:p-4">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Amount</span>
              <span className="text-sm">{price} </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">GST @18%</span>
              <span className="text-sm">{sgst}</span>
            </div>
           
             <hr />
            <div className="flex justify-between border border-gray-gray-200 rounded-2xl p-2 bg-gray-100">
            <input type="text" />
            <button className="text-green-300 text-sm">Apply Coupon</button>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-bold">
              <span className="text-sm font-medium">Total Payable Amount</span>
              <span className="text-sm">{total}</span>
            </div>
          </div>
        </div></>
  );
}
