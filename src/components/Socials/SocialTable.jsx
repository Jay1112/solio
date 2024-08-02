import React from "react";
import Button from "../ui/Button";

function SocialTable() {
  return (
    <div className="bg-black rounded-md overflow-x-auto overflow-y-auto">
        {/* header  */}
        <div className="flex p-4 gap-4 font-poppins text-lg border-b-2 border-[#ffffff1e]">
            <p className="min-w-[100px] text-center">Icon</p>
            <p className="min-w-[100px] md:min-w-[200px]">Social</p>
            <p className="flex-1 min-w-[600px]">Link</p>
            <p className="min-w-[200px]">Actions</p>
        </div>
        <div>
            <div className="flex p-4 gap-4 font-poppins">
                <p className="min-w-[100px] text-2xl flex items-center justify-center"><i className="pi pi-linkedin"></i></p>
                <p className="min-w-[100px] md:min-w-[200px] flex items-center justify-start">LinkedIn</p>
                <p className="flex-1 flex items-center justify-start min-w-[600px]">https://in.linkedin.com/in/jay-patel-93b394155/in/jay-patel-93b394155/in/jay-patel-93b394155</p>
                <p className="min-w-[200px] text-center flex">
                    <Button className="primary-button  px-2 md:py-2 text-xl md:text-sm flex items-center justify-center mr-2 rounded-sm"><i className="pi pi-pencil"></i></Button>
                    <Button className="primary-button  px-2 md:py-2 text-xl md:text-sm flex items-center justify-center mx-2 rounded-sm"><i className="pi pi-trash"></i></Button>
                </p>
            </div>
            <div className="flex p-4 gap-4 font-poppins">
                <p className="min-w-[100px] text-2xl flex items-center justify-center"><i className="pi pi-linkedin"></i></p>
                <p className="min-w-[100px] md:min-w-[200px] flex items-center justify-start">LinkedIn</p>
                <p className="flex-1 flex items-center justify-start min-w-[600px]">https://in.linkedin.com/in/jay-patel-93b394155/in/jay-patel-93b394155/in/jay-patel-93b394155</p>
                <p className="min-w-[200px] text-center flex">
                    <Button className="primary-button  px-2 md:py-2 text-xl md:text-sm flex items-center justify-center mr-2 rounded-sm"><i className="pi pi-pencil"></i></Button>
                    <Button className="primary-button  px-2 md:py-2 text-xl md:text-sm flex items-center justify-center mx-2 rounded-sm"><i className="pi pi-trash"></i></Button>
                </p>
            </div>
        </div>
    </div>
  );
}

export default SocialTable;
