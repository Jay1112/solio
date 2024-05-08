import { Link } from 'react-router-dom';
import AppLogo from '../assets/logo.webp';

function AppLogoBox(){
    return (
        <div className='p-2 flex items-center justify-center flex-col'>
            <Link to={'/'} className='poppins flex-1 text-2xl font-semibold tracking-wider'>Solio</Link>
        </div>
    )
}

export default AppLogoBox;