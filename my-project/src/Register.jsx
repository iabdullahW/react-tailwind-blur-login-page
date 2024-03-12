// Register.js
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative max-w-xs w-full mx-auto">
      <h1 className="text-white text-4xl font-bold text-center mb-6">Register</h1>
      <form action="" className="space-y-4">
        <div className="relative my-4">
          <input
            type="email"
            className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder: "
            placeholder="Email"
          />
        </div>
        <div className="relative my-4">
          <input
            type="password"
            className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
            placeholder="Password"
          />
        </div>
        <div className="relative my-4">
          <input
            type="password"
            className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="bg-white w-full mb-4 text-[18px] mt-6 rounded-full text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors-duration-300 "
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <span>
          {" "}
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Register;
