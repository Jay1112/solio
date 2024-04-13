import clsx from 'clsx';
import { IoLocationOutline } from "react-icons/io5";

function StandardTemplate(){
    const coverImage = null ;

    const coverImageStyle = {
        backgroundImage : 'url(https://static.vecteezy.com/system/resources/previews/024/663/796/non_2x/amazing-background-image-high-resolution-desktop-wallpaper-generative-ai-free-photo.jpg)',
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
        backgroundPosition:'center'
    }
    return (
        <>
            <div className="hidden md:flex w-screen h-screen bg-[rgba(0,0,0,0.95)] desktop-background text-white justify-start items-center flex-col">
                <div className={clsx('w-full h-[200px]','relative', !coverImage && 'default-desktop-cover')} style={ coverImage && coverImageStyle}>
                    <div  className="w-[150px] h-[150px] bg-indigo-500 rounded-full absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="app-container mx-auto mt-[90px]">
                    <p className='text-center poppins text-4xl font-semibold'>Jay Patel</p>
                    <p className='flex items-center justify-center mt-4 poppins'><IoLocationOutline className='text-gray-100 mx-[2px]' /><span>Gujarat, India</span></p>
                    <p className='mx-auto max-w-[640px] text-justify roboto mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis repellendus earum corporis architecto consectetur! Ipsa deserunt culpa excepturi sequi? Laborum perspiciatis voluptatem quidem ratione sit? Iure, nesciunt. Beatae, sed!</p>
                </div>
            </div>
            <div className="flex md:hidden">
                mobile standard
            </div>
        </>
    );
}

export default StandardTemplate;