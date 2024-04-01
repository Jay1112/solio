import SideBarLayout from "../../layouts/SideBarLayout/SideBarLayour";

function DashboardPage(){
    return (
        <SideBarLayout>
            <div className="flex w-full items-stretch justify-center px-2 py-4 md:px-8 md:py-4">
                Dashboard
            </div>
        </SideBarLayout>
    );
}

export default DashboardPage;