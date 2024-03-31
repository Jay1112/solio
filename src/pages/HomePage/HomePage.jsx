import NavBarLayout from "../../layouts/NavBarLayout/NavBarLayout";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroImage from "../../assets/cover.webp";

function HomePage() {
  return (
    <NavBarLayout>
      <div className="product-background flex w-full items-stretch justify-center px-2 py-4 md:px-8 md:py-4">
        <div className="flex w-full flex-1 flex-col items-center justify-center px-2">
          <p className="line-height my-2 hidden w-full text-5xl md:block">
            Display your all
          </p>
          <p className="line-height my-2 hidden w-full text-5xl md:block">
            Social Media Platforms
          </p>
          <p className="line-height my-2 hidden w-full text-5xl md:block">
            Info at One Place
          </p>
          <p
            className="poppins block text-center text-5xl font-semibold text-white md:hidden"
            style={{ lineHeight: "70px" }}
          >
            Display your all Social Media Platforms Info at One Place
          </p>
          <div className="my-6 flex w-full items-center justify-center md:my-2 md:justify-start">
            <button className="poppins flex items-center justify-center rounded-sm border-2 border-transparent bg-slate-800 p-2 px-4 text-xl tracking-wider text-white hover:border-slate-800 hover:bg-white hover:text-slate-800">
              Demo <FaLongArrowAltRight className="ml-2 " />
            </button>
          </div>
        </div>
        <div className="mx-8 hidden flex-1 md:flex">
          <div className="flex w-full items-center justify-center px-2">
            <LazyLoadImage
              className="rounded-sm drop-shadow-sm"
              alt={"hero section"}
              height={"auto"}
              src={HeroImage}
              width={"auto"}
            />
          </div>
        </div>
      </div>
    </NavBarLayout>
  );
}

export default HomePage;
