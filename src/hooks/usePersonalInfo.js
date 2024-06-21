import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppActions } from "../redux/reducers/app-reducer";
import axios from "axios";
import { UserAPI, domain } from '../redux/api';
import { toast } from "react-toastify";

function usePersonalInfo(){
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    
    const updatePersonalInfo = async (fullname, location, description) => {
        const url = `${domain}${UserAPI.personalInfo}`;
        setLoading(true);
        try{
            const resp = await axios.post(url,{ 
                fullname, 
                location, 
                description 
            },{ withCredentials: true });
            if(resp?.data?.success){
                toast.success("Personal Info Successfully Updated.");
                dispatch({ type : AppActions.SET_USER_DATA, payload : resp?.data?.data });
            }else{
                console.log("failed");
                toast.error(resp?.message);
            }
            setLoading(false);
        }catch(err){
            console.log("error",err);
            toast.error(err?.response?.data?.message);
            setError(err);
            setLoading(false);
        }
    }

    return { updatePersonalInfo, loading, error }
}

export default usePersonalInfo;