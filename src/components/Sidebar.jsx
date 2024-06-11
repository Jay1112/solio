import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";

function Sidebar({
    containerStyle,
}){
    const location = useLocation();
    const { width } = useWindowSize();

    function handleMenuLinkClick(){
        setTimeout(()=>{
            if(width <= 768){
                const sideBarCloseButton = document.querySelector('#sidebar-close-button');
                if(sideBarCloseButton){
                    sideBarCloseButton?.click();
                }
            }
        },0);
    }

    const menuList = [
        {
            id : 1,
            title : 'Dashboard',
            link : '/dashboard/',
            icon : 'pi pi-microsoft'
        },
        {
            id : 2,
            title : 'Socials',
            link : '/dashboard/socials/',
            icon : 'pi pi-share-alt'
        },
        {
            id : 3,
            title : 'Personalized',
            link : '/dashboard/personalized/',
            icon : 'pi pi-link'
        },
        {
            id : 4,
            title : 'Analytics',
            link : '/dashboard/analytics/',
            icon : 'pi pi-chart-bar'
        }
    ]

    return (
        <div className={containerStyle}>
            {
                menuList.map((item)=>{

                    if(location.pathname === item.link){
                        return (
                            <div key={`sidebar-link-${item.id}`} className="p-2 bg-gray-200 my-2 cursor-pointer flex items-center justify-center rounded-sm">
                                <i className={clsx(`${item.icon}`)}></i>
                                <span className="flex-1 px-4">
                                    {item.title}
                                </span>
                            </div>
                        )
                    }

                    return (
                        <div key={`sidebar-link-${item.id}`} className="my-2 hover:bg-gray-200 cursor-pointer rounded-sm">
                            <Link to={item.link} onClick={handleMenuLinkClick} className="p-2 flex items-center justify-center">
                                <i className={clsx(`${item.icon}`)}></i>
                                <span className="flex-1 px-4">
                                    {item.title}
                                </span>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Sidebar;