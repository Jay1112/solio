import SideBarLayout from "../../layouts/SideBarLayout/SideBarLayout";

function DashboardPage(){
    return (
        <SideBarLayout>
            <div className="flex w-full items-center justify-start flex-col">
                <div className="w-full bg-gray-300 h-[200px] relative">
                    <div  className="w-[150px] h-[150px] bg-indigo-500 rounded-full absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                </div>
            </div>
        </SideBarLayout>
    );
}

export default DashboardPage;