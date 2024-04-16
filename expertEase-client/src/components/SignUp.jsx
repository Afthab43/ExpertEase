import React from "react";
import { Link } from "react-router-dom";
import yep from "../../public/yep.webp";

function SignUp() {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 gap-2 my-10">
      <div className="md:flex md:h-screen md:justify-center md:items-center">
        <div className="">
          <div className=" dark:bg-slate-800 dark:text-white  ">
            <form method="">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-[480px] top-2 text-indigo-700  hover:text-indigo-500"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold font-serif text-indigo-700 hover:text-indigo-500 text-2xl">
              Sign up
            </h3>
            <div className="mt-8 font-serif flex justify-center flex-col items-center space-y-5">
              <div className="">
                <label htmlFor="fname">First Name </label>
                <br />
                <input
                  id="fname"
                  type="text"
                  placeholder="Enter your First Name"
                  className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                />
              </div>

              <div className="">
                <label htmlFor="lname">Last Name </label>
                <br />
                <input
                  id="lname"
                  type="text"
                  placeholder="Enter your Last Name"
                  className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                />
              </div>

              <div className="">
                <label htmlFor="number">Phone </label>
                <br />
                <input
                  id="number"
                  type="number"
                  placeholder="Enter your Phone Number"
                  className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                />
              </div>

              <div className="">
                <label htmlFor="email">Email </label>
                <br />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                />
              </div>

              <div className="">
                <label htmlFor="pass">Password </label>
                <br />
                <input
                  id="pass"
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                />
              </div>

              <div className="">
                <label htmlFor="cpass">Confirm Password </label>
                <br />
                <input
                  id="cpass"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                />
              </div>

              <button className="mt-5 bg-indigo-800 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg w-80 h-10">
                Sign up
              </button>
              <p className="mt-2">
                Already have an account?{" "}
                <Link
                  className="underline dark:hover:text-lime-500"
                  to="/login"
                >
                  Log-in
                </Link>{" "}
                now to get started!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={yep} alt="" className="h-[60%] w-[360%]" />
      </div>
    </div>
  );
}

export default SignUp;
