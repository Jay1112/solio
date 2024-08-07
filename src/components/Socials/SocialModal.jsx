import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useDispatch } from "react-redux";
import { setShowSocialModal } from '../../store/features/socialSlice'
import SocialSelect from "./SocialSelect";
import toast from "react-hot-toast";

function SocialModal() {    
  const dispatch = useDispatch();
  const [platform,setPlatform] = useState({ label : 'Select', value : 'microsoft' });

  function handleSubmit(e) {
    e.preventDefault();
    if(platform.label === 'Select' && platform.value === 'microsoft'){
      toast.error("Please Select Your Social");
      return;
    }
    const link = e.target[0].value ;
  }

  return (
    <div className="block z-[10] border-2 border-subsecondary bg-black rounded-md p-4 w-full mx-4 md:mx-0 max-w-[600px] shadow-lg mt-20">
      <div className="flex items-center justify-center">
        <p className="flex-1 text-2xl font-poppins">Create Social</p>
        <Button clickHandler={()=>dispatch(setShowSocialModal(false))} className="primary-button  px-2 py-2 text-xl md:text-sm flex items-center justify-center rounded-sm">
          <i className="pi pi-plus rotate-45"></i>
        </Button>
      </div>
      <div className="mt-4">
        <SocialSelect platform={platform} handleSelectPlatform={(value)=>setPlatform(value)} />
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Link"
          type="text"
          containerStyle="w-full mt-4"
          placeholder="Enter your social link..."
          className="primary-input w-full p-3 my-2 rounded-sm"
          required={true}
        />
        <Button
          type="submit"
          className="primary-button mt-2 px-4 md:px-2 py-1.5 md:py-[2px] text-xl md:text-lg flex items-center justify-center rounded-sm"
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default SocialModal;
