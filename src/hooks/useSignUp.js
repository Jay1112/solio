import { useDispatch } from "react-redux";
import { AppActions } from "../redux/reducers/app-reducer";
import axios from "axios";
import { AuthAPI, domain } from '../redux/api';
import { toast } from "react-toastify";
import { useState } from "react";

function useSignUp(){
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const dispatch = useDispatch();

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
            }else{
                toast.error("Sign up Failed");
                setError("Invalid");
            }
            setLoading(false);
        }catch(err){
            setError("Something went wrong while registering the user...");
            toast.error("Something went wrong while registering the user...");
            setLoading(false);
        }
    }

    return { doSignUp, loading, error };
}

export default useSignUp;