'use client';
import { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Sumout from './Sumout';
import Astrolo from '../Consultations/Concompo/Astrolog';
import Forminp from '../Consultations/Concompo/Forminp';
import CustomButton from '@/components/Custom/CustomButton';

export default function Matching() {
    const [showPopup, setShowPopup] = useState(true);
    const [showConsultPage, setShowConsultPage] = useState(true);
    const [showAstroPage, setShowAstroPage] = useState(false);
    const [showSumoutPage, setShowSumoutPage] = useState(false);
    const [selectedMuhurta, setSelectedMuhurta] = useState('');

    const router = useRouter();

    const handleContinue = () => {
        setShowPopup(false);
    };

    const handleNextClick = () => {
        if (!selectedMuhurta || selectedMuhurta === 'Choose an option') {
            toast.error('Please select a required Muhurat option!');
            return;
        }
        setShowConsultPage(false);
        setShowAstroPage(true);
        setShowSumoutPage(false);
    };

    const handleNextToSummary = () => {
        setShowConsultPage(false);
        setShowAstroPage(false);
        setShowSumoutPage(true);
    };

    const handleGoBack = () => {
        setShowConsultPage(true);
        setShowAstroPage(false);
        setShowSumoutPage(false);
    };

    //  work for api code 
    return (
        <div className="relative w-full">
            {showPopup && (
                <div className="fixed inset-0 z-50 bg-[#00000062] bg-opacity-15 flex items-center justify-center">
                    <div className="bg-white border-2 border-purple-300 rounded-lg shadow-lg p-3 md:p-6 w-[90%] md:w-[50%] text-center">
                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <Image
                                src="/ds-img/match-mak.png"
                                alt="Match Consultation"
                                width={100}
                                height={100}
                                unoptimized
                                className="w-32 rounded-lg h-32"
                            />
                            <div className="flex flex-col gap-2 text-black text-sm items-start">
                                <span className="flex flex-col md:flex-row justify-between items-start w-full">
                                    <h5 className="text-sm md:text-base font-semibold">
                                        Match Making Consultation
                                    </h5>
                                    <span className="text-sm md:text-base font-semibold">
                                        Duration : 20min
                                    </span>
                                </span>
                                <span className="flex items-center gap-3 text-sm md:text-base font-semibold">
                                    <h4>Fee :</h4>
                                    <h5>[RS 200 / min]</h5>
                                </span>
                                <p className="text-start">
                                    Match-making consultations by astrologers typically involve
                                    analyzing the birth charts (horoscopes) of individuals to
                                    assess their compatibility for marriage or partnership.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleContinue}
                            aria-label="Continue to Match Making Consultation"
                            className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-3 text-sm md:px-6 py-2 rounded-lg shadow"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            <div
                className={`bg-yellow-50 min-h-screen flex items-start justify-center  p-4 md:p-6 w-full ${showPopup ? "blur-sm pointer-events-none" : ""
                    }`}
            >
                <div className="bg-white shadow-lg rounded-lg flex flex-col w-full max-w-6xl overflow-hidden">
                    {showConsultPage && (
                        <div className="flex flex-col gap-4">
                            <div className="consult-page relative flex flex-col md:flex-row w-full md:h-screen md:overflow-hidden">

                                <div className="md:w-1/2 w-full p-4 md:p-6 flex items-start justify-center sticky top-0 left-0 md:h-screen bg-white z-10">
                                    <Image
                                        src="/ds-img/match-mak.png"
                                        alt="Marriage Consultation"
                                        width={100}
                                        height={100}
                                        unoptimized
                                        className="w-100 rounded-lg md:h-100 h-64"
                                    />
                                </div>

                                <div className="md:w-1/2 w-full md:h-screen overflow-y-scroll p-4 md:p-6 right-det">
                                    <h1 className="md:text-2xl text-xl font-bold text-gray-800 mb-2">
                                        Match Making Consultation
                                    </h1>
                                    <p className="md:text-xl text-base font-semibold text-gray-700 mb-2">
                                        ₹2,511.00 – ₹4,111.00
                                    </p>
                                    <div className="text-gray-700 md:mb-6 mb-3 text-xs md:text-sm bg-yellow-50 px-3 py-2 rounded-lg shadow-lg">
                                        <strong>
                                            In India, people care about how well their marriages work.
                                            Many things affect how well a marriage works, such as
                                            personality, closeness, love, unity, understanding,
                                            health, peace, children, gains, and growth.
                                        </strong>
                                        <p>
                                            How to Find Your Best Match with Pandit Ji on Call Online
                                            Horoscope Matching Services?  Online Horoscope Matching
                                            Services What is Horoscope Matching? When two people get
                                            married, their lives and the lives of their families
                                            change. This beautiful friendship will connect two souls
                                            forever. Everyone has been waiting for this new start
                                            since they reached an age where they felt ready to commit.
                                            Before a Hindu wedding, there are often many different
                                            traditions that happen. Some practices are done from a
                                            very young age. Before deciding to get their kids married,
                                            many families look at their complete birth charts for
                                            Match Making to see if their stars suit them.
                                        </p>
                                    </div>
                                    {/*  */}
                                    <div className="mb-4 flex flex-col items-center justify-between">
                                        <label className="block  text-sm md:text-base text-gray-700 font-semibold mb-2">
                                            Select Your Required Yearly Prediction
                                        </label>
                                        <div className="grid grid-cols-3 text-black gap-2 w-full">
                                            {[
                                                {
                                                    label: "Individual",
                                                    value: "individual",
                                                    srcc: "/ds-img/newmatchboy.png",
                                                },
                                                {
                                                    label: "Couple",
                                                    value: "couple",
                                                    srcc: "/ds-img/wedding-couple.png",
                                                },
                                            ].map(({ label, value, srcc }, index) => (
                                                <button aria-label={`Select ${label} Yearly Prediction`}
                                                    key={index}
                                                    type="button"
                                                    onClick={() => setSelectedMuhurta(value)}
                                                    className={`flex flex-col items-center gap-2 border p-2 rounded-lg ${selectedMuhurta === value
                                                        ? "border-amber-400 bg-yellow-100"
                                                        : "border-amber-200"
                                                        }`}
                                                >
                                                    <Image
                                                        src={srcc}
                                                        width={50}
                                                        height={70}
                                                        className="rounded-full w-10 h-10 object-fit"
                                                        alt="consultation option"
                                                        unoptimized
                                                    />
                                                    <h5 className="text-sm  text-center">{label}</h5>
                                                </button>
                                            ))}
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-2 gap-5">
                                        <CustomButton aria-label="Book your Audio consultation"
                                            onClick={handleNextClick}
                                            className=" flex items-center gap-2  next-cont mt-4  place-self-center bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow"
                                        >
                                            <svg width={20} height={20} viewBox="0 0 16 16" version="1.1" className="si-glyph si-glyph-call">


                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <path d="M14.031,11.852 C13.603,11.313 12.908,10.532 12.313,10.458 C11.951,10.413 11.535,10.713 11.125,10.996 C11.045,11.036 10.427,11.404 10.352,11.426 C9.956,11.539 9.111,11.572 8.6,11.106 C8.108,10.656 7.33,9.823 6.702,9.06 C6.102,8.274 5.473,7.329 5.151,6.749 C4.815,6.148 5.057,5.353 5.265,5.003 C5.303,4.94 5.763,4.467 5.866,4.357 L5.881,4.375 C6.262,4.055 6.661,3.73 6.706,3.378 C6.78,2.792 6.181,1.939 5.753,1.399 C5.325,0.858 4.662,-0.089 3.759,0.045 C3.419,0.095 3.126,0.214 2.837,0.385 L2.829,0.376 C2.823,0.38 2.795,0.402 2.781,0.413 C2.772,0.418 2.764,0.421 2.756,0.426 L2.759,0.43 C2.593,0.558 2.119,0.912 2.065,0.96 C1.479,1.481 0.597,2.708 1.279,4.915 C1.785,6.555 2.864,8.481 4.334,10.429 L4.326,10.436 C4.398,10.53 4.472,10.615 4.547,10.706 C4.617,10.799 4.686,10.891 4.758,10.983 L4.768,10.976 C6.328,12.855 7.964,14.357 9.457,15.243 C11.467,16.435 12.896,15.898 13.556,15.471 C13.618,15.43 14.09,15.063 14.25,14.942 L14.254,14.946 C14.26,14.94 14.264,14.932 14.272,14.926 C14.284,14.917 14.31,14.897 14.315,14.893 L14.309,14.885 C14.551,14.651 14.745,14.401 14.879,14.086 C15.23,13.257 14.459,12.393 14.031,11.852 L14.031,11.852 Z" fill="#fff" className="si-glyph-fill">

                                                    </path>
                                                </g>
                                            </svg>

                                            <span className='text-xs md:text-sm'>Book your Audio <br /> consultation</span>
                                        </CustomButton>
                                        <CustomButton aria-label="Book your Video consultation"
                                            onClick={handleNextClick}
                                            className="flex items-center gap-2 next-cont mt-4  place-self-center bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow"
                                        >
                                            <svg width={20} height={20} viewBox="0 0 640 640"><path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z" /></svg>

                                            <span className='text-xs md:text-sm'>Book your Video <br /> consultation </span>

                                        </CustomButton>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 px-5 w-[90%] place-self-center">
                                <div className=" justify-between gap-5 grid grid-cols-2">
                                    <div className="bg-yellow-50 shadow-lg py-4 px-4 rounded-lg text-gray-800 space-y-2">
                                        <h2 className="md:text-base text-sm font-semibold flex items-center gap-2">
                                            Why Match Making Counselling is Essential :
                                        </h2>
                                        <ul className="list-disc list-inside space-y-2 text-xs md:text-sm">
                                            <li> Ease of access: Online Kundali Matching lets you compare horoscopes of possible partners without leaving your house.</li>
                                            <li>Correct reports: Our Free Match making services looks at a couple's birth charts to determine whether they are a good match.</li>
                                            <li>Insights into compatibility: Using the Online Horoscope Matching services report, it's possible to find out if two people are physically, emotionally, and intellectually compatible.
                                            </li>
                                            <li>
                                                If conflicts keep resurfacing without resolution, a
                                                counsellor can provide strategies for effective conflict
                                                management.
                                            </li>
                                            <li>
                                                Find problems with compatibility: Guna Milan can also raise problems that might arise in the future regarding how well two people get along.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 shadow-lg py-4 px-4 rounded-lg text-gray-800 md:space-y-4 space-y-2">
                                        <h2 className="md:text-base text-sm font-semibold flex items-center gap-2">
                                            What You Will Receive:
                                        </h2>
                                        <ul className="list-disc list-inside space-y-2 text-xs md:text-sm">
                                            <li>
                                                Detailed Kundli (birth chart) analysis of both partners for compatibility
                                            </li>
                                            <li>
                                                Evaluation of Mangal Dosha, Nadi Dosha, and other critical factors
                                            </li>
                                            <li>
                                                Assessment of Guna Milan (Ashtakoota) score and its significance
                                            </li>
                                            <li>
                                                Insights into emotional, mental, and physical compatibility
                                            </li>
                                            <li>
                                                Personalized astrological remedies to enhance relationship harmony and marital success
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-4 bg-white text-black text-sm  place-self-center shadow-lg ">
                                    <h2 className="md:text-2xl text-base text-center font-semibold mb-2">
                                        Service Details
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b text-sm md:text-sm pb-4 mb-4">
                                        <div className=" py-2 px-3 bg-yellow-50 rounded-lg">
                                            <div className="flex justify-between py-2 g">
                                                <span className="text-gray-600">Service Mode</span>
                                                <span className="font-semibold">Online</span>
                                            </div>
                                            <div className="flex justify-between py-2 ">
                                                <span className="text-gray-600">Service Location</span>
                                                <span className="font-semibold">Worldwide</span>
                                            </div>
                                        </div>
                                        <div className=" py-2 px-3 bg-yellow-50 rounded-lg">
                                            <div className="flex justify-between py-2 ">
                                                <span className="text-gray-600">Payment Mode</span>
                                                <span className="font-semibold">Online</span>
                                            </div>
                                            <div className="flex justify-between py-2 ">
                                                <span className="text-gray-600">Language</span>
                                                <span className="font-semibold">
                                                    English, Hindi, Marathi
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-800 mb-1 md:text-base text-sm">
                                        We provide remedies and solutions for health related issues
                                        through astrology.
                                    </p>
                                    <p className="text-gray-800 mb-4 md:text-base text-sm">
                                        This can get complicated for those who have little or no knowledge of Vedic astrology. I will explain the rules
                                        to be observed for the best Kundli matching for various dosha like bhakoot milan in horoscope.
                                        Those not interested in astrological analogies may skip this section. However, explaining these points makes this site
                                        best marriage  site by date of birth.
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 text-sm">
                                <h1 className="text-xl font-semibold mb-4">
                                    Astrological rules for the best Kundli matching :
                                </h1>
                                <p className="mb-4 text-gray-700">
                                    While astrology is not a substitute for medical advice or
                                    professional healthcare, some people believe that astrological
                                    insights can provide an additional layer of understanding and
                                    guidance. It’s important to note that the effectiveness of
                                    astrology in health matters is subjective and varies widely.
                                    Here we are discussing some of the health-related issues and
                                    problems where astrology is sometimes considered to offer
                                    insights.
                                </p>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>
                                        <span className="font-bold">
                                            Planetary compatibility in Horoscope matching:-
                                        </span>
                                        The planets are important to evaluate :
                                        <ul>
                                            <li>  1. The Ascendant lord and moon of both the horoscopes.</li>

                                            <li> 2. 7th house Lord of both the horoscopes.</li>

                                            <li> 3. Then to consider are Venus and Jupiter.</li>

                                            <li>4. We superimpose the horoscope of both marriage aspirants to evaluate the planets' position with respect to each other. Some positions, like 6/8 & 2/12, are not good planetary combinations for a marriage. In the same way, if there are intrinsically bad planets in any sensitive bhav, it is not considered good for horoscope matching.
                                            </li> </ul>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Bhava compatibility in Horoscope matching :
                                        </span>
                                        Next is the Bhav Compatibility. For this, if Lagna of both the horoscopes is the same, it is considered good. If Lagna signs are trinal or Kendra to each other, it is considered a good match. Combinations other than these are not considered good for horoscope matching.
                                    </li>
                                    <li>
                                        <span className="font-bold">Navamsha compatibility in Horoscope matching for marriage :</span>
                                        The Navamsha compatibility check is a repetition of planetary & Bhav compatibility done in the Lagna, or ascendant chart explained above. Navamsha compatibility matching shows that the horoscopes have soul compatibility from the previous birth. This compatibility indicates horoscope matching for marriage as it shows the connection between both persons from the previous birth.
                                    </li>
                                    <li>
                                        <span className="font-bold">Mangal or Kuja compatibility in horoscope matching :</span>
                                        A check on the placement of planet Mars is important for getting marital bliss. It is recommended to get is checked by a competent astrologer as there are many misconceptions about Mangal Dosha. Under free horoscope matching check on the Mars-Dosha for yourself.
                                    </li>
                                    <li>
                                        <span className="font-bold"> Affliction to 2nd house :</span>
                                        2nd house is the Kutumb Sthana. It shows prosperity & parental lineage. Any affliction to 2nd house in either of the charts is not good for a happy married life. Therefore, an astrologer must not overlook this factor.
                                    </li>
                                    <li>
                                        <span className="font-bold">Affliction to 4th house :</span>
                                        4th house is the Sukh Sthana, i.e., the chances of suffering after marriage. An afflicted 4th house spoils happiness in marriage. Therefore, astrologers must ensure that there are no afflictions to the 4th house in either of the birth charts being matched for marriage.
                                    </li>
                                    <li>
                                        <span className="font-bold">Kalatra Bhav in marriage matching : </span>
                                        Kalantra bhav is the 7th house in the birth chart. The astrologer must check that there are no afflictions in the 7th house of either of the charts being matched for marriage.
                                    </li>
                                    <li>
                                        <span className="font-bold">Shaiya Sukh Sthana :</span>
                                        The 12th house in the horoscope examines a person's sexual pleasures. In the present times, with extended social exposures and compulsions, it is essential to check the legitimacy of sexual desires a person will have post-marital.
                                    </li>
                                    <li>
                                        <span className="font-bold">Trishamsa check-in charts matching for marriage :</span>
                                        This is the final step towards an online matching horoscope for marriage: a deep examination of D-30 called a Trishamsa check. This shows the female character and can reveal a few points like extramarital flings, Widow Yoga, Adultery, and the reputation of the female family with the marriages.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    )}

                    {showAstroPage && (
                        <div className="astro-page w-full flex  items-center justify-center place-self-center text-black">
                            <div className="flex flex-col gap-5 w-[80%] items-center justify-center place-self-center py-5">
                                <Astrolo />

                                <Forminp />

                                <div className="flex justify-between items-center pt-4 border-t text-sm md:text-sm place-self-end gap-10">
                                    <CustomButton aria-label="Go Back" variant={"red"} onClick={handleGoBack} className="text-blue-800 font-semibold flex items-center gap-1 hover:underline">
                                        ← Go Back
                                    </CustomButton>
                                    <CustomButton aria-label="Next to Summary" variant={"green"} onClick={handleNextToSummary} className="px-2 py-2 text-xl">
                                        Next: <span className="font-bold">Summary</span> →
                                    </CustomButton>

                                </div>
                            </div>

                        </div>
                    )}
                    {showSumoutPage && (
                        <Sumout />
                    )}
                </div>
            </div>
        </div>
    );
}
