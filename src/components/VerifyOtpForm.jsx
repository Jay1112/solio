import { useState } from "react";
import useVerifyOTP from "../hooks/useVerifyOtp";
import { useSelector } from "react-redux";

function VerifyOtpForm(){
    const [otp,setOTP] = useState('');
    const state = useSelector((state)=>state);
    const { loading, verifyOtp } = useVerifyOTP();

    function handleSubmit(e){
        e.preventDefault();
        verifyOtp(otp,'jrptl111299@gmail.com');
    }

    return (
        <div className="w-full rounded-sm max-w-[600px] flex items-center justify-center mt-20 flex-col mx-auto p-8">
            <h2 className="text-3xl w-full poppins font-bold leading-tight text-white sm:text-4xl">
                OTP Verification
            </h2>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="otp" className="text-base font-medium text-white">
                        Enter OTP
                    </label>
                    <div className="mt-1">
                        <input
                            className="w-full p-2 rounded-sm outline-none text-slate-800"
                            type="number"
                            min={111111}
                            max={999999}
                            value={otp}
                            onChange={(e)=>setOTP(parseInt(e.target.value))}
                            placeholder="Ex. 123456"
                            name="otp"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        disabled={loading}
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                        { loading ? 'Loading...' : 'Verify'}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                        >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default VerifyOtpForm;