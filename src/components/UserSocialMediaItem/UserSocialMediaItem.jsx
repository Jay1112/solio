import { MdOutlineDragIndicator } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";

function UserSocialMediaItem({
    data
}){
    return (
        <>
            <div className="hidden md:flex my-2 border-2 rounded-sm border-gray-300 items-center justify-center flex-col md:flex-row p-2">
                <p className="px-2 text-2xl"><MdOutlineDragIndicator/></p>
                <p className="roboto px-6 w-[150px]">{data.platform}</p>
                <p className="p-2 flex-1 poppins">{data.link}</p>
                <div className="flex items-center justify-center">
                    <button className="mx-2 text-lg p-2 dark-button-style">
                        <MdEdit/>
                    </button>
                    <button className="mx-2 text-lg p-2 dark-button-style">
                        <MdDelete/>
                    </button>
                </div>
            </div>
            <div className="flex md:hidden my-4 border-2 rounded-sm border-gray-300 items-center justify-center md:flex-row p-2 overflow-x-auto">
                <p className="p-2 text-2xl"><MdOutlineDragIndicator/></p>
                <p className="p-2 text-xl text-gray-400 bg-gray-100"><MdOutlineContentCopy/></p>
                <p className="roboto text-lg mx-4 flex-1">{data.platform}</p>
                <button className="text-lg p-2 dark-button-style rounded-sm">
                    <MdEdit/>
                </button>
                <button className="ml-2 text-lg p-2 dark-button-style rounded-sm">
                    <MdDelete/>
                </button>
            </div>
        </>
    );
}

export default UserSocialMediaItem;