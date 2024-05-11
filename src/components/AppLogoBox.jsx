import { Link } from 'react-router-dom';

function AppLogoBox({
    overrideClass
}){
    return (
        <div className={overrideClass}>
            <Link to={'/'} className='poppins flex-1 text-2xl font-semibold tracking-wider'>Solio</Link>
        </div>
    )
}

export default AppLogoBox;