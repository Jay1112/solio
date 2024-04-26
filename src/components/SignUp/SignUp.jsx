import { Link } from "react-router-dom";

function SignUp() {
  return (
    <form className="w-full max-w-[380px] bg-white/30 p-2 backdrop-blur-sm md:w-2/5 md:bg-transparent md:p-0">
      <p className="mb-4 text-center text-3xl font-medium">Sign Up</p>
      <div className="mb-5">
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full border-2 border-gray-300 p-2 outline-none focus:border-slate-800"
          placeholder="username"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full border-2 border-gray-300 p-2 outline-none focus:border-slate-800"
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full border-2 border-gray-300 p-2 outline-none focus:border-slate-800"
          placeholder="password"
          required
        />
      </div>
      <button
        type="submit"
        className="poppins flex items-center justify-center rounded-sm border-2 border-transparent bg-slate-800 p-2 px-4 text-sm tracking-wider text-white hover:border-slate-800 hover:bg-white hover:text-slate-800"
      >
        Submit
      </button>
      <p className="poppins my-4">
        Already have an Account ? do{" "}
        <Link className="text-blue-900 underline" to="/sign-in">
          Sign In
        </Link>
      </p>
    </form>
  );
}

export default SignUp;