import { useDispatch } from "react-redux";
import { AppActions } from "../redux/reducers/app-reducer";
import axios from "axios";
import { AuthAPI, domain } from '../redux/api';
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSignUp(){
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doSignUp = async (email,password,username) => {
        const url = `${domain}${AuthAPI.signup}`;
        setLoading(true);
        try{
            const resp = await axios.post(url,{
                email,
                password,
                username
            });
            if(resp?.data?.success){
                dispatch({ type : AppActions.SET_USER_DATA, payload : resp?.data?.data });
                dispatch({ type : AppActions.SET_USER_LOGGED_IN });
                toast.success("Sign up SuccessFully");
                toast.info("Please Verify OTP to open the Dashboard");
                navigate('/dashboard/');
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

    return { doSignUp, loading, error };
}

export default useSignUp;