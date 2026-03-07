'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { AlertLoading } from "@/app/common";
import { addGiftRequest, clearGiftState } from "@/app/redux/reducer/giftSlice/giftSlice";
import { useRouter } from 'next/navigation';
import Script from "next/script";
import { sendPaymentDetail, resetStatusCode } from "@/app/redux/reducer/payment/rechargeSlice";


const gifts = [
  { name: "Namaste", price: "Free", img: "/prblm/namaste.gif" },
  { name: "Heart", price: "11", img: "/prblm/heart.gif" },
  { name: "Rose", price: "21", img: "/prblm/rose.gif" },
  { name: "Chocolate", price: "51", img: "/prblm/chocolate-bar.gif" },
  { name: "Teddy", price: "51", img: "/prblm/teddy-bear.gif" },
  { name: "Cupcake", price: "51", img: "/prblm/cupcake.gif" },
  { name: "Rudraksh Mala", price: "101", img: "/prblm/wreath.gif" },
  { name: "Bouquet", price: "101", img: "/prblm/bouquet.gif" },
  { name: "Ittar", price: "151", img: "/prblm/perfume.gif" },
  { name: "Dakshina", price: "501", img: "/prblm/kalash-pot.gif" },
];

export default function GiftPop({ open, onClose, astrologername, astro_id }) {

  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  const router = useRouter();

  const [selected, setSelected] = useState(null);
  const [balance, setBalance] = useState(0);
  const rechargeOptions = [100, 200, 500, 1000, 2000];
  const { userData } = useSelector((state) => state.getuserDetail);
  const { loading, successMessage, responsedata } = useSelector((state) => state.gift);

  const [priceupdate,setPriceUpdate] =  useState(0);

  const { statusCode } = useSelector((state) => state.recharge_payment);
  useEffect(() => {
 }, [userData, responsedata]);

  useEffect(() => {
    if (successMessage === 200) {
      toast.success("🎉Your gift has been sent with love!");
      setPriceUpdate(0);
      onClose();
      dispatch(clearGiftState());
    }

  }, [successMessage, userData]);

  const sendGift = () => {



    

    const walletprice = userData?.balance_amount + parseInt(priceupdate || 0);
 if (walletprice < selected?.price) {
      toast.error("Insufficient wallet balance. Please recharge your wallet.");
      return;
    }

    if (!selected) {
      toast.error("Please select one gift");
      return;
    }




    let gift_price = 0;
    if (selected?.price === "Free") {
      gift_price = 0;
    } else {
      gift_price = selected?.price;
    }


    const payload = {
      astro_id: astro_id,
      giftname: selected?.name || "",
      giftprice: gift_price || 0,
      user_name: userData?.full_name,
      astro_name: astrologername
    }

    dispatch(addGiftRequest(payload));




  };
  useEffect(() => {
    if (statusCode === 200) {
      setAlert(false);
      toast.success("Payment Add Wallet successfully Again Send Gift!");

      dispatch(resetStatusCode());

    }
  }, [statusCode, astro_id, dispatch, router]);
  const handleCheckout = async (amount) => {
    try {
      setAlert(true);
      const res = await fetch("/api/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount }),
      });

      const order = await res.json();



      if (order.error) {
        alert("Error creating order");
        setAlert(false);

        return;
      }
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Dhwani Astro LLp",
        description: "Gift Payment",
        order_id: order.id,
        handler: async function (response) {
          setAlert(true);

          const res = await fetch("/api/verifypayment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const order = await res.json();

          if (order.success) {
            const userId = userData?.id;
            const paymentId = order.payment_id;
            const totalamount = amount || 0;
            const method = order?.paymentmethod;
            setPriceUpdate(totalamount || 0);
           const res = dispatch(sendPaymentDetail({ userId, paymentId, totalamount, method }));
          } else {
            alert(order);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#fff49e",
        },
      };

      setAlert(false);

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
console.log("aSAs",error?.message);
    } finally {
    }
  };


  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 ">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <div className="relative w-[70%] max-w-md sm:max-w-xl rounded-3xl p-6 bg-white backdrop-blur-lg border border-white/30 shadow-[8px_8px_20px_#bebebe,-8px_-8px_20px_#ffffff1a]">
        <button aria-label="Close Gift Popup"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-red-600 transition-all"
        >
        <svg fill="#000000" width={18} height={18} viewBox="-6 -6 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-close"><path d='M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z' /></svg>
        </button>

        <h2 className="text-xl font-bold text-center text-[#2f1254] mb-4 drop-shadow">
          Send Gifts
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-4 justify-items-center mb-5">
          {gifts.map((gift, i) => (
            <div
              key={i}
              onClick={() => setSelected(gift)}
              className={`cursor-pointer flex flex-col items-center justify-center w-[70px] sm:w-[110px] h-[100px] bg-white shadow-purple-200 shadow-xl rounded-2xl  hover:scale-110 transition-all border ${selected?.name === gift.name
                ? "border-yellow-500 shadow-inner"
                : "border-transparent "
                }`}
            >
              <Image
                src={gift.img}
                alt={gift.name}
                width={40}
                height={40}
                className="object-contain"
              />
              <p className="text-xs sm:text-xs text-center mt-1 font-medium text-gray-800">
                {gift.name}
              </p>
              <p className="text-[11px] text-gray-500">₹{gift.price}</p>
            </div>
          ))}
        </div>

        <div className="w-full bg-white/40 p-3 rounded-xl shadow-inner border border-white/40 mb-4">
          <p className="text-center text-sm font-semibold text-[#2f1254] mb-2">
            Recharge to seek blessing
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {rechargeOptions.map((amt) => (
              <button aria-label={`Recharge ₹${amt}`}
                onClick={() => handleCheckout(amt)}
                key={amt}
                className="px-3 py-2 text-xs sm:text-sm rounded-full bg-yellow-100 hover:bg-yellow-300 text-[#2f1254] font-semibold shadow-[2px_2px_6px_#b9b9b9]"
              >
                ₹{amt}
              </button>
            ))}
          </div>
          {/* <p className="text-[12px] text-center mt-2 text-yellow-700 font-medium">
            Get ₹49 cashback in wallet on this recharge.
          </p> */}
        </div>

        <div className="flex justify-between items-center">
          <div>
            {
              responsedata?.update_price ?
                <p className="text-gray-700 font-semibold"> ₹{(responsedata?.update_price + priceupdate).toFixed(2)}</p>

                :
                <p className="text-gray-700 font-semibold">₹{(userData?.balance_amount + priceupdate).toFixed(2)}</p>


            }

            <p className="text-xs text-gray-500">Wallet Balance</p>
          </div>
          <button aria-label="Send Gift"
            className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold 
          rounded-full shadow-[4px_4px_10px_#b9b9b9,-4px_-4px_10px_#ffffffa0] transition-all"
            onClick={sendGift}>
            Send
          </button>
        </div>
      </div>
      <AlertLoading show={loading} title="Please Wait.." />
      <AlertLoading show={alert} title="Please Wait.." />
    </div>
  );
}
