import { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosSend, IoMdHeart } from "react-icons/io";
import { LuSend, LuSendHorizontal } from "react-icons/lu";

export default function TAILW2 () {
    const [liked, setLiked] = useState(false);
    return(
        <div className="bg-blue-100 w-screen h-screen flex items-center place-content-center">
        <div className="bg-white rounded shadow w-44 h-72 flex flex-col">
            <div className="h-8"></div>
            <div className="bg-yellow-100 flex-1"></div>
            <div className="h-8 flex item-center px-2">
                <div className="flex w-1/2 space-x-2">
                { liked ?
                <button className="cursor-pointer" onClick={()=> setLiked(false)}>
                     <IoIosHeartEmpty className="text-red-500" />  
                </button>
                :
                <button className="cursor-pointer" onClick={()=> setLiked(true)}>
                    <IoMdHeart className="text-red-500"/>
                </button>
                }
                <IoIosSend className="relative transform translate-y-2"/>
                <LuSend className="relative transform translate-y-2" />
                </div>
                <div className="flex place-content-end w-1/2">
                <CiBookmarkCheck className="relative transform translate-y-2" />
                </div>
            </div>
        </div>
        </div>
    )
}