import AppLogoBox from "../AppLogoBox";
import { useDispatch } from 'react-redux';
import { AppActions } from '../../redux/reducers/app-reducer'

function Overlay({
    containerStyle,
    children
}) {
  const dispatch = useDispatch();

  function closeSideBar() {
    dispatch({ type : AppActions.SET_SIDEBAR_CLOSED });
  }

  return (
    <>
      <aside
        id="cta-button-sidebar"
        className={containerStyle}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <div className="flex items-center justify-center my-2">
            <AppLogoBox overrideClass={"flex-1"} />
            <button
              onClick={closeSideBar}
              className="pi pi-times bg-gray-200 p-2"
            ></button>
          </div>
          <div className="mt-6">
            { children }
          </div>
        </div>
      </aside>
    </>
  );
}

export default Overlay;
