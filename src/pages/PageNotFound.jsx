import { Link } from 'react-router-dom';

import NotFoundImage from '../assets/not-found.jpg';

function PageNotFound(){
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            <img src={NotFoundImage}  width={600} height={400} alt='not found' />
            <h1 className="text-slate-800 poppins text-2xl">Page Not Found</h1>
            <Link to='/' className='bg-gray-200 my-2 px-4 py-2 rounded-sm hover:bg-indigo-500 hover:text-white'>Home</Link>
        </div>
    );
}

export default PageNotFound;