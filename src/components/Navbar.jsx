import AppLogoBox from "./AppLogoBox";
import { Link } from "react-router-dom";

function Navbar(){

    const navLinks = [
        {
            id: 1, 
            title: 'About',
            link: '/about'
        },
        {
            id: 2, 
            title: 'Contact',
            link: '/contact'
        }
    ]

    return (
        <nav className="app-container sticky top-0 bg-primary flex items-center justify-center md:pt-2">
            <AppLogoBox />
            <div className="py-2 px-4 md:px-0 flex-1 flex items-stretch justify-start">
                {
                    navLinks.map((item)=>{
                        return (
                            <Link to={item.link} key={`nav-link-${item.id}`} className="poppins flex items-center justify-center p-2 mx-2 border-b-2 border-transparent hover:border-indigo-600" >
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
            <div className="py-2 mx-2 flex items-center justify-center">
                <button className="debug p-2 px-4 rounded-md t-indigo tracking-wider">Sign-In</button>
            </div>
        </nav>
    );
}

export default Navbar;