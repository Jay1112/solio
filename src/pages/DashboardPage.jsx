import DashboardForm from "../components/DashboardForm";
import SidebarWrapper from "../layouts/SidebarWrapper";

function DashboardPage(){
    return (
        <SidebarWrapper>
            <div className="p-2">
                <div className="p-2 flex items-center justify-center md:justify-start">
                    <div className="w-[200px] h-[200px] bg-gray-300 rounded-sm"></div>
                </div>
                <div className="p-2">
                    <DashboardForm />
                </div>
            </div>
        </SidebarWrapper>
    );
}

export default DashboardPage;