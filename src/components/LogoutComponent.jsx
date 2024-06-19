import { useDispatch } from "react-redux";
import useLogout from "../hooks/useLogout";
import { AppActions } from "../redux/reducers/app-reducer";

function LogoutComponent({
    containerStyle
}){
    const { doLogout, loading } = useLogout();
    const dispatch = useDispatch();

    function handleLogout(e){
        doLogout();
        dispatch({ type : AppActions.SET_SIDEBAR_CLOSED });
    }

    return (
        <button
            onClick={handleLogout}
            disabled={loading}
            type="submit"
            className={containerStyle}
        >
            { loading ? 'Loading...' : 'Logout' }
        </button>
    )
}

export default LogoutComponent;