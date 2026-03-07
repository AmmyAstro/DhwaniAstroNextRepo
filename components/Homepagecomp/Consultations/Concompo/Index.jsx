
"use client";
import { useState } from 'react';
import { consultdata } from "../Consultdata";
import Imagecom from "./Imagecom";
import { PACKAGES, SESSION_LENGTHS, BASE_PRICE, TYPES } from "./package";
import Sumout from "../../Perastroserv/Sumout";
import Packdet from "./Packdet";
import Benefit from "./Benefit";
import Astrolo from "./Astrolog";
import Forminp from "./Forminp";
import CustomButton from '@/components/Custom/CustomButton';

const Index = ({ pageName }) => {
    const pageData = consultdata.find((item) => item[pageName]);
    const pageContent = pageData ? pageData[pageName] : null;

    if (!pageContent) {
        return <div>Page  found</div>;
    }

    const [lengthKey, setLengthKey] = useState("HALF_HOUR");
    const [pkgId, setPkgId] = useState("single");
    const [contyp, setContyp] = useState(null);

    const [showconsultSec, setshowconsultSec] = useState(true);
    const [showconsultDetail, setshowconsultDetail] = useState(false);
    const [showSumoutPage, setshowSumoutPage] = useState(false);

    const sessionLen = SESSION_LENGTHS[lengthKey];
    const pkg = PACKAGES.find((p) => p.id === pkgId);

    if (!pkg) {
        return <div>Error: Selected package not found</div>;
    }

    const rawPrice = BASE_PRICE * sessionLen.multiplier * pkg.sessions;
    const finalPrice = rawPrice * (1 - pkg.discount);



    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNext = () => {
        setshowconsultSec(false);
        setshowconsultDetail(true);
        setshowSumoutPage(false);
        scrollToTop();
    };

    const handleNextToSummary = () => {
        setshowconsultSec(false);
        setshowconsultDetail(false);
        setshowSumoutPage(true);
        scrollToTop();
    };

    const handleGoBack = () => {
        setshowconsultSec(true);
        setshowconsultDetail(false);
        setshowSumoutPage(false);
        scrollToTop();
    };

    return (
        <div className="md:my-5 md:py-4 my-1 py-2 gap-10 md:px-6 px-4   flex-col rounded-lg main-card-astro flex sm:max-w-7xl place-self-center w-full">
            {showconsultSec && (
                <div className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 items-start w-full md:gap-10 gap-4">
                        <div className="w-full  flex items-center justify-center p-4">
                            <Imagecom data={pageContent.firstSection} />
                        </div>
                        <Packdet data={pageContent.secondSection} onNext={handleNext} astrologerTypes={pageContent.packType} />

                    </div>
                    <Benefit data={pageContent.thirdSection} />
                </div>
            )}

            {showconsultDetail && (
                <div className="astro-page w-full flex  items-center justify-center place-self-center text-black">
                    <div className="flex flex-col gap-5 w-[80%] items-center justify-center place-self-center">
                        <Astrolo data={pageContent.fourthSection.ascar} />

                        <Forminp data={pageContent.fifthSection} />

                        <div className="flex justify-between items-center pt-4 text-sm md:text-sm place-self-end gap-10">
                            <CustomButton aria-label="Go Back" variant={"red"} 
                                onClick={handleGoBack}
                                className="text-blue-800 font-semibold flex items-center gap-1 hover:underline">
                                ← Go Back
                            </CustomButton>
                            <CustomButton aria-label="Next to Summary" variant={"gcircle"}
                                onClick={handleNextToSummary}
                                className="bg-green-600 text-white px-6 py-2  font-semibold hover:bg-green-900 flex items-center gap-1">
                                Next: <span className="font-bold">Summary</span> →
                            </CustomButton>
                        </div>
                    </div>
                </div>
            )}
            {showSumoutPage &&
                <Sumout />
            }
        </div>
    );
};

export default Index;
