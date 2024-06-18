import { useDispatch } from "react-redux";
import { AppActions } from "../redux/reducers/app-reducer";
import axios from "axios";
import { AuthAPI, domain } from '../redux/api';
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSignIn(){
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doSignIn = async (email,password) => {
        const url = `${domain}${AuthAPI.signIn}`;
        setLoading(true);
        try{
            const resp = await axios.post(url,{
                email,
                password
            },{ withCredentials: true });
            if(resp?.data?.success && resp?.data?.data?.verified){
                dispatch({ type : AppActions.SET_USER_DATA, payload : resp?.data?.data });
                dispatch({ type : AppActions.SET_USER_LOGGED_IN });
                navigate('/dashboard/');
                toast.success("Sign In SuccessFully");
            }else if(resp?.data?.success && !resp?.data?.success?.verified){
                dispatch({ type : AppActions.SET_USER_DATA, payload : resp?.data?.data });
                toast.info("Please Veify Your Account!");
                navigate('/verify-otp/');
            }else{
                toast.error("Sign up Failed");
                setError("Invalid");
            }
            setLoading(false);
        }catch(err){
            setError(err?.response?.data?.message);
            toast.error(err?.response?.data?.message);
            setLoading(false);
        }
    }

    return { doSignIn, loading, error };
}

export default useSignIn;