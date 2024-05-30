import AppLogoBox from "../components/AppLogoBox";
import Sidebar from '../components/Sidebar';
import { useWindowSize } from 'usehooks-ts';
import Overlay from "../components/Ui/Overlay";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppActions } from '../redux/reducers/app-reducer'

function SidebarWrapper({ children }){
    const { width } = useWindowSize();
    const app = useSelector((state)=>state.app); 
    const dispatch = useDispatch();

    function handleSideBar() {
        if(!app.isSideBarOpened){
            dispatch({ type : AppActions.SET_SIDEBAR_OPENED });
        }else{
            dispatch({ type : AppActions.SET_SIDEBAR_CLOSED });
        }
    }

    return (
        <>
            {
                width > 960 &&
                <div className="w-screen h-screen app-overflow flex items-center justify-start flex-col">
                    <header className="w-full border-b-2 border-gray-200 p-4">
                        <AppLogoBox overrideClass={'poppins'} />
                    </header>
                    <main className="flex-1 w-full app-overflow flex items-stretch justify-start">
                        <Sidebar containerStyle={"border-r-2 border-gray-200 min-w-[250px] px-2"} />
                        <div className="flex-1 app-overflow">
                            {children}
                        </div>
                    </main>
                </div>
            }
            {
                width <= 960 &&
                <>
                    <div className="w-screen h-screen app-overflow flex items-center justify-start flex-col">
                        <header className="w-full border-b-2 border-gray-200 p-4 flex items-stretch justify-start">
                            <AppLogoBox overrideClass={'poppins flex-1'} />
                            <button onClick={handleSideBar} className="px-2 flex items-center justify-center rounded-sm" data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button">
                                <i className="text-xl pi pi-bars"></i>
                            </button>
                        </header>
                        <main className="flex-1 w-full app-overflow flex items-stretch justify-start">
                            <div className="flex-1 app-overflow">
                                {children}
                            </div>
                        </main>
                    </div>
                    <Overlay containerStyle={ app.isSideBarOpened ? "fixed top-0 left-0 z-40 w-screen h-screen transition-transform transform-none sm:translate-x-0" : "fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"}/>
                </>
            }
        </>
    );
}

export default SidebarWrapper;