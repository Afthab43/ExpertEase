import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LoginOpen from "./Login";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      password: data.password,
    };
    console.log(data);
    console.log(userInfo);
    await axios
      .post("http://localhost:4545/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup successfull!", { position: "top-right" });
        }
        localStorage.setItem("Users", JSON.stringify(res.data)); //local-storage
      })
      .catch((err) => {
        // alert("Error : " + err);
        if (err.response) {
          console.log(err);
          alert("Error : " + err.response.data.message);
          toast.error("Error : " + err.response.data.message, {
            position: "top-right",
          });
        }
      });
  };

  return (
    <>
      <div className="flex  md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 gap-2 h-screen ">
        <div className=" w-full md:w-1/2 ">
          <>
            <form onSubmit={handleSubmit(onSubmit)} method="">
              <div className=" dark:bg-slate-800 dark:text-white  ">
                <div className="flex justify-between mt-3 md:px-16 md:mt-20">
                  <h3 className="font-bold font-serif text-indigo-700 hover:text-indigo-500 text-2xl flex items-center justify-center">
                    Sign up
                  </h3>

                  {/* if there is a button in form, it will close the modal */}
                  <Link
                    to="/"
                    className="md:left-52 top-12  text-indigo-700  hover:text-indigo-500 flex items-center gap-3"
                  >
                    <IoChevronBackOutline />{" "}
                    <h1 className="font-serif"> back to Home</h1>
                  </Link>
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
                      {...register("firstName", { required: true })}
                    />
                    <br />
                    {errors.firstName && (
                      <span className="text-red-500 font-serif text-xs">
                        first name is required
                      </span>
                    )}
                  </div>

                  <div className="">
                    <label htmlFor="lname">Last Name </label>
                    <br />
                    <input
                      id="lname"
                      type="text"
                      placeholder="Enter your Last Name"
                      className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                      {...register("lastName", { required: true })}
                    />
                    <br />
                    {errors.lastName && (
                      <span className="text-red-500 font-serif text-xs">
                        last name is required
                      </span>
                    )}
                  </div>

                  <div className="">
                    <label htmlFor="number">Phone </label>
                    <br />
                    <input
                      id="number"
                      type="number"
                      placeholder="Enter your Phone Number"
                      className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                      {...register("phone", { required: true })}
                    />
                    <br />
                    {errors.phone && (
                      <span className="text-red-500 font-serif text-xs">
                        contact number is required
                      </span>
                    )}
                  </div>

                  <div className="">
                    <label htmlFor="email">Email </label>
                    <br />
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                      {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                      <span className="text-red-500 font-serif text-xs">
                        Email is required
                      </span>
                    )}
                  </div>

                  <div className="">
                    <label htmlFor="pass">Password </label>
                    <br />
                    <div className="relative">
                      <input
                        id="pass"
                        // type="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                        {...register("password", { required: true })}
                      />
                      {/* <FaEye className=" relative dark:text-black md:left-[290px] md:bottom-7" />
                    <FaEyeSlash className=" relative dark:text-black md:left-[290px] md:bottom-11" /> */}
                      <span
                        onClick={togglePasswordVisibility}
                        className=" cursor-pointer absolute dark:text-black left-[290px] bottom-3"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>

                    <br />
                    {errors.password && (
                      <span className="text-red-500 font-serif text-xs">
                        password is required
                      </span>
                    )}
                  </div>

                  {/* <div className="">
                    <label htmlFor="cpass">Confirm Password </label>
                    <br />
                    <input
                      id="cpass"
                      type="password"
                      placeholder="Confirm your password"
                      className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                      {...register("cpass", { required: true })}
                    />
                    <br />
                    {errors.cpass && (
                      <span className="text-red-500 font-serif text-xs">
                        confirm is required
                      </span>
                    )}
                  </div> */}

                  <button className="mt-5 bg-indigo-800 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg w-80 h-10">
                    Sign up
                  </button>
                  {/* <p className="mt-2">
                    Already have an account?{" "}
                    <span
                      className="underline dark:hover:text-lime-500 cursor-pointer hover:text-lime-500"
                      onClick={Loginhere}
                    >
                      Log-in
                    </span>{" "}
                    now to get started!
                  </p>
                  <LoginOpen /> */}
                </div>
              </div>
            </form>
          </>
        </div>
        <div className=" md:w-1/2  ">
          <img
            className="md:mt-24 mt-4 hidden md:block md:h-[540px]  md:w-[490px] rounded-lg"
            src="https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SignUp;
