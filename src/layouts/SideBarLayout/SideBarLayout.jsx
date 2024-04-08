import SideBar from "../../components/Sidebar/Sidebar";

function SideBarLayout({ children }){
    return (
        <div className="flex h-screen w-screen items-stretch justify-center">
            <SideBar />
            <div className="flex w-full flex-1 items-start justify-center overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

export default SideBarLayout;