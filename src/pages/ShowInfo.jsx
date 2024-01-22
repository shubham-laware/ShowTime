import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import InfoCard from "../components/InfoCard";
import Form from "../components/Form";

function ShowInfo() {
  const location = useLocation();
  const data = location.state && location.state.showData;
  const premiered=data.show.premiered || 'no data available';
  const ratings=data.show.rating.average || 'no rating available';
  const language=data.show.language || 'no data available';
  const [booking,setBooking]=useState(false)
  const movie=data.show.name;
  const [userName,setUserName]=useState('');
  const [phone,setPhone]=useState('')

  const[ticketQuantity,setTicketQuantity]=useState(1);
    const [total,setTotal]=useState(459)
    const handleTicketQty=(e)=>{
        setTicketQuantity(e.target.value)
        
    }
    useEffect(()=>{
        console.log(ticketQuantity)
        setTotal(ticketQuantity * 459)
    },[ticketQuantity])

  const bookNowBtn=(e)=>{
    e.preventDefault()
    setBooking(true)
  }

  const handleDone=(e)=>{
    e.preventDefault()
    
    if(!userName || !phone){
        alert('Username and Phone required !')
        return 
    }
    localStorage.setItem('userInfo',JSON.stringify({movieName:movie,user:userName,userPhone:phone,qty:ticketQuantity,totalAmount:total}))
    setBooking(false)
    setUserName('');
    setPhone('')
    setTicketQuantity(1);
    setTotal(459)
    alert('Booking Successful')
  }
  const handleCancel=(e)=>{
    e.preventDefault();
    setBooking(false)
    setUserName('');
    setPhone('')
    setTicketQuantity(1);
    setTotal(459)   
    setBooking(false)
  }

  return (
    <div>
      <Navbar />
      <div className=" md:max-h-[100vh]  md:flex mt-24 md:px-20 gap-12 my-4">
        <div className="flex justify-center mb-6">
        <InfoCard showData={data} />
        </div >
        <div className="mx-4 flex flex-col gap-4">
        <div dangerouslySetInnerHTML={{ __html: data.show.summary }} className=" text-justify"/>
        <div className="text-sm">Language: {language}</div>
        <div className="text-sm">Premiered: {premiered}</div>
        <div className="text-sm">Ratings: {ratings}⭐</div>
        <button className=" border border-solid border-gray-400 bg-gray-300 hover:bg-gray-200 w-[100px] h-[40px]" onClick={bookNowBtn} type="submit">Book Now</button>
        </div>
        {
        booking && (
            <form  className="bg-white mt-4 flex max-h-[300px] justify-center" >
            <div className='flex flex-col gap-4 border border-solid border-black min-h-[200px] w-[250px] items-center py-4 rounded-md '>
                <div className="w-[200px] text-center font-bold text-lg">
                   Show:  {movie}
                </div>
            
                <input type="text" placeholder='Name' className='w-[200px] border border-solid border-gray-400' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            
                <input type="tel"  placeholder='Phone' className='w-[200px] border border-solid border-gray-400' value={phone}  onChange={(e)=>setPhone(e.target.value)}/>

                <div className="flex w-[200px] justify-between">
                    <p>Qty: </p>
                <input type="number" value={ticketQuantity} onChange={handleTicketQty} min={1} className='w-[100px] border border-solid border-gray-400' />

                </div>
            <div>
                Total: <span>{total}</span>
            </div>
            <div className='flex gap-2'>
            <button className='border border-solid border-gray-400 w-[95px]' type="submit" onClick={handleDone}>Done</button>
            <button className='border border-solid border-gray-400 w-[95px]' type="submit" onClick={handleCancel}>Cancel</button>
            </div>
    
            </div>
        </form>
        )
      }
      </div>
    </div>
  );
}

export default ShowInfo;
