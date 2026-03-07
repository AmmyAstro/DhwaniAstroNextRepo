"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { BiSolidBadgeCheck } from "react-icons/bi";
import StarRating from "@/components/Homepagecomp/Remedosha/StarRating";
import { AlertLoading, SingleButton } from "@/app/common";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchUsersRequest } from "@/app/redux/reducer/astrologer/UserFollowSlice";
import { getHistoryRequest } from "@/app/redux/reducer/astrologer/getFollowHistory";
import { getAstrologerData, RequestAstrologerDetail } from "@/app/redux/reducer/astrologer/AstrologerDetail";
import Link from "next/link";
import { fetchAstrologers } from "@/app/redux/reducer/astrologer/astrlogerSlice";
import CustomButton from "@/components/Custom/CustomButton";
import GiftPop from "@/components/Smcompo/GiftPop";
import { useLanguage } from "@/app/context/LangContext";



export default function ProfileAstro({ serverData, serverreviewdata }) {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { messages: t } = useLanguage();


  const astrologerdetail = serverData?.profile;





  const [showGiftPopup, setShowGiftPopup] = useState(false);

  const [astrofollow, setAstroFollow] = useState("");
  const [hide, setHide] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const { loading } = useSelector((state) => state.followastrologer);
  const { resposeData } = useSelector((state) => state.getfollowhistory);
  const { astrologerloading, astrologerdata: astro } = useSelector(
    (state) => state.astrologerdetail
  );
  useEffect(() => {
    if (id) {
      dispatch(getHistoryRequest({ astro_id: parseInt(id) }));
    }
  }, [dispatch, id]);


  useEffect(() => {



  }, [serverreviewdata])



  useEffect(() => {
    if (typeof astrologerdetail && Object.keys(astrologerdetail).length > 0) {
      dispatch(getAstrologerData(astrologerdetail));
      return;
    }

    if (!astro || astro.length === 0) {
      dispatch(RequestAstrologerDetail({ astro_id: parseInt(id) }));
    }




  }, [dispatch, id, astrologerdetail, astro]);



  useEffect(() => {
    if (resposeData?.follow_status !== undefined) {
      setAstroFollow(resposeData.follow_status);
    }
  }, [resposeData]);
  const follow = () => {
    dispatch(
      fetchUsersRequest({
        astro_id: parseInt(id),
        follow_status: 1,
      })
    );
    setAstroFollow(1);
    setHide(false);
    toast.success(
      `We will notify you when ${astro.full_name} goes live, comes online, or runs an offer!`
    );
  };


  const { data = [] } = useSelector((state) => state.astrologerReducer);


  useEffect(() => {
    if (!data?.sortedAstrologers || data.sortedAstrologers.length === 0) {
      dispatch(fetchAstrologers({ page: 1, limit: 6 }));
    }
  }, [dispatch, data.sortedAstrologers, data]);






  const astrologersData = useMemo(() => {
    if (Array.isArray(data?.sortedAstrologers)) {
      return data.sortedAstrologers;
    }
  }, [data])


  const astrologerlist = useMemo(() => {
    const list = astrologersData?.filter((item) => item.availability === 1);
    return list;
  }, [astrologersData])

  const useunfollow = () => setShowConfirmModal(true);

  const unfollow = (confirm) => {
    if (confirm) {
      dispatch(
        fetchUsersRequest({
          astro_id: parseInt(id),
          follow_status: 0,
        })
      );
      setAstroFollow(0);
      setHide(false);
      toast.success("Astrologer unfollowed successfully!");
      setShowConfirmModal(false);
    }
  };

  if (!astro)
    return (
      <div className="text-center text-gray-600 mt-10">
        Loading astrologer details...
      </div>
    );


  const profileData = astro;

  return (
    <div className="w-full p-3 pt-5 md:pt-5">
      <div className="max-w-7xl p-3 mx-auto rounded-lg shadow-md  md:p-6">
        <div className="flex items-start relative overflow-hidden justify-evenly bg-linear-to-r from-yellow-100 p-3 rounded-2xl md:p-6 via-yellow-50 to-yellow-100 flex-col gap-5 sm:flex-row md:gap-10">



          {
            !astrologerdetail?.astro_tag ?
              <></>
              :

              <div className="celeb-tag absolute -rotate-45 top-4 left-[-35px] z-20">
                <span className="bg-[#ffd70a] p-1 text-[9px] text-black w-30 inline-block text-center  px-8">
                  {astrologerdetail?.astro_tag}
                </span>
              </div>
          }



          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={`/ds-img/${astrologerdetail?.profile_image}`}
              alt={`Profile of ${astrologerdetail?.full_name}`}
              width={100}
              height={100}
              className="border-4 border-yellow-400 rounded-full w-35 h-35 object-cover"
            />

            {astrofollow === 1 ? (

              <CustomButton variant="yellow" onClick={useunfollow} aria-label="Unfollow Astrologer"
                className="px-4 py-2 mt-1 text-sm text-black bg-yellow-400 rounded-full shadow w-fit">
                <h5 className="text-white ">Following</h5>
              </CustomButton>

            ) : (


              <CustomButton variant="yellow" onClick={follow} aria-label="Follow Astrologer"
                className="px-4 py-2 mt-1 text-sm text-black bg-yellow-400 rounded-full shadow w-fit">
                <h5 className="text-white">Follow</h5>
              </CustomButton>
            )}

            <button
              onClick={() => setShowGiftPopup(true)}
              className="relative shine-text mt-7 px-5 py-2 rounded-full text-white font-medium
             bg-linear-to-r from-pink-500 to-red-500 shadow-[4px_4px_8px_rgba(0,0,0,0.2)]
             overflow-hidden transition-transform duration-300 hover:scale-105" aria-label="Send Gift to Astrologer">
              🎁 Send Gift

            </button>


          </div>

          <div className="flex flex-col gap-5 sm:flex-row md:items-start sm:gap-5 lg:gap-20">
            <div className="flex flex-col gap-2 py-2 text-sm md:text-base">
              <h2 className="flex items-center gap-1 text-xl text-gray-800 sm:text-xl sm:font-bold lg:text-3xl lg:font-semibold">
                {astro?.full_name}
                <BiSolidBadgeCheck className="w-5 h-5 text-green-500" />
              </h2>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                <span className="text-base font-semibold text-green-600">
                  Available
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-semibold text-black">
                  {astrologerdetail?.rating}/5
                </span>
                <StarRating
                  className="text-yellow-500"
                  onRate={(val) => console.log("Rated:", val)}
                />
              </div>

              <span className="text-sm font-semibold text-black">
                {astrologerdetail?.id}+ Satisfied Consultations
              </span>


              <div className="flex flex-col mt-0 text-sm text-gray-700 sm:gap-1 lg:gap-1">
                <span className="font-semibold">Call/Chat Charges:</span>
                <span className="font-bold charge-price flex items-center gap-2">
                  {astro?.disc_chat_charge ? (
                    <>
                      <span className="text-lg text-red-600 font-extrabold">
                        ₹{astro.disc_chat_charge}
                      </span>
                      <span className="line-through text-gray-500 text-sm">
                        ₹{astro.astro_chat_charges}/min
                      </span>
                    </>
                  ) : (
                    <span className="text-lg">
                      ₹{astro.astro_chat_charges}/min
                    </span>
                  )}
                </span>
              </div>
            </div>

            <div className="sm:w-60 lg:w-120 w-full flex flex-col text-black">
              <div className="space-y-2 text-sm sm:text-sm lg:text-base">
                <div className="grid grid-cols-2 gap-5">
                  <span className="font-semibold">Experience</span>
                  <span>{astrologerdetail?.experience} Years</span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <span className="font-semibold">Language</span>
                  <span>{astrologerdetail?.languages}</span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <span className="font-semibold">Skills</span>
                  <span>{astrologerdetail?.specialisation}</span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <span className="font-semibold">Expertise</span>
                  <span>
                    Career, Finance, Addiction, Anxiety, Child Birth, Family
                    Conflicts, Family Problems
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-5 mt-6 text-sm sm:flex-col lg:flex-row md:text-base">
                <SingleButton
                  astro_charge_chat={astrologerdetail?.astro_call_charges}
                  astro_charge_call={astrologerdetail?.astro_chat_charges}
                  disprice_chat={astrologerdetail?.disc_chat_charge}
                  disprice_call={astrologerdetail?.disc_chat_charge}
                  availability={astrologerdetail?.availability}
                  astro_id={id}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="p-4 mt-4 border   shadow bg-linear-to-r from-purple-50  rounded-2xl md:p-6 via-violet-50 to-yellow-50">
            <h3 className="mb-1 text-lg font-bold text-gray-800">About Me</h3>
            <p className="text-sm text-gray-700">
              {astro?.about_me_en || "No description available."}
            </p>
          </div>

          <div className="astro-rate flex flex-col md:flex-row gap-8 py-6 rounded-2xl">
            <div className="as-tate-simi shadow-xl rounded-2xl p-4 flex-1 bg-linear-to-r from-purple-50  md:p-6 via-violet-50 to-yellow-50">
              <div className="flex flex-col items-center justify-center text-center">
                <h5 className="text-lg font-semibold mb-4 text-gray-800">
                  Check Similar Consultants
                </h5>

                <div className="flex flex-wrap justify-center gap-4">
                  {astrologerlist.length > 0 ? (
                    astrologerlist.map((astro, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-around gap-3 bg-[#ffffffe7] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 p-3 w-[220px]"
                      >

                        <Image
                          src={`/ds-img/${astro?.profile_image}`}
                          alt={astro?.full_name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                          onClick={() =>
                            router.push(
                              `/astrologerprofile/${astro?.id}`
                            )
                          }
                        />


                        <div className="flex flex-col items-start">
                          <Link href={`/astrologerprofile/${astro?.id}`}>
                            <h5 className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                              {astro?.full_name || "Unknown"}
                            </h5>
                          </Link>
                          <Link href={`/astrologerprofile/${astro?.id}`}>
                            <span className="text-sm text-gray-500">
                              ₹{astro.disc_chat_charge ?? 0}/min
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No similar consultants found.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col shadow-xl rounded-2xl p-4 items-center flex-1 bg-linear-to-r from-yellow-50  md:p-6 via-violet-50 to-purple-100">
              <h5 className="text-lg font-semibold  text-gray-800 text-center mb-4">
                Ratings & Reviews
              </h5>

              {serverreviewdata?.length > 0 ? (
                <>
                  <div className="w-full max-w-xl space-y-5">
                    {serverreviewdata
                      .slice(0, showAll ? serverreviewdata.length : 3)
                      .map((review, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-semibold text-gray-700">
                              {review?.user_name?.split(" ")[0]}
                            </h5>
                            <div className="text-right">
                              <p className="text-xs text-gray-400">
                                {new Date(review.created_at).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </p>
                              <div>
                                {[...Array(review?.star)].map((_, i) => (
                                  <span
                                    key={i}
                                    style={{ color: i < review.star ? 'gold' : 'lightgray', fontSize: '18px' }}
                                  >
                                    ★
                                  </span>
                                ))}
                              </div>


                            </div>
                          </div>

                          <hr className="border-gray-200 mb-3" />

                          <div className="text-sm italic text-gray-600 mb-2">
                            {review?.comment}
                          </div>

                          {review?.reply_to && (
                            <div className="bg-gray-50 p-3 rounded-md text-sm text-black border-l-4 border-blue-400">
                              <strong className="text-gray-700">
                                {review?.astro_name || "Astrologer"}:
                              </strong>{" "}
                              <i >{review?.reply_to}</i>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>

                  {!showAll && serverreviewdata?.length > 2 && (
                    <div className="mt-5">
                      <button aria-label="View More Reviews"
                        onClick={() => setShowAll(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm transition-all"
                      >
                        View More
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-gray-500">No reviews yet</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm text-center text-black">
              Are you sure you want to unfollow {astro?.full_name}?
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button aria-label="Confirm Unfollow"
                className="px-4 py-2 text-white bg-green-500 rounded-md"
                onClick={() => unfollow(true)}
              >
                Yes
              </button>
              <button aria-label="Cancel Unfollow"
                className="px-4 py-2 text-white bg-red-500 rounded-md"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <GiftPop open={showGiftPopup} astrologername={astro?.full_name} astro_id={astro?.id} onClose={() => setShowGiftPopup(false)} />

      <AlertLoading show={loading} title="Please Wait.." />
      <AlertLoading show={astrologerloading} title="Please Wait" />
    </div>
  );
}
