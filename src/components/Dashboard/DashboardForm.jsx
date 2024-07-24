import React from "react";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from '../ui/Button';

function DashboardForm() {

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target[0].value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col">
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex-1 pr-0 md:pr-2">
          <Input
            label="Full Name"
            labelIcon="headphones"
            type="text"
            containerStyle="w-full mt-4"
            placeholder="Ex. John Doe"
            className="primary-input w-full p-3 my-2 rounded-sm"
            required={false}
          />
        </div>
        <div className="flex-1 pl-0 md:pl-2">
          <Input
            label="Location"
            labelIcon="map-marker"
            type="text"
            containerStyle="w-full mt-4"
            placeholder="Ex. London, England"
            className="primary-input w-full p-3 my-2 rounded-sm"
            required={false}
          />
        </div>
      </div>
      <TextArea
        label="Description"
        placeholder="Write about yourself here..."
        labelIcon="align-left"
        containerStyle="w-full mt-4"
        className="w-full primary-input min-h-[250px] md:min-h-[100px] p-2.5 my-2 rounded-sm"
      />
      <div className="mt-3">
        <Button
          buttonStyle="inline-block primary-button px-3 py-[6px] text-lg rounded-sm"
          type="submit"
          // disabled={loading}
        >
          <span className="font-poppins">
            {/* {loading ? "Loading..." : "Save"} */}
            Save
          </span>
        </Button>
      </div>
    </form>
  );
}

export default DashboardForm;
