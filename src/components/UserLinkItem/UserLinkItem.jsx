import { MdOutlineDragIndicator } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";

function UserLinkItem({
    data
}){
    return (
        <>
            <div className="hidden md:flex border-2 my-4 rounded-sm border-gray-300 items-stretch justify-center flex-col md:flex-row p-2 relative">
               <div className="flex items-center justify-center">
                    <p className="p-2 text-2xl"><MdOutlineDragIndicator/></p>
               </div>
               <div>
                    <div className="w-[100px] h-[100px] bg-gray-200"></div>
                </div>
               <div className="flex-1">
                    <p className="roboto text-xl mx-4 flex-1">{data.title}</p>
                    <p className="roboto text-md mx-4 flex-1">{data.description}</p>
                    <div className=" mx-4 flex items-stretch justify-start my-2">
                        <p className="p-2 text-lg text-gray-700 bg-gray-100 rounded-tl-sm rounded-bl-sm"><MdOutlineContentCopy/></p>
                        <p className="px-2 bg-slate-600 w-full flex-1 text-white flex items-center justify-start rounded-tr-sm rounded-br-sm text-ellipsis">{data.link + data.link + data.link}</p>
                    </div>
               </div>
               <div className="absolute top-2 right-2">
                    <button className="text-lg p-2 dark-button-style rounded-sm">
                        <MdEdit/>
                    </button>
                    <button className="ml-2 text-lg p-2 dark-button-style rounded-sm">
                        <MdDelete/>
                    </button>
               </div>
            </div>
            <div className="flex md:hidden border-2 my-4 rounded-sm border-gray-300 items-center justify-start md:flex-row p-2 overflow-x-auto relative">
                <div className="flex items-center justify-center">
                    <p className="p-2 text-2xl"><MdOutlineDragIndicator/></p>
                </div>
                <div>
                    <div className="w-[100px] h-[100px] bg-gray-200 mb-4"></div>
                    <div className="flex-1">
                        <p className="roboto text-xl flex-1">{data.title + data.title}</p>
                        <p className="roboto text-md flex-1 text-justify">{data.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat rem autem ipsa, inventore culpa accusantium corporis impedit placeat excepturi nulla? Vitae praesentium est ab, accusantium dolorem totam. Culpa, voluptatem vero?</p>
                        <div className="flex items-stretch justify-start my-2">
                            <p className="p-2 text-lg text-gray-700 bg-gray-100 rounded-tl-sm rounded-bl-sm"><MdOutlineContentCopy/></p>
                            <p className="px-2  w-full flex-1 flex items-center justify-start rounded-tr-sm rounded-br-sm text-ellipsis">Copy Link</p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-2 right-2 flex items-center justify-center flex-col">
                        <button className="text-lg p-2 dark-button-style rounded-sm">
                            <MdEdit/>
                        </button>
                        <button className=" mt-2 text-lg p-2 dark-button-style rounded-sm">
                            <MdDelete/>
                        </button>
                </div>
            </div>
        </>
    );
}

export default UserLinkItem;