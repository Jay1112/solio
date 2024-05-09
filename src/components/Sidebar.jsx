import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

function Sidebar(){
    const location = useLocation();

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
        <div className="border-r-2 border-gray-200 min-w-[250px] px-2">
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
                            <Link to={item.link} className="p-2 flex items-center justify-center">
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