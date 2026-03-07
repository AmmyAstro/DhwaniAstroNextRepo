"use client";
import CustomInput from '@/components/Custom/CustomInput';
import CustomButton from '@/components/Custom/CustomButton';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { setBookingInput } from '@/app/redux/reducer/Booking/BookingReducer';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { validateEmail, validatePhone } from '@/app/helper/validation';
import { encryptData } from '@/app/helper/cryptoHelper';






export default function Forminp({ formDat, setformDat, onClose, pagedata, page_name }) {
    const router = useRouter();
    const pathname = usePathname();



    const pageContent = pagedata || null;



    const dispatch = useDispatch();


    const { loading, statusCode, response } = useSelector((state) => state.bookingserver);

    //   console.log("xsaxas",statusCode);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformDat((prev) => ({ ...prev, [name]: value }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();




        if (
            formDat['name'] === '' ||
            formDat['dob'] === '' ||
            formDat['tob'] === ''
        ) {
            toast.error('Please fill out Name, Date of Birth, and Time of Birth.');
        } else if (!validatePhone(formDat['num'])) {
            toast.error('Please enter a valid phone number.');
        } else if (!validateEmail(formDat['mail'])) {

            toast.error('Please enter a valid email address.');
        } else {
            dispatch(setBookingInput({
                name: formDat['name'],
                dob: formDat['dob'],
                tob: formDat['tob'],
                mail: formDat['mail'],
                number: formDat['num'],
                gender: formDat['gender'],
                txt: formDat['txt'],
                bookingid: 0,
                service_name: page_name,
                service_price: parseInt(pageContent?.secondSection?.startprice),
            }));

        }


    };
    useEffect(() => {
        if (statusCode === 200) {
            const amount = encryptData(pageContent?.secondSection?.startprice);
            const orderId = encryptData(response?.Resp?.id);



            router.push(
                `/inHealing/${page_name}/paynow?amount=${amount}&orderId=${orderId}`
            );
        }
    }, [statusCode]);

    return (
        <div className={`flex flex-col w-full border border-gray-100 bg-white max-w-5xl shadow-lg rounded-2xl px-4 py-5
        ${pathname.startsWith("/inHealing") ? "mt-0 " : "mt-30"} `}>

            <div className="flex items-center justify-between ">
                <h5 className="text-xl place-self-center  font-semibold text-black justify-center text-center py-2">Basic Details :</h5>
                <div className="flex ">
                    <button aria-label="Close Form" type="button" onClick={onClose}>
                        <svg fill="#000000" width={25} height={25} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.48 3.512c-2.172-2.171-5.172-3.514-8.486-3.514-6.628 0-12.001 5.373-12.001 12.001 0 3.314 1.344 6.315 3.516 8.487 2.172 2.171 5.172 3.514 8.486 3.514 6.628 0 12.001-5.373 12.001-12.001 0-3.314-1.344-6.315-3.516-8.487zm-1.542 15.427c-1.777 1.777-4.232 2.876-6.943 2.876-5.423 0-9.819-4.396-9.819-9.819 0-2.711 1.099-5.166 2.876-6.943 1.777-1.777 4.231-2.876 6.942-2.876 5.422 0 9.818 4.396 9.818 9.818 0 2.711-1.099 5.166-2.876 6.942z" /><path d="m13.537 12 3.855-3.855c.178-.194.287-.453.287-.737 0-.603-.489-1.091-1.091-1.091-.285 0-.544.109-.738.287l.001-.001-3.855 3.855-3.855-3.855c-.193-.178-.453-.287-.737-.287-.603 0-1.091.489-1.091 1.091 0 .285.109.544.287.738l-.001-.001 3.855 3.855-3.855 3.855c-.218.2-.354.486-.354.804 0 .603.489 1.091 1.091 1.091.318 0 .604-.136.804-.353l.001-.001 3.855-3.855 3.855 3.855c.2.218.486.354.804.354.603 0 1.091-.489 1.091-1.091 0-.318-.136-.604-.353-.804l-.001-.001z" /></svg>
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">

                <div className='space-y-2 grid md:grid-cols-2 place-content-center px-5 gap-5'>
                    <div className="flex flex-col items-start justify-between">
                        <CustomInput
                            name="name"
                            label="Your Name"
                            type="text"
                            placeholder="Write your good name"
                            value={formDat.name}
                            onChange={handleChange}
                            bgredcolor="white"

                            className="w-[100%] md:w-[80%] "
                        />
                    </div>

                    <div className="flex flex-col items-start justify-between">

                        <CustomInput
                            name="dob"
                            label="  Date of Birth"
                            type="date"
                            value={formDat.dob}
                            onChange={handleChange}
                            bgredcolor="white"
                            required
                            className="w-[100%] md:w-[80%] "
                        />
                    </div>

                    <div className="flex flex-col items-start justify-between">

                        <CustomInput
                            name="tob"
                            label="Time of Birth"
                            type="time"
                            value={formDat.tob}
                            onChange={handleChange}
                            bgredcolor="white"
                            required
                            className="w-[100%] md:w-[80%] "
                        />
                    </div>

                    <div className="flex flex-col items-start ">

                        <CustomInput
                            name="pob"
                            label=" Place of Birth"
                            type="text"
                            value={formDat.pob}
                            onChange={handleChange}
                            bgredcolor="white"
                            required
                            className="w-[100%] md:w-[80%] "
                            placeholder="Write City/Town, State, Country of Birth"
                        />
                    </div>

                    <div className="flex flex-col  items-start ">
                        <CustomInput
                            name="mail"
                            label=" Email Address"
                            type="email"
                            value={formDat.mail}
                            onChange={handleChange}
                            bgredcolor="white"
                            required
                            className="w-[100%] md:w-[80%] "
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700  text-sm md:text-sm mb-1">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2">
                            <select className="border border-gray-600 h-auto  rounded-l-md p-1 text-base bg-white w-15 mb-1">
                                <option value="+91">IN</option>
                            </select>
                            <CustomInput
                                name="num"
                                type="tel"
                                value={formDat.num}
                                pattern="[0-9]{10}"
                                onChange={handleChange}
                                bgredcolor="white"
                                required
                                className="w-[100%] md:w-[80%] rounded-l-md "
                                placeholder="123456789"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 text-sm md:text-sm">
                        <label className="block text-gray-700 font-semibold text-sm md:text-sm mb-1">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <div className="flex text-black flex-col gap-2">
                            {["Male", "Female", "Others"].map((gender) => (
                                <label key={gender} className="flex items-center gap-2">
                                    <input
                                        name="gender"
                                        value={formDat.gender}
                                        onChange={(e) =>
                                            setformDat({ ...formDat, gender: e.target.value })
                                        }
                                        type="radio"
                                        className="border  border-gray-300 form-checkbox  rounded"
                                        required
                                    />

                                    {gender}
                                </label>
                            ))}
                        </div>
                    </div>


                    <div className="flex flex-col text-sm md:text-sm">
                        <label className="block text-gray-700 font-semibold text-sm md:text-sm mb-1">
                            Your Detailed Concern{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={formDat.txt}
                            onChange={(e) =>
                                setformDat({ ...formDat, txt: e.target.value })
                            }
                            rows="4"
                            className=" placeholder:text-sm border border-gray-300 text-black  rounded-md p-1"
                            placeholder="Enter your text here....."
                        ></textarea>
                    </div>
                </div>

                <CustomButton aria-label="Continue to Next Step"
                    variant={"gcircle"}
                    type="submit"
                    className="mt-5 duration-300 place-self-center w-[30%]"
                >
                    Continue
                </CustomButton>
            </form>
        </div>
    );
}
