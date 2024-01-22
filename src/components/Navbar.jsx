import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate=useNavigate()

    const navigateHomePage=(e)=>{
        e.preventDefault()
        navigate('/')
    }
  return (
    <nav onClick={navigateHomePage} >
      <h2 className="w-[100%] text-center text-[30px] border border-solid font-bold  py-2 fixed top-0  bg-gray-300 z-10 cursor-pointer">
        ShowTime
      </h2>
    </nav>
  );
}

export default Navbar;
