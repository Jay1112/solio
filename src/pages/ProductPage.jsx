import React from 'react'
import NavbarLayout from '../layouts/NavbarLayout'
import LazyImage from '../components/ui/LazyImage';

function ProductPage() {
  return (
    <NavbarLayout>
        <div className='flex items-center justify-start text-light flex-col'>
            <div className='pt-20 px-4 md:px-0  animated animatedFadeInUp fadeInUp'>
                <p className='text-center tag-line-text text-[52px] md:text-[56px] font-poppins leading-[64px] md:leading-[64px]'>show & spread your all</p>
                <p className='text-center tag-line-text text-[52px] md:text-[56px] font-poppins leading-[64px] md:leading-[64px]'>social media presence from one place.</p>
            </div>
            <div className='pt-6 px-4 md:px-0 text-secondary font-poppins text-[16px] md:text-[24px] animated animatedFadeInUp fadeInUp'>
                <p className='text-center leading-[24px] md:leading-[32px] md:flex md:flex-col'>
                    <span className='md:inline-block'>Solio enables social media influencers and celebrities </span>
                    <span className='md:inline-block'>to spread their social presence and showcase to the world via one-link.</span>
                </p>
            </div>
            <div className='px-4 py-12 md:px-0 animated animatedFadeInUp fadeInUp'>
                <LazyImage 
                    src='https://www.teachyst.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteachyst-dashboard.94e0c88a.png&w=3840&q=75' 
                    width={1400}
                    height={717}
                    imageStyle='w-full md:w-[75%] mx-auto rounded-lg'
                    alt='Product Dashboard'
                />
            </div>
        </div>
    </NavbarLayout>
  )
}

export default ProductPage