import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import Button from '../components/ui/Button'
import SocialTable from '../components/Socials/SocialTable'

function SocialsPage() {
  return (
    <DashboardLayout>
        <div className='animated animatedFadeInUp fadeInUp overflow-x-auto overflow-y-auto'>
            <div className='border-[#B5B2B240] hidden md:flex items-center justify-start p-4 md:p-12'>
              <p className='text-xl md:text-5xl font-poppins w-full'>Your Social Presence</p>
            </div>
            <div className='mx-4 md:mx-12 mt-4 md:mt-0 flex items-center justify-center'>
              <p className='font-semibold text-xl flex-1'>Socials</p>
              <Button className="primary-button px-2 flex items-center justify-center py-1.5 rounded-sm">
                <span className='text-sm'>
                  <i className='pi pi-plus'></i>
                </span>
                <span className='px-2 font-poppins'>Create Social</span>
              </Button>
            </div>
            <div className='mx-4 md:mx-12 mt-8 border-2 border-[#ffffff1e] rounded-md  overflow-x-auto overflow-y-auto'>
              <SocialTable />
            </div>
        </div>
    </DashboardLayout>
  )
}

export default SocialsPage