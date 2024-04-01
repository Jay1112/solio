import { CgProfile } from "react-icons/cg";
import { MdOutlineAnalytics } from "react-icons/md";

export const sidebarMenuList = [
    {
        id : 1,
        title : 'Dashboard',
        path : '/dashboard',
        icon : <CgProfile />
    },
    {
        id : 2,
        title : 'Analytics',
        path : '/analytics',
        icon : <MdOutlineAnalytics />
    }
];