import SocialLinksForm from "../components/SocialLinksForm/SocialLinksForm";
import SidebarWrapper from "../layouts/SidebarWrapper";

function SocialsPage(){
    return (
        <SidebarWrapper>
            <div className="p-2 flex items-center justify-center">
                <p className="p-2 poppins font-semibold text-2xl flex-1">Social Presence</p>
                <button className="button-indigo p-2 text-white rounded-sm flex items-center justify-center mx-2">
                    <i className="text-md pi pi-plus"></i>
                </button>
            </div>
            <div>
                <SocialLinksForm />
            </div>
        </SidebarWrapper>
    );
}

export default SocialsPage;