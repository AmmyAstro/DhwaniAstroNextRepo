"use client";
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import AlertLoading from './AlertLoading';
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { cookieHelper } from '@/src/helpers/cookieHelper';
import { useLanguage } from '../context/LangContext';
import dynamic from 'next/dynamic';








export default function SingleButton({ astro_charge_chat, availability, astro_charge_call, astro_id, disprice_chat, disprice_call }) {
    const [alert, setAlert] = useState(false);

    const router = useRouter();

    const { userData } = useSelector((state) => state.getuserDetail);
    const [isMounted, setIsMounted] = useState(false);
    const { messages: t } = useLanguage();
    const token = cookieHelper.get("access_token");
    useEffect(() => {
        setIsMounted(!!token);
    }, [token]);
    useEffect(() => {

    }, [userData])


    const chatredirect = () => {

        if (!token) {
            toast.error(`${t?.pop?.pop1 || "You Are Offline. Please Connect to Login"}`);
            return;
        }
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
            router.push(`/chatrequest/${astro_id}`);
        }, 1000);
    };

    const callredirect = () => {

        if (!token) {
            toast.error(`${t?.pop?.pop1 || "You Are Offline. Please Connect to Login"}`);
            return;
        }
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
            router.push(`/callrequest/${astro_id}`);
        }, 2000);
    };

    const astrologeroffline = () => {
        toast.error(
            "Astrologer selected by you is offline now so please choose another astrologer."
        );
    };

    const astrologerbusy = () => {
        toast.success(
            "Astrologer selected by you is Busy now so please choose another astrologer."
        );
    };






    const chat_price = () => {
        let user_price;

        if (userData?.user_status === 0) {
            user_price = "Free";
        } else if (userData?.user_status === 1) {
            user_price = 5;
        } else {
            user_price = disprice_chat;
        }

        return user_price;
    };

    const call_price = () => {
        let user_price;

        if (userData?.user_status === 0) {
            user_price = "Free";
        } else if (userData?.user_status === 1) {
            user_price = 5;
        } else {
            user_price = disprice_call;
        }

        return user_price;
    };

    return (
        <>


            {
                availability === 2 &&

                <button aria-label="Astrologer Busy" className="flex items-center gap-3 px-6  sm:px-8 py-2 text-white bg-yellow-500 rounded-full shadow md:py-3" onClick={astrologerbusy}>
                    <div className="flex flex-col gap-1">

                        <div className="flex items-center gap-3">
                            <svg width={18} height={18} viewBox="0 0 640 640"><path d="M115.9 448.9C83.3 408.6 64 358.4 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304C576 436.5 461.4 544 320 544C283.5 544 248.8 536.8 217.4 524L101 573.9C97.3 575.5 93.5 576 89.5 576C75.4 576 64 564.6 64 550.5C64 546.2 65.1 542 67.1 538.3L115.9 448.9zM153.2 418.7C165.4 433.8 167.3 454.8 158 471.9L140 505L198.5 479.9C210.3 474.8 223.7 474.7 235.6 479.6C261.3 490.1 289.8 496 319.9 496C437.7 496 527.9 407.2 527.9 304C527.9 200.8 437.8 112 320 112C202.2 112 112 200.8 112 304C112 346.8 127.1 386.4 153.2 418.7z" /></svg>                            <span className="font-semibold"> Busy</span>
                        </div>


                        <div className=" hidden items-center gap-3">
                            <span className="text-sm font-semibold line-through">₹
                                {astro_charge_chat} /min
                            </span> <span className="font-semibold as-btn-free">{chat_price()}</span>
                        </div>
                    </div>




                </button>
            }

            {
                availability == 1 &&

                <button aria-label="Start Chat" className="flex items-center gap-3 px-6  sm:px-8 py-2 text-white bg-green-600 rounded-full shadow md:py-3"
                    onClick={() => chatredirect()}>
                    <div className="flex flex-col gap-1">

                        <div className="flex items-center gap-3">
                            <svg width={18} height={18} viewBox="0 0 640 640"><path d="M115.9 448.9C83.3 408.6 64 358.4 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304C576 436.5 461.4 544 320 544C283.5 544 248.8 536.8 217.4 524L101 573.9C97.3 575.5 93.5 576 89.5 576C75.4 576 64 564.6 64 550.5C64 546.2 65.1 542 67.1 538.3L115.9 448.9zM153.2 418.7C165.4 433.8 167.3 454.8 158 471.9L140 505L198.5 479.9C210.3 474.8 223.7 474.7 235.6 479.6C261.3 490.1 289.8 496 319.9 496C437.7 496 527.9 407.2 527.9 304C527.9 200.8 437.8 112 320 112C202.2 112 112 200.8 112 304C112 346.8 127.1 386.4 153.2 418.7z" /></svg>                            <span className="font-semibold"> Busy</span>
                            <span className="font-semibold"> Start Chat</span>
                        </div>

                        <div className="hidden items-center gap-3">
                            <span className="text-sm font-semibold line-through">₹
                                {astro_charge_chat} /min
                            </span> <span className="font-semibold as-btn-free">{chat_price()}</span>
                        </div>
                    </div>




                </button>
            }

            {
                availability == 0 &&

                <button aria-label="Astrologer Offline" className="flex items-center gap-3 px-6  sm:px-8 py-2 text-white bg-red-600 rounded-full shadow md:py-3" onClick={astrologeroffline}>
                    <div className="flex flex-col gap-1">

                        <div className="flex items-center gap-3">
                            <svg width={18} height={18} viewBox="0 0 640 640"><path d="M115.9 448.9C83.3 408.6 64 358.4 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304C576 436.5 461.4 544 320 544C283.5 544 248.8 536.8 217.4 524L101 573.9C97.3 575.5 93.5 576 89.5 576C75.4 576 64 564.6 64 550.5C64 546.2 65.1 542 67.1 538.3L115.9 448.9zM153.2 418.7C165.4 433.8 167.3 454.8 158 471.9L140 505L198.5 479.9C210.3 474.8 223.7 474.7 235.6 479.6C261.3 490.1 289.8 496 319.9 496C437.7 496 527.9 407.2 527.9 304C527.9 200.8 437.8 112 320 112C202.2 112 112 200.8 112 304C112 346.8 127.1 386.4 153.2 418.7z" /></svg>                            <span className="font-semibold"> Busy</span>
                            <span className="font-semibold"> Offline</span>
                        </div>


                        <div className="hidden items-center gap-3">
                            <span className="text-sm font-semibold line-through">₹
                                {astro_charge_chat} / min
                            </span> <span className="font-semibold as-btn-free">{chat_price()}</span>
                        </div>
                    </div>




                </button>
            }


            {/* call */}




            {
                availability == 1 &&

                <button aria-label="Start Call" className="flex items-center gap-3 px-6  sm:px-8 py-2 text-white bg-green-600 rounded-full shadow md:py-3" onClick={callredirect}>
                    <div className="flex flex-col gap-1">  <div className="flex items-center gap-3">
                        <svg width={18} height={18} viewBox="0 0 640 640"><path d="M376 32C504.1 32 608 135.9 608 264C608 277.3 597.3 288 584 288C570.7 288 560 277.3 560 264C560 162.4 477.6 80 376 80C362.7 80 352 69.3 352 56C352 42.7 362.7 32 376 32zM384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224zM352 152C352 138.7 362.7 128 376 128C451.1 128 512 188.9 512 264C512 277.3 501.3 288 488 288C474.7 288 464 277.3 464 264C464 215.4 424.6 176 376 176C362.7 176 352 165.3 352 152zM176.1 65.4C195.8 60 216.4 70.1 224.2 88.9L264.7 186.2C271.6 202.7 266.8 221.8 252.9 233.2L208.8 269.3C241.3 340.9 297.8 399.3 368.1 434.2L406.7 387C418 373.1 437.1 368.4 453.7 375.2L551 415.8C569.8 423.6 579.9 444.2 574.5 463.9L573 469.4C555.4 534.1 492.9 589.3 416.6 573.2C241.6 536.1 103.9 398.4 66.8 223.4C50.7 147.1 105.9 84.6 170.5 66.9L176 65.4z" /></svg>
                        <span className="font-semibold"> Start Call</span></div>
                        <div className="hidden items-center gap-3"> <span className="text-sm font-semibold line-through">₹
                            {astro_charge_call} /
                            min</span> <span className="font-semibold as-btn-free">{call_price()}</span></div></div>
                </button>
            }





            {
                availability == 0 &&


                <button aria-label="Astrologer Offline" className="flex items-center gap-3 px-6  sm:px-8 py-2 text-white bg-red-600 rounded-full shadow md:py-3" onClick={astrologeroffline}>
                    <div className="flex flex-col gap-1">  <div className="flex items-center gap-3">
                        <svg width={18} height={18} viewBox="0 0 640 640"><path d="M376 32C504.1 32 608 135.9 608 264C608 277.3 597.3 288 584 288C570.7 288 560 277.3 560 264C560 162.4 477.6 80 376 80C362.7 80 352 69.3 352 56C352 42.7 362.7 32 376 32zM384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224zM352 152C352 138.7 362.7 128 376 128C451.1 128 512 188.9 512 264C512 277.3 501.3 288 488 288C474.7 288 464 277.3 464 264C464 215.4 424.6 176 376 176C362.7 176 352 165.3 352 152zM176.1 65.4C195.8 60 216.4 70.1 224.2 88.9L264.7 186.2C271.6 202.7 266.8 221.8 252.9 233.2L208.8 269.3C241.3 340.9 297.8 399.3 368.1 434.2L406.7 387C418 373.1 437.1 368.4 453.7 375.2L551 415.8C569.8 423.6 579.9 444.2 574.5 463.9L573 469.4C555.4 534.1 492.9 589.3 416.6 573.2C241.6 536.1 103.9 398.4 66.8 223.4C50.7 147.1 105.9 84.6 170.5 66.9L176 65.4z" /></svg>

                        <span className="font-semibold"> Offline</span></div>
                        <div className="hidden items-center gap-3">
                            <span className="text-sm font-semibold line-through">₹
                                {astro_charge_call} /
                                min</span> <span className="font-semibold as-btn-free">{call_price()}</span></div></div>
                </button >
            }


            {
                availability == 2 &&


                <button aria-label="Astrologer Busy" className="flex items-center gap-3 px-6  sm:px-8 py-2 text-white bg-yellow-500 rounded-full shadow md:py-3" onClick={astrologerbusy}>
                    <div className="flex flex-col gap-1">  <div className="flex items-center gap-3">
                        <svg width={18} height={18} viewBox="0 0 640 640"><path d="M376 32C504.1 32 608 135.9 608 264C608 277.3 597.3 288 584 288C570.7 288 560 277.3 560 264C560 162.4 477.6 80 376 80C362.7 80 352 69.3 352 56C352 42.7 362.7 32 376 32zM384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224zM352 152C352 138.7 362.7 128 376 128C451.1 128 512 188.9 512 264C512 277.3 501.3 288 488 288C474.7 288 464 277.3 464 264C464 215.4 424.6 176 376 176C362.7 176 352 165.3 352 152zM176.1 65.4C195.8 60 216.4 70.1 224.2 88.9L264.7 186.2C271.6 202.7 266.8 221.8 252.9 233.2L208.8 269.3C241.3 340.9 297.8 399.3 368.1 434.2L406.7 387C418 373.1 437.1 368.4 453.7 375.2L551 415.8C569.8 423.6 579.9 444.2 574.5 463.9L573 469.4C555.4 534.1 492.9 589.3 416.6 573.2C241.6 536.1 103.9 398.4 66.8 223.4C50.7 147.1 105.9 84.6 170.5 66.9L176 65.4z" /></svg>

                        <span className="font-semibold"> Busy</span></div>
                        <div className="hidden items-center gap-3">
                            <span className="text-sm font-semibold line-through">₹
                                {astro_charge_call} /
                                min</span> <span className="font-semibold as-btn-free">{call_price()}</span></div></div>
                </button>
            }






            <AlertLoading show={alert} title="Please Wait.." />
        </>

    )
}
