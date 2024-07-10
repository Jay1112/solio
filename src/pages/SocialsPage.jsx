import SocialLinksList from "../components/Socials/SocialLinksList";
import SidebarWrapper from "../layouts/SidebarWrapper";

function SocialsPage(){
    return (
        <SidebarWrapper>
            <div className="p-2 pt-6 md:pt-2 flex items-stretch justify-center">
                <p className="p-2 poppins font-semibold text-2xl flex-1">Social Presence</p>
                <div className="flex items-center justify-center">
                    <button className="button-indigo p-3 text-white rounded-md flex items-center justify-center mx-2">
                        <i className="text-lg pi pi-plus"></i>
                    </button>
                    <button className="button-rose p-3 text-white rounded-md flex items-center justify-center mx-2">
                        <i className="text-lg pi pi-save"></i>
                    </button>
                </div>
                    
            </div>
            <div>
                <SocialLinksList />
            </div>
        </SidebarWrapper>
    );
}

export default SocialsPage;