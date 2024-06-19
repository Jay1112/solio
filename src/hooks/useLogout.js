import { useState } from "react";
import { AuthAPI, domain } from '../redux/api';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppActions } from "../redux/reducers/app-reducer";
import { toast } from "react-toastify";

function useLogout(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    
    const doLogout = async () => {
        const url = `${domain}${AuthAPI.signOut}`;
        setLoading(true);
        try{
            const resp = await axios.post(url,{},{ withCredentials: true });
            if(resp?.data?.success){
                dispatch({ type : AppActions.SET_USER_DATA, payload : null });
                dispatch({ type : AppActions.SET_USER_LOGGED_OUT });
                navigate('/sign-in/');
            }else{
                toast.error("Logout Failed");
            }
            setLoading(false);
        }catch(error){
            setError(err?.response?.data?.message);
            toast.error(err?.response?.data?.message);
            setLoading(false);
        }
    }

    return { doLogout, loading, error };
}

export default useLogout;