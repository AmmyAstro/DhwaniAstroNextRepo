"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangContext";
export default function PrivacyP() {
const {messages:t} = useLanguage();
    return (
        <div className="w-full flex flex-col items-center">
            <section className="horo-icons-zod relative w-full mx-auto py-5 mt-1.5 h-36 sm:py-5 px-4 rounded-b-xl  overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-3/3 h-full bg-cover  bg-center"
                        style={{ backgroundImage: "url('/ds-img/mnew.jpg')" }}
                    ></div>
                </div>

                <div className="relative service-horocope flex flex-col justify-center">
                    <div className=" flex flex-col  justify-center  bg-[#000000c0] px-15 py-5 w-[50%] place-self-center rounded-xl">
                        <span className="text-2xl text-white font-bold place-self-center">{t?.fopages?.p1 || "Privacy Policy"}</span>
                                               <h1 dangerouslySetInnerHTML={{__html: t?.fopages?.f2 || "Unlock Your Destiny With Dhwani Astro"}} className="text-[#efd335] text-base sm:text-xl  text-center font-semibold"/>

                    </div>
                </div>

            </section>

            <div className="max-w-7xl place-self-center text-black py-5">
                <div className="flex flex-col gap-5">
                    <div className="abp">
                        <p className="text-base text-start">{t?.fopages?.p3 || "www. dhwaniastro.com (“we”, “Dhwani Astro LLP)”, “Dhwani Astro” (web and application) hereinafter referred to as (“website”) is a website."}
                            <br />
                            {t?.fopages?.p4 || "The provisions of this policy are as per the provisions contained in the Information Technology (Intermediaries Guidelines) Rules 2011 and Information Technology (Reasonable Security Practices "}
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto p-4 md:p-4">
                        <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-xl flex flex-col  items-center gap-6 p-4 md:p-6 neumorphism-card">

                            <div className="text-center md:text-left text-gray-800">

                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p5 || "USER’S CONSENT"}</h3>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">
                                    {t?.fopages?.p6 || "This Privacy Policy, which may be modified/updated sometimes as well, covers the particulars, name, and birth details provided by its  "} <br />
                                   {t?.fopages?.p7 || "Further navigation on this website shall indicate that you have read and agreed to the terms of this privacy policy "}
                                    <br /> {t?.fopages?.p8 || "They should be read in conjunction with the relevant terms and conditions set out on the Website which include the relevant Terms of Use."}
                                </p>
                            </div>

                            <div className="text-center md:text-left text-gray-800">

                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p9 ||"Collection of Personal Information"}</h3>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p10 || "Becoming a Dhwani Astro member requires a user to provide some specific details in the signup process. The field can only be made "} </p>
                            </div>

                            <div className="text-center md:text-left text-gray-800">

                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p11 || "PURPOSE AND USE OF DATA/INFORMATION COLLECTION"}</h3>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p12 || "Thus, Dhwani Astro’s objectives incorporate the desire to provide its users with relevant information based on "} </p>
                            </div>

                            <div className="text-center md:text-left text-gray-800">

                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p13 || "Data Deletion"}</h3>
                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p14 }} className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700"/>
                                                                </div>
                            <div className="text-center md:text-left text-gray-800">

                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p15 || "Voice Recording and Microphone Permission"}</h3>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p16 || "In our app, there is an extraordinary opportunity for you to send messages as voice messages in the chat that is following you if you want to ask a question "} <br />
                                    {t?.fopages?.p17 || "To be able to help you record your questions and ideas as audio, we were to ask for access to your device’s microphone. By granting this permission, you enable our application to record your voice as audio and then turn the audio into the data which we shall make use of."} </p>
                            </div>

                            <div className="text-center md:text-left text-gray-800">

                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p18 || "COMMITMENT"}</h3>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p19 || "The Website aims to shield the informational identity of all sorts of individuals, who may be accessing their account or information on the Website, whether as a member or a  information for certain predictions only but it will be ensured that no direct or indirect use of"}. <br />
                                    {t?.fopages?.p20 || "The Website does not undertake to provide help or treatment to users who have a mild form of mental "} <br />
                                    {t?.fopages?.p21 || "That entails that the Website bears no responsibility in any way for the accuracy of the"}. </p>
                            </div>

                            <div className="text-center md:text-left text-gray-800">

                                <h2 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p22 || "INFORMATION COLLECTED BY THE WEBSITE"}</h2>
                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p23 || "PERSONAL IDENTIFIABLE INFORMATION"}</h3>
                                <span className="italic text-sm">{t?.fopages?.p24 || "Specifically, information can be considered personal if, through the specifics of the data collected"}</span>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p25 }<br />
                                   {t?.fopages?.p26 || "About and for the protection of the User profile and effectively "} </p>
                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p27}} className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700"/>
                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p28}} className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700"/>
                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p29}} className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700"/>

                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p30 || "This also includes but is not limited to feedback from the User which can be stated/commented"}</p>
                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p31}} className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700"/>
                                                                </div>


                            <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto text-gray-800">
                                <h2 className="text-lg font-bold underline mb-3">
                                   {t?.fopages?.p32 || "NON - PERSONAL IDENTIFIABLE INFORMATION"}
                                </h2>
                                <p className="text-sm sm:text-sm leading-relaxed mb-4">
                                    {t?.fopages?.p33 || "Non-personal information is information collected where the gathered information does not identify the customer as an end user. Such information is collected when the user visits the Website, cookies, etc., and would include but not limited to the following:"}
                                </p>

                                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-sm">
                                    <li>
                                        {t?.fopages?.p34 || "The previous URL of the site being accessed by the User before he /she logged into this site or the next URL www site being accessed by the User after he/she logged into this site."}
                                    </li>
                                    <li>
                                       {t?.fopages?.p35 || "The internet service provider / IP Address / Telecom service provider."}
                                    </li>
                                    <li>
                                        {t?.fopages?.p36 || "This includes the type of Browser used in accessing the website."}
                                    </li>
                                    <li>
                                       {t?.fopages?.p37 || "Geographical Location"}
                                    </li>
                                </ol>
                            </div>

 
                            <div className="text-center md:text-left text-gray-800">

                                {/* <h3 className="font-semibold text-lg text-gray-700 italic mt-1">COMMITMENT</h3> */}
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p38 || "Non-personal Identifiable Information: These details are also collected by the Website for the following purposes, among others: "} </p>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p39 || "Such data is used for a better understanding of the site content and performance and "}</p>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p40 || "Thus, acknowledging and confirming that the information given to the Website is accurate, recent, and valid,"}</p>

                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p41}} className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700"/>
                            </div>


                            <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto text-gray-800">

                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p42}} className="text-sm sm:text-sm leading-relaxed mb-4">
                                    
                                </p>

                                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-sm">
                                    <li>
                                        {t?.fopages?.p43}
                                    </li>
                                    <li>
                                       {t?.fopages?.p44}
                                    </li>
                                    <li>
                                       {t?.fopages?.p45}
                                    </li>
                                    <li> {t?.fopages?.p46}
                                        </li>
                                    <li>{t?.fopages?.p47}</li>
                                    <li>{t?.fopages?.p48}</li>
                                </ol>
                            </div>

                            <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto text-gray-800">

                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p49}} className="text-sm sm:text-sm leading-relaxed mb-4">
                                   
                                </p>

                                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-sm">
                                    <li>{t?.fopages?.p50}</li>
                                    <li>{t?.fopages?.p51}</li>
                                    <li>{t?.fopages?.p52}</li>

                                </ol>

                                <p className="text-sm sm:text-sm leading-relaxed mb-4">
                                    {t?.fopages?.p53}
                                </p>
                                <p className="text-sm sm:text-sm leading-relaxed mb-4">{t?.fopages?.p54}</p>
                            </div>

                            <div className="text-center md:text-left text-gray-800">

                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p55 || "DISCLAIMER"}</h3>
                                <p dangerouslySetInnerHTML={{__html:t?.fopages?.p56}} className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700"/>
                                <h3 className="font-semibold text-lg text-gray-700 italic mt-1">{t?.fopages?.p57}</h3>
                                <p className="mt-2 text-sm md:text-sm leading-relaxed text-gray-700">{t?.fopages?.p58 || "If you have any queries, you can contact us at:"}</p>
                                <div><span className="font-semibold">Email:</span> <a href="#"> support@dhwaniastro.com</a></div>
                                <div><span className="font-semibold">Contact No.:</span> <a href="#"> 6366526901</a></div>


                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}  