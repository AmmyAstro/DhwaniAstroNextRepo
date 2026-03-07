'use client';

import CustomInput from "../Custom/CustomInput";
import { useLanguage } from "@/app/context/LangContext";
export default function Searchtop({
    searchValue,
    onSearchChange,
}) {
    const {messages:t} = useLanguage();
    return (
        <div className="ui-group w-full">
            <div className=" bl-rec text-center flex flex-row items-center w-full justify-center gap-5">
                <span className="uproline w-full hidden sm:flex"></span>

                <form action="#" method="get" className="w-full">
                    <span className="dash-span-inp w-full  rounded-full items-center bg-white flex ">

                        <CustomInput
                            type="text"
                            placeholder={t?.comfree.search || "Looking for something? Just type it..."}
                            className="dash-inp focus:none text-black focus:ring-0 outline-0 border-0 placeholder:text-[#666] placeholder:text-xs"
                            value={searchValue}
                            onChange={onSearchChange}
                        />
                      <svg fill="#000000" width={18} height={18} viewBox="0 0 24 24" ><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
                    </span>
                </form>
                <span className="uproline w-full hidden sm:flex"></span>
            </div>
        </div>
    );

}