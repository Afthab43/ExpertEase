import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";

import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const [userDetails, setUserDetails] = useState(false);

  let detailsFunc = () => {
    setUserDetails(!userDetails);
  };

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("logout success");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      // window.location.reload();
    } catch (error) {
      toast.error("error" + error.message);
    }
  };

  const fname = authUser.user.firstName.slice(0, 1).toUpperCase();
  const lname = authUser.user.lastName.slice(0, 1).toUpperCase();

  const firstLetter = (
    <div className="flex gap-1">
      <p>{fname}</p> <p>{lname}</p>
    </div>
  );

  // const userName = fname + " " + lname;
  // console.log(userName);

  let userDetailsInfo = (
    <div className="container absolute right-6 md:right-[-14px] lg:right-[-114px]  h-auto w-auto lg:w-[300px] rounded-lg mt-[2px] py-2  dark:bg-slate-800  drop-shadow-2xl shadow-slate-900 bg-slate-50 dark:border">
      <ul className="px-2">
        <li>
          <button className="flex justify-center w-auto px-1 py-1 text-black">
            <span className="flex gap-2 justify-center items-center dark:text-white">
              <FaUser /> {authUser.user.firstName} {authUser.user.lastName}
            </span>
          </button>
        </li>
        <hr />
        <li>
          <button className=" flex justify-center w-auto px-1 py-1 text-black">
            <span className="flex gap-2 justify-center items-center dark:text-white ">
              <IoMdMail /> {authUser.user.email}
            </span>
          </button>
        </li>
        <hr />
        <li>
          <button className="flex justify-center w-auto px-1 py-1 text-black ">
            <span className="flex gap-2 justify-center items-center dark:text-white">
              <IoIosSettings />
              Settings
            </span>
          </button>
        </li>
        <hr />
        <li className="flex items-center justify-center pt-2">
          <button
            className=" bg-red-500 text-white rounded-lg  px-2 py-1 "
            onClick={handleLogout}
          >
            <span className="">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <button
        className="flex px-[8px] py-[10px] rounded-badge w-auto bg-black text-white  cursor-pointer hover:text-lime-500 hover:bg-black duration-300"
        onClick={detailsFunc}
      >
        {/* only two chara3cters available here */}
        {/* {userName} */}
        {firstLetter}
        {/* first name of the user */}
        {/* {authUser.user.firstName} */}
      </button>
      {userDetails ? userDetailsInfo : <></>}
    </div>
  );
}

export default Logout;
