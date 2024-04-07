import { AiOutlineProfile } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";

function ProfileForm(){
    return (
        <form className="p-4">
            <h2 className="poppins text-2xl tracking-wider">Profile</h2>
            <div className="my-2 flex items-center justify-start flex-col md:flex-row">
                <div className="flex items-center justify-center flex-col flex-1 pr-0 md:pr-2 w-full">
                    <label htmlFor="fullname" className="w-full text-left flex items-center justify-start"><AiOutlineProfile className="text-xl mr-[4px]"/>Full Name </label>
                    <input
                        type="text"
                        id="fullname"
                        className="w-full border-2 border-gray-300 p-2 outline-none focus:border-slate-800 my-2"
                        placeholder="Ex. John Doe"
                        required
                    />
                </div>
                <div className="flex items-center justify-center flex-col flex-1 pl-0 md:pl-2 w-full">
                    <label htmlFor="location" className="w-full text-left flex items-center justify-start"><IoLocationOutline className="text-xl mr-[4px]"/>Location </label>
                    <input
                        type="text"
                        id="location"
                        className="w-full border-2 border-gray-300 p-2 outline-none focus:border-slate-800 my-2"
                        placeholder="Ex. Gujarat, India"
                        required
                    />
                </div>
            </div>
            <div className="">
                <label htmlFor="description" className="w-full text-left flex items-center justify-start"><MdOutlineDescription className="text-xl mr-[4px]"/>Description </label>
                <textarea
                    id="description"
                    className="w-full border-2 border-gray-300 p-2 outline-none focus:border-slate-800 my-2 h-[]"
                    placeholder="Write something about yourself"
                    required
                />
            </div>
            <button
                type="submit"
                className="poppins flex items-center justify-center rounded-sm border-2 border-transparent bg-slate-800 p-2 px-4 text-sm tracking-wider text-white hover:border-slate-800 hover:bg-white hover:text-slate-800"
            >
                Save
            </button>
        </form>
    );
}

export default ProfileForm;