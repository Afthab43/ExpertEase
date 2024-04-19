import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LoginOpen from "./Login";


function SignUp() {
  let Loginhere = () => document.getElementById("my_modal_3").showModal();
  return (
    <>
      <div className="flex  md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 gap-2 ">
        <div className=" w-full md:w-1/2 ">
          <div>
            <div className="bg-white text-black dark:bg-slate-800 dark:text-white  ">
              <div className="flex justify-between mt-3 md:px-16">
              <h3 className="font-bold font-serif text-indigo-700 hover:text-indigo-500 text-2xl flex items-center justify-center">
                Sign up
              </h3>
              <form method="">
                {/* if there is a button in form, it will close the modal */}
                <Link
                  to="/"
                  className="md:left-52 top-12  text-indigo-700  hover:text-indigo-500 flex items-center gap-3"
                >
                  <IoChevronBackOutline />{" "}
                  <h1 className="font-serif"> back to Home</h1>
                </Link>
              </form>
              </div>
              <div className="mt-4 font-serif flex justify-center md:flex-col flex-col items-center space-y-5">
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
                  <span
                    className="underline dark:hover:text-lime-500 cursor-pointer hover:text-lime-500"
                    onClick={Loginhere}
                  >
                    Log-in
                  </span>{" "}
                  now to get started!
                </p>
                <LoginOpen/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2  ">
          <img className="md:mt-24 mt-4 hidden md:block md:h-[540px]  md:w-[490px]" src='https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
