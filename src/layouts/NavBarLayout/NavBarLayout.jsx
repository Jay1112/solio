import Navbar from '../../components/Navbar/Navbar';

function NavBarLayout({ children }){
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <Navbar />
            <div className='flex-1 flex items-stretch justify-center w-full px-2 py-4 md:px-8 md:py-4'>
                {children}
            </div>
        </div>
    );
}

export default NavBarLayout;