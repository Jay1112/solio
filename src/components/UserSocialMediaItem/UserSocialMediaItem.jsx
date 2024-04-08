import { MdOutlineDragIndicator } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function UserSocialMediaItem({
    data
}){
    console.log(data);
    return (
        <div className="my-2 border-2 rounded-sm border-gray-300 flex items-center justify-center flex-col md:flex-row p-2">
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
    );
}

export default UserSocialMediaItem;