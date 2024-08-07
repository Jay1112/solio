import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SocialsAPI } from '../store/apis';
import { toast } from "react-hot-toast";
import { AppConfig } from '../config/conf';
import { setPlatformsList } from '../store/features/socialSlice';

function useSocials() {
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const fetchAllSocials = async () => {
        const url = `${AppConfig.DOMAIN}${SocialsAPI.platforms}`;
        setLoading(true);
        try{
            const resp = await axios.get(url,{ withCredentials: true });
            if(resp?.data?.success){
                dispatch(setPlatformsList(resp?.data?.data?.platforms));
            }else{
                toast.error(resp?.message);
            }
        }catch(err){
            toast.error(err?.response?.data?.message);
            setError(err);
        }finally{
            setLoading(false);
        }
    }

    return { fetchAllSocials, loading, error }
}

export default useSocials;