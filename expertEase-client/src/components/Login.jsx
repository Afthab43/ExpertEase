import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

function LoginOpen() {
  const toNavigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggledVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(data);
    // console.log(userInfo);
    await axios
      .post("http://localhost:4545/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        // alert("login successfully");
        toast.success("login successfull!", {
          position: "top-center",
          style: { zIndex: 100 },
        });
        setTimeout(() => {
          document.getElementById("my_modal_3").close();
          console.log(res.data, "from login successfull");
          setAuthUser(res.data);
          localStorage.setItem("Users", JSON.stringify(res.data)); //local-storage
          toNavigate("/business");
          toast.success("Welcome to Premium page",{duration:5000});
        }, 3000);
      })
      .catch((err) => {
        // alert("Error : " + err);
        if (err.response) {
          console.log(err);
          // alert("Error : " + err.response.data.message);
          toast.error("Error : " + err.response.data.message, {
            position: "top-center",
          });
          setTimeout(() => {}, 3000);
        }
      });
  };

  const closeButton = () => {
    document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <button>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-indigo-700"
                onClick={closeButton}
              >
                ✕
              </Link>
            </button>

            <h3 className="font-bold font-serif text-indigo-700 hover:text-indigo-500 text-2xl">
              Login
            </h3>
            <div className="mt-8 font-serif flex justify-center flex-col items-center">
              <div className="">
                <label htmlFor="Email">Email </label>
                <br />
                <input
                  id="Email"
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

              <div className="mt-5">
                <label htmlFor="pwd">Password </label>
                <br />
                <div className="relative">
                  <input
                    id="pwd"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-80 h-10 px-3 border rounded outline-none focus:shadow dark:text-black"
                    {...register("password", { required: true })}
                  />
                  <span
                    onClick={passwordToggledVisibility}
                    className=" cursor-pointer absolute right-3 top-3 dark:text-black  "
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-500 font-serif text-xs">
                    password field is required
                  </span>
                )}
              </div>

              <div className="mt-3 space-y-3">
                <button className="mt-5 bg-indigo-800 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg">
                  Login
                </button>
                <p className="mt-2">
                  Not Registered?{" "}
                  <Link className="underline hover:text-lime-500" to="/signup">
                    Sign-up
                  </Link>{" "}
                  now to get started!
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default LoginOpen;
