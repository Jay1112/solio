import Navbar from "../components/Navbar";

function NavWrapper({ children }){
    return (
       <div className="bg-primary text-white w-screen h-screen app-overflow">
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    );
}

export default NavWrapper;