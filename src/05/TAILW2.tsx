import { BiCommentDetail } from "react-icons/bi";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoIosHeartEmpty, IoIosSend, IoMdHeart } from "react-icons/io";
import { LuSendHorizontal } from "react-icons/lu";

export default function TAILW2 () {
    return(
        <div className="bg-blue-100 w-screen h-screen flex items-center place-content-center">
        <div className="bg-white rounded shadow w-44 h-72 flex flex-col">
            <div className="h-8"></div>
            <div className="bg-yellow-100 flex-1"></div>
            <div className="h-8 flex item-center px-2">
                <div className="flex w-1/2 space-x-2">
                <IoIosHeartEmpty /> 
                <IoMdHeart />
                <IoIosSend />
                </div>
                <div className="flex place-contet-end w-1/2">
                <CiBookmarkCheck />
                </div>
            </div>
        </div>
        </div>
    )
}