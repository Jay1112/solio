import { useSelector } from "react-redux";
import AppLogoBox from "./AppLogoBox";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar({ lightArea }){
    const navigate = useNavigate();
    const app = useSelector((state) => state.app);
    const location = useLocation();

    const navLinks = [
        {
            id: 1, 
            title: 'About',
            link: '/about/'
        },
        {
            id: 2, 
            title: 'Contact',
            link: '/contact/'
        }
    ]

    return (
        <nav className="w-full bg-primary">
            <div className="app-container sticky top-0 flex items-center justify-center md:py-2">
                <AppLogoBox overrideClass={'p-2 flex items-center justify-center flex-col'} />
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
                {
                    !app.isLoggedIn &&
                    <div className="py-2 mx-2 flex items-center justify-center">
                        <button onClick={()=>{ location.pathname.includes('sign-in') ? navigate('/sign-up/') : navigate('/sign-in/') }} className="debug p-2 px-4 rounded-md t-indigo tracking-wider">
                            {
                                location.pathname.includes('sign-in') ? 'Sign-Up' : 'Sign-In'
                            }
                        </button>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Navbar;