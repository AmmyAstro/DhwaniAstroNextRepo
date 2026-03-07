import { API_ENDPOINTS, getAuthHeaders } from "@/app/redux/config/apiConfig";

import axios from "axios";
import ProfileAstro from "./ProfileAstro";



async function getAstrologer(id){
 const response= await fetch(`${API_ENDPOINTS.ASTROLOGER_DETAIL}?astro_id=${id}`,{
      cache: "no-store",
  })
if (!response.ok) 
    throw new Error("Failed to fetch server-side review data");
    return response.json();
}


async function getReview(id) {



  if (!id) throw new Error("astro_id is required");

const response = await fetch(`${API_ENDPOINTS.GET_REVIEW}?astro_id=${id}`, {
    cache: "no-store",

  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to fetch review data");
  }

  const data = await response.json();



  return data?.reviewdata;
}


export default async function Page({params}){


  
  const astroid= params.id;
   let astrologerdata=[]
   let reviewdata=[];

  try {

  astrologerdata=await getAstrologer(astroid);
  reviewdata = await getReview(astroid);




  return <ProfileAstro serverData={astrologerdata} serverreviewdata={reviewdata}/>
 
    
  } catch (error) {

    console.log("ERROR",error?.message);
    
  }

}









