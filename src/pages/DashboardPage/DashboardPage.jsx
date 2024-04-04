import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import SideBarLayout from "../../layouts/SideBarLayout/SideBarLayout";
import Divider from '../../components/Divider/Divider';
import SocialLinksForm from "../../components/SocialLinksForm/SocialLinksForm";

function DashboardPage(){
    return (
        <SideBarLayout>
            <div className="flex w-full items-center justify-start flex-col">
                <DashboardHeader />
                <div className="w-full">
                    <ProfileForm />
                    <Divider applyStyle={'mx-4 p-[1px] bg-gray-300'} />
                    <SocialLinksForm />
                </div>
            </div>
        </SideBarLayout>
    );
}

export default DashboardPage;