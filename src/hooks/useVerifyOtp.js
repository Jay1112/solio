import { useDispatch } from "react-redux";
import { AppActions } from "../redux/reducers/app-reducer";
import axios from "axios";
import { AuthAPI, domain } from '../redux/api';
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useVerifyOTP(){
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const verifyOtp = async (otp,email) => {
        const url = `${domain}${AuthAPI.verifyOtp}`;
        setLoading(true);
        try{
            const resp = await axios.post(url,{
                otp,
                email
            });
            if(resp?.data?.success){
                // dispatch({ type : AppActions.SET_USER_DATA, payload : resp?.data?.data });
                // dispatch({ type : AppActions.SET_USER_LOGGED_IN });
                toast.success("OTP Verified");
                toast.info("You are verified user. please do login");
                navigate('/sign-in/');
            }else{
                toast.error("OTP verification failed");
                setError("Invalid");
            }
            setLoading(false);
        }catch(err){
            setError(err?.response?.data?.message);
            toast.error(err?.response?.data?.message);
            setLoading(false);
        }
    }

    return { verifyOtp, loading, error };
}

export default useVerifyOTP;