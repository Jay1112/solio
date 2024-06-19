import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppActions } from "../redux/reducers/app-reducer";
import axios from "axios";
import { UserAPI, domain } from '../redux/api';

function useUserSession(){
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    
    const initAppSession = async () => {
        const url = `${domain}${UserAPI.details}`;
        setLoading(true);
        try{
            const resp = await axios.get(url,{ withCredentials: true });
            if(resp?.data?.success){
                dispatch({ type : AppActions.SET_USER_DATA, payload : resp?.data?.data });
                dispatch({ type : AppActions.SET_USER_LOGGED_IN });
            }
            setLoading(false);
        }catch(err){
            setError(err);
            setLoading(false);
        }
    }

    return { initAppSession, loading, error }
}

export default useUserSession;