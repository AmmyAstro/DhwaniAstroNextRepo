import { useRouter } from 'next/navigation';
import { Healdata } from './healdata';
import { useEffect, useState } from 'react';
import Imagecom from '@/components/Homepagecomp/Consultations/Concompo/Imagecom';
import Healdetail from './Healdetail';
import toast from 'react-hot-toast';
import CustomButton from '@/components/Custom/CustomButton';
import Forminp from '@/components/Homepagecomp/Consultations/Concompo/Forminp';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingInput } from '@/app/redux/reducer/Booking/BookingReducer';
import { AlertLoading } from '@/app/common';
import { validateEmail, validatePhone } from '@/app/helper/validation';
import { encryptData } from '@/app/helper/cryptoHelper';
import Freereport from '@/components/Smcompo/Freereport';
import Searchtop from '@/components/Smcompo/Searchtop';



const Heal = ({ pageName }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pageContent = Healdata()[pageName] || null;
  const [pkgId, setPkgId] = useState(null);
  const [formInput, setFormInput] = useState(false);
  const [healData, setHealData] = useState(true);

  const { loading, statusCode, response } = useSelector((state) => state.bookingserver );
  const [formDat, setformDat] = useState({
    name: "",
    dob: "",
    tob: "",
    pob: "",
    mail: "",
    num: "",
    gender: "",
    txt: "",
  });
  if (!pageContent) {
    return <div className='text-purple-500 text-2xl' >Page not found</div>;
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleBooking = () => {

    setFormInput(true);
    setHealData(false);

    toast.success('Session selected. Proceeding to booking...');
  };

  const handleForm = () => {
    setFormInput(false);
    setHealData(true);
  }

  const goToPay = () => {
    if (
      formDat['namee'] === '' ||
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
        bookingid: 3,
      }));

    }


  };
  useEffect(() => {
 if (statusCode === 200) {
      const amount = encryptData(pageContent?.secondSection?.startprice);
      const orderId = encryptData(response?.Resp?.id);

      toast.success('Proceeding to payment...');

      router.push(
        `/inHealing/${pageName}/paynow?amount=${amount}&orderId=${orderId}`
      );
    }
  }, [statusCode]);

  return (
    <div className="flex w-full flex-col items-center gap-10 justify-center px-2 sm:px-4  py-5 md:py-5">
      <Searchtop/>

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-7xl w-[85%]  flex flex-col sm:flex-row items-start">
        <div className="md:w-1/2  flex items-center flex-col justify-center p-4">
          <Imagecom data={pageContent.firstSection} />
          {formInput &&
            <div className="name-price w-full flex flex-col bg-purple-200 border items-center justify-center border-purple-300 shadow-lg rounded-full px-5 py-3 mt-8">
              <h1 className="mb-0 text-xl font-bold text-purple-700 sm:text-2xl">{pageContent.secondSection.hnm}</h1>
              <div className="flex items-center mt-0 space-x-2">
                <span className="text-base font-semibold text-purple-600 sm:text-lg">Starting From: ₹ {pageContent.secondSection.startprice}</span>
                <span className="text-sm text-gray-500">(Per Session)</span>
              </div>
            </div>
          }

        </div>

        <div className="md:w-1/2 w-full py-4 px-3  sm:pr-8 flex flex-col justify-between">
          {healData &&
            <Healdetail data={pageContent.secondSection} pkgId={pkgId} setPkgId={setPkgId} />}
          {formInput &&
            <>
              <Forminp formDat={formDat} setformDat={setformDat} onClose={handleForm } pagedata={pageContent} page_name={pageName}/>

           </>
          }
          {healData &&
            <CustomButton aria-label="Book Healing Session" variant={"gcircle"} 
              className="mt-5    duration-300 place-self-center w-[50%]"
              onClick={handleBooking}>
              Book Now
            </CustomButton>
          }
        </div>
      </div>
          <Freereport />
      <AlertLoading show={loading} title="Request Processing..." />
    </div>
  );
};

export default Heal;