import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginOpen from "../../src/components/Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function NavBar() {
  //authuser
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  // used to navigate pages from react-router-dom
  const navigate = useNavigate();

  let learnPage = () => {
    navigate("/");
  };

  //toggle dark/light mode

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  //targetting browser root element here
  let element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  let lightMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  let darkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //nav bar to stick on top when scrolling column
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //i have given empty dependency array

  let navItems = (
    <>
      <li>
        <Link
          to="/"
          className="font-medium dark:text-white "
        >
          Learn
        </Link>
      </li>
      <li>
        <Link to="/business" className="font-medium dark:text-white">
          Business
        </Link>
      </li>
      <li>
        <Link to="/about" className="font-medium dark:text-white">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="font-medium dark:text-white">
          Contact
        </Link>
      </li>
    </>
  );
  // click on to login button  will show a modal with form for user to input username and password
  let Loginhere = () => document.getElementById("my_modal_3").showModal();

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 md:fixed top-0 right-0 left-0 z-20 bg-base-200  dark:bg-slate-800 dark:text-white
      ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 duration-300 transistion-all ease-in-out dark:bg-slate-900 dark:text-white dark:drop-shadow-2xl "
          : "bg-base-200 shadow-md"
      }`}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  dark:bg-slate-800 dark:text-white dark:border"
              >
                {navItems}
              </ul>
            </div>
            <a
              onClick={learnPage}
              className=" text-2xl font-bold cursor-pointer  text-indigo-700  dark:text-lime-400 font-serif"
            >
              ExpertEase
            </a>
          </div>
          <div className="navbar-end space-x-2 ">
            <div className="navbar-center hidden lg:flex ">
              <ul className="menu menu-horizontal px-1 lg:-ml-4 md:-ml-10">{navItems}</ul>
            </div>
            {/* search bar label */}
            <div className="hidden md:block">
              <label className="px-2 py-1 border rounded-lg flex items-center gap-2">
                <input
                  type="text"
                  className={`grow outline-none  dark:bg-slate-800 dark:text-white  bg-base-200 ${
                    sticky
                      ? " dark:bg-slate-900 dark:text-white duration-300 "
                      : " dark:bg-slate-800 dark:text-white duration-0 "
                  } `}
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            {/* dark mode /light mode */}

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={lightMode}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={darkMode}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/* here when logged in it shows the logout button */}
            {authUser ? (
              <Logout />
            ) : (
              <div className="">
                <a
                  className="text-base bg-black text-white px-4 py-1 rounded-lg hover:text-lime-500 duration-300 cursor-pointer"
                  onClick={Loginhere}
                >
                  Login
                </a>
                <LoginOpen />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
