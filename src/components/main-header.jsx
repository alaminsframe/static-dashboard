
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const MainHeader = () => {
    const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className="">
            <div className="bg-white drop-shadow-lg py-5 flex justify-end items-center px-16 gap-12">
                <button className="relative">
                    <div className="">
                        <FaRegBell size={20} color="gray" />
                    </div>
                    <span className="absolute -top-1 -right-1 bg-[#8B5CF6] rounded-full h-4 w-4 text-[10px] text-white flex justify-center items-center">3</span>
                </button>
                <div className="relative">
                    <button onClick={() => setIsOpen(!IsOpen)} className="flex items-center gap-1.5 font-poppins font-medium text-sm">
                        Admin
                        <MdOutlineKeyboardArrowDown size={17} className="fill-gray-500"/>
                    </button>

                   
                    {IsOpen && (
                         <ul className="absolute top-8 bg-white text-sm font-sans px-2.5 pt-2 shadow-lg w-24 divide-y rounded">
                            <li className="py-1"><a href="#">Settings</a></li>
                            <li className="py-1"><a href="#">Profile</a></li>
                            <li className="py-1 text-red-500"><a href="#">Log Out</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default MainHeader
