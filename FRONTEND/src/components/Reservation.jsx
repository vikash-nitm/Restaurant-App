import React from "react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import axios from "axios"
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation=()=>{
    const[firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const[phone,setPhone]=useState("");

const navigate=useNavigate();

   const handleReservation= async(e)=>{
    e.preventDefault();
    try{
        const {data}=await axios.post("http://localhost:4000/api/v1/reservation/send",
        {firstName,lastName,email,phone,date,time},
       {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
       }

        );
        //backend mai se jo message aayega wo render ho jyega.
         toast.success(data.message);
         //uske baad sbko empty krdiya
         setFirstName("");
         setLastName("");
         setPhone("");
         setEmail("");
         setTime("");
         setDate("");
         //ye chte hai ki ak page pe aajye ki aapka form submit hogya hai or sari chis empty ho gai ye sb
         //ak pge pe navigate kre jo hmre sucess ka page hoga.
         //jo create kiye hai jo us pge pe bhej dega
         navigate("/success");

    }
    ///jb user naam ya kuch nhi diya toya valid email na ho  usko dikhne ke liye 
    // catch(error){
    //   toast.error(error);
    // }

    catch (error) {
        // If backend sends error message
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          // Fallback to generic Axios error message
          toast.error(error.message);
        }
      }
      

   }

    //ab ya frontend start kr diye likhna
    return<section className="reservation" id="reservation">
     <div className="container">
        <div className="banner">
            <img src="/reservation.png" alt="res"/>
        </div>
        <div className="banner">
            <div className="reservation_form_box">
                <h1>MAKE A RESERVATION</h1>
                <p>for Further Question,please CAll</p>
                <form>
                    <div>
                        <input 
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}/>

                        <input 
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}/>
            

                    </div>


<div>
<input type="date" placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
<input type="time" placeholder="Time" value={time} onChange={(e)=>setTime(e.target.value)}/>

</div>

<div>
    <input type="email" placeholder="Email" className="email_tag" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="number" placeholder="Phone"  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    
</div>

<button type="submit" onClick={handleReservation}>
   RESERVE NOW{" "}
   <span>
    <HiOutlineArrowNarrowRight/>
   </span>


     </button>


                </form>
            </div>
        </div>
     </div>
    </section>
}
export default Reservation;