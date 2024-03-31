import Navbar from "../../components/Navbar/Navbar";

function NavBarLayout({ children }) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Navbar />
      <div className="flex w-full flex-1 items-stretch justify-center">
        {children}
      </div>
    </div>
  );
}

export default NavBarLayout;
