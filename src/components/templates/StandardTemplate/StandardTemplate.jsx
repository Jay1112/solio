import clsx from 'clsx';
import { IoLocationOutline } from "react-icons/io5";
import EmailIcon from '../../Icons/Email';

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
            <div className="hidden md:flex justify-start items-center flex-col overflow-scroll debug">
                <div className='h-[2000px] debug'>test</div>
            </div>
            <div className="flex md:hidden">
                mobile standard
            </div>
        </>
    );
}

export default StandardTemplate;