import { useSelector } from "react-redux";
import VerifyOtpForm from "../components/VerifyOtpForm";
import NavWrapper from "../layouts/NavWrapper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OtpVerificationPage(){
    const state = useSelector((state)=>state);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!state.app.userdata){
            navigate('/sign-in');
        }
    },[]);

    return (
        <NavWrapper>
            <VerifyOtpForm/>
        </NavWrapper>
    );
}

export default OtpVerificationPage;