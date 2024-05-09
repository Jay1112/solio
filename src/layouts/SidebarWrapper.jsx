import AppLogoBox from "../components/AppLogoBox";
import Sidebar from '../components/Sidebar';

function SidebarWrapper({ children }){
    return (
        <>
            <div className="w-screen h-screen app-overflow flex items-center justify-start flex-col">
                <header className="w-full border-b-2 border-gray-200 p-4">
                    <AppLogoBox overrideClass={'poppins'} />
                </header>
                <main className="flex-1 w-full app-overflow flex items-stretch justify-start">
                    <Sidebar />
                    <div className="flex-1 app-overflow">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}

export default SidebarWrapper;