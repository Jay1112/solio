import NavBarLayout from "../../layouts/NavBarLayout/NavBarLayout";

function HomePage(){
    return (
        <NavBarLayout>
            <div className="w-full flex items-stretch justify-center">
                <div className="flex-1">
                    Product Moto and Details
                </div>
                <div className="flex-1 hidden md:flex">
                    Hero Banner Image
                </div>
            </div>
        </NavBarLayout>
    );
}

export default HomePage;