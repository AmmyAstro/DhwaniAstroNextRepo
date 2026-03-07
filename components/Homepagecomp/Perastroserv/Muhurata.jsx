'use client';
import { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Sumout from './Sumout';
import Astrolo from '../Consultations/Concompo/Astrolog';
import Forminp from '../Consultations/Concompo/Forminp';
import CustomButton from '@/components/Custom/CustomButton';

export default function Muhurata() {
  const [showPopup, setShowPopup] = useState(true);
  const [showConsultPage, setShowConsultPage] = useState(true);
  const [showAstroPage, setShowAstroPage] = useState(false);
  const [showSumoutPage, setShowSumoutPage] = useState(false);
  const [selectedMuhurta, setSelectedMuhurta] = useState('');

  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    scrollToTop();

  };

  const handleNextToSummary = () => {
    setShowConsultPage(false);
    setShowAstroPage(false);
    setShowSumoutPage(true);
    scrollToTop();

  };

  const handleGoBack = () => {
    setShowConsultPage(true);
    setShowAstroPage(false);
    setShowSumoutPage(false);
    scrollToTop();

  };


  return (
    <div className="relative w-full">
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-[#00000062] bg-opacity-15 flex items-center justify-center">
          <div className="bg-white border-2 border-purple-300 rounded-lg shadow-lg p-3 md:p-6 w-[90%] md:w-[50%] text-center">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <Image
                src="/prblm/muhuimage.png"
                alt="Shubh Muhurat Consultation"
                width={100}
                height={100}
                unoptimized
                className="w-32 rounded-lg h-32"
              />
              <div className="flex flex-col gap-2 text-black text-sm items-start">
                <span className='flex flex-col md:flex-row justify-between w-full'>
                  <h5 className="text-sm md:text-base font-semibold">Muhurata Consultation</h5>
                  <span className="text-sm md:text-base font-semibold">Duration : 20min</span>
                </span>
                <span className='flex items-center gap-3 text-sm md:text-base font-semibold'>
                  <h4>Fee :</h4><h5>[RS 200 / min]</h5>
                </span>
                <p className='text-start'>This is the service which can be taken in cases where any important work needs to be started.</p>
              </div>
            </div>
            <button
              aria-label="Continue to Muhurata Consultation"
              onClick={handleContinue}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-3 text-sm md:px-6 py-2 rounded-lg shadow"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className={`bg-yellow-50 min-h-screen flex items-start justify-center p-4 md:p-6 w-full ${showPopup ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="bg-white shadow-lg rounded-lg flex flex-col w-full max-w-6xl overflow-hidden">

          {showConsultPage && (
            <div className="consult-page relative flex flex-col md:flex-row w-full md:h-screen md:overflow-hidden">
              <div className="md:w-1/2 w-full p-4 md:p-6 flex items-start justify-center sticky top-0 left-0 md:h-screen bg-white z-10">
                <Image
                  src="/prblm/muhuimage.png"
                  alt="Shubh Muhurat Consultation"
                  width={100}
                  height={100}
                  unoptimized
                  className="w-100 rounded-lg md:h-100 h-64"
                />
              </div>

              <div className="md:w-1/2 w-full md:h-screen overflow-y-scroll p-4 md:p-6 right-det">
                <h1 className="md:text-2xl text-xl font-bold text-gray-800 mb-2 text-start">Shubh Muhurat Consultation</h1>
                <p className="md:text-xl text-base font-semibold text-gray-700 mb-2">₹2,511.00 – ₹4,111.00</p>
                <div className="text-gray-700 md:mb-6 mb-3 text-xs md:text-sm bg-yellow-50 px-3 py-2 rounded-lg shadow-lg">
                  <strong>Auspicious Vedic Timing for Your Most Important Moments.</strong>
                  <p>Receive a personalized Shubh Muhurat based on your birth chart and Vedic Panchang.</p>
                </div>

                <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
                  <label className="block text-sm md:text-base text-gray-700 font-semibold mb-2">Select Your Required Muhurat</label>
                  <select className="w-full text-xs md:text-sm text-black border border-gray-300 rounded-lg p-1" value={selectedMuhurta}
                    onChange={(e) => setSelectedMuhurta(e.target.value)}>
                    <option>Choose an option</option>
                    <option>Marriage</option>
                    <option>Medication/Surgery</option>
                    <option>New Home Entry</option>
                    <option>Child Conception/Delivery</option>
                    <option>Starting New Job</option>
                    <option>Others</option>

                  </select>
                </div>

                <div className="bg-yellow-50 py-4 px-4 rounded-lg text-gray-800 md:space-y-4 space-y-2">
                  <h2 className="md:text-base text-sm font-semibold flex items-center gap-2">
                    <span role="img" aria-label="muhurat-icon">🪔</span>
                    What You Will Receive:
                  </h2>
                  <ul className="list-disc text-xs md:text-sm list-inside space-y-2 ">
                    <li>A <span className="font-semibold">personalized Muhurat</span>, chosen after carefully studying your <span className="font-semibold">Janma Kundali</span></li>
                    <li>A short and clear <span className="font-semibold">PDF report</span> with the selected date, time, and astrological reasoning</li>
                  </ul>
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
                  </CustomButton></div>
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
