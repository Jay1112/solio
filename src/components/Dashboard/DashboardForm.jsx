import React from 'react'
import Input from '../ui/Input';

function DashboardForm() {
  return (
   <form className='flex w-full flex-col'>
        <div className='flex w-full'>
            <div className='flex-1 pr-2'>
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
            <div className='flex-1 pl-2'>
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
   </form>
  );
}

export default DashboardForm