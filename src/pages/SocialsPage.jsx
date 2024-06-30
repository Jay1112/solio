import SocialLinksForm from "../components/SocialLinksForm/SocialLinksForm";
import SidebarWrapper from "../layouts/SidebarWrapper";

function SocialsPage(){
    return (
        <SidebarWrapper>
            <div className="p-2 flex items-stretch justify-center">
                <p className="p-2 poppins font-semibold text-2xl flex-1">Social Presence</p>
                <div className="flex items-center justify-center">
                    <button className="button-indigo px-4 p-2 text-white rounded-full flex items-center justify-center mx-2">
                        <i className="text-sm pi pi-plus"></i>
                        <span className="ml-2">ADD</span>
                    </button>
                </div>
                    
            </div>
            <div>
                <SocialLinksForm />
            </div>
        </SidebarWrapper>
    );
}

export default SocialsPage;