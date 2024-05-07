// import { LazyLoadImage } from 'react-lazy-load-image-component';
import AppLogo from '../assets/logo.webp';

function AppLogoBox(){
    return (
        <div className='p-2 flex items-center justify-center flex-col'>
            {/* <LazyLoadImage src={AppLogo} width={32} height={32} alt='logo' /> */}
            <p className='poppins flex-1 text-2xl font-semibold tracking-wider'>Solio</p>
        </div>
    )
}

export default AppLogoBox;