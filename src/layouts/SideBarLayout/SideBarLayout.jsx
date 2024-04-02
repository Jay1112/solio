import SideBar from "../../components/Sidebar/Sidebar";

function SideBarLayout({ children }){
    return (
        <div className="flex h-screen w-screen items-stretch justify-center">
            <SideBar />
            <div className="flex w-full flex-1 items-stretch justify-center">
                {children}
            </div>
        </div>
    );
}

export default SideBarLayout;