import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { sidebarMenuList } from '../../mock/sideBarMenuList';
import clsx from 'clsx';


function SideBar(){
    const {pathname} = useLocation();

    return (
        <div className="hidden md:min-w-[250px] border-r-2 md:flex flex-col items-center justify-start">
            <div className="w-full px-2 pt-4 pb-2 flex items-center justify-center">
                <div className="w-[150px] h-[150px] bg-gray-300 rounded-full"></div>
            </div>
            <p className="py-2 roboto w-full text-center">jay111299</p>
            <div className="w-full flex-1 flex items-center justify-start flex-col px-2">
                {
                    sidebarMenuList.map((item)=>{
                        return (
                            <Link to={item.path} key={item.id} className={clsx("w-full border-2 my-[4px] rounded-md p-2 text-lg poppins tracking-wide flex items-center justify-center", pathname.startsWith(item.path) ? 'bg-indigo-600 text-white border-transparent' : 'border-gray-300 bg-white text-slate-800 hover:bg-gray-300 ' )}>
                                <span className="px-2 text-xl">{item.icon}</span>
                                <span className="flex-1 px-2">{ item.title }</span>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="w-full p-2">
                <button className="flex items-center justify-center w-full poppins rounded-md border-2 border-slate-800 px-4 py-2 hover:bg-slate-800 hover:text-white">
                    <span className="flex-1">Sign-Out</span>
                    <span><FaLongArrowAltRight className="text-2xl" /> </span>
                </button>
            </div>
        </div>
    );
}

export default SideBar;