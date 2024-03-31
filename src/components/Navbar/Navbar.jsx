import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b-2 border-gray-200 px-4 py-4 md:px-8 md:py-4">
      <div className="flex w-full items-center justify-center">
        <p className="flex flex-1 items-stretch justify-start">
          <Link
            to={"/"}
            className="poppins text-3xl font-semibold tracking-wide"
          >
            SoLio
          </Link>
          <Link
            to={"/about"}
            className="mx-6 flex items-center justify-center border-b-2 border-b-transparent hover:border-slate-800"
          >
            About
          </Link>
        </p>
        <button
          onClick={() => navigate("/sign-in")}
          className="poppins rounded-sm border-2 border-slate-800 px-4 py-2 hover:bg-slate-800 hover:text-white"
        >
          Sign-In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
