import Navbar from "../components/Navbar";
import clsx from "clsx";

function NavWrapper({ children, lightArea }){
    return (
       <div className={clsx("text-white w-screen h-screen app-overflow",lightArea ? "bg-white" : "bg-primary")} >
            <Navbar />
            <div className={clsx(lightArea ? "bg-white" : "bg-primary")}>
                {children}
            </div>
        </div>
    );
}

export default NavWrapper;