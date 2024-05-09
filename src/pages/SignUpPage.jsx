import { Link } from "react-router-dom";
import NavWrapper from "../layouts/NavWrapper";

function SignUpPage() {
  return (
    <NavWrapper>
      <div className="w-full rounded-sm max-w-[600px] flex items-center justify-center mt-20 flex-col mx-auto p-8">
        <h2 class="text-3xl w-full poppins font-bold leading-tight text-white sm:text-4xl">
          Sign Up
        </h2>
        {/* Sign Up Form  */}
        <form className="w-full">
            <div className="mt-4">
              <label htmlFor="email" class="text-base font-medium text-white">
                Email address
              </label>
              <div class="mt-1">
                <input
                  class="w-full p-2 rounded-sm outline-none text-slate-800"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" class="text-base font-medium text-white">
                Username
              </label>
              <div class="mt-1">
                <input
                  class="w-full p-2 rounded-sm outline-none text-slate-800"
                  type="text"
                  placeholder="Username"
                  name="username"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" class="text-base font-medium text-white">
                Password
              </label>
              <div class="mt-1">
                <input
                  class="w-full p-2 rounded-sm outline-none text-slate-800"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Sign-Up{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
        </form>
        <p class="w-full mt-4 text-md text-left">
          <span className="text-[#64748b]">Already have an account ?{" "}</span>
          <Link
            to="/sign-in/"
            title=""
            class="text-indigo-600 font-semibold  transition-all duration-200 hover:underline"
          >
            Do Sign-In
          </Link>
        </p>
      </div>
    </NavWrapper>
  );
}

export default SignUpPage;
