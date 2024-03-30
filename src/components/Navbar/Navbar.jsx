import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="w-full px-4 py-4 md:px-8 md:py-4 border-b-2 border-gray-200">
            <div className="w-full flex items-center justify-center">
                <p className="flex items-stretch justify-start flex-1">
                    <Link to={'/'} className="poppins text-3xl tracking-wide font-semibold">SoLio</Link>
                    <Link to={'/about'} className="flex items-center justify-center border-b-2 border-b-transparent hover:border-slate-800 mx-6">About</Link>
                </p>
                <button className="border-2 border-slate-800 px-4 py-2 rounded-sm poppins hover:text-white hover:bg-slate-800">
                    Sign-In
                </button>
            </div>
        </nav>
    );
}

export default Navbar;