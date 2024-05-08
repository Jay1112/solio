import NavWrapper from "../layouts/NavWrapper";

function ProductPage(){
    return (
        <NavWrapper>
            <div className="app-container pt-10 md:pt-20">
                <h1 className="text-[#dfe5ef] mx-auto text-6xl leading-tight  md:text-4xl w-full px-4 md:px-0 md:w-1/2 text-center poppins font-semibold">show & spread your all social media presence from one place. </h1>
                <p className="text-[#64748b] w-full md:w-1/2 mx-auto text-center mt-4 px-4 md:px-0 text-xl md:text-normal">Solio enables social media influencers and celebrities to spread their social presence and showcase to the world via one-link.</p>
            </div>
            <div className="flex items-center justify-center mt-4">
                <button className="p-2 px-4 rounded-md t-indigo tracking-wider font-semibold poppins">Get Started</button>
            </div>
        </NavWrapper>
    );
}

export default ProductPage;