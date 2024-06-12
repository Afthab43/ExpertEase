import { useAuth } from "../context/AuthProvider";

function ProfilePicture() {
  const [authUser] = useAuth();

  const fname = authUser.user.firstName.slice(0, 1).toUpperCase();
  const lname = authUser.user.lastName.slice(0, 1).toUpperCase();

  const username = (
    <div className="flex gap-1">
      <p>{fname}</p> <p>{lname}</p>
    </div>
  );

  const fullName = (
    <div className="flex gap-2  hover:text-blue-500 hover:dark:text-lime-500 italic ease-in-out duration-200">
      <h1>{authUser.user.firstName} </h1> <h1>{authUser.user.lastName}</h1>
    </div>
  );

  const emailId = (
    <h1 className="italic hover:text-blue-500 hover:dark:text-lime-500 ease-in-out duration-200">
      {authUser.user.email}
    </h1>
  );
  const phoneNumber = (
    <div className="italic hover:text-blue-500 hover:dark:text-lime-500 ease-in-out duration-200">
      {authUser.user.phone}
    </div>
  );
  let userDetailsInfo = (
    <div className="text-lg lg:text-4xl pt-4  text-black  dark:text-white">
      <div className=" right-6 md:right-[-14px] lg:right-[-114px]   lg:w-[300px] mt-[2px] py-2  ">
        <ul className="px-2 flex flex-col gap-3 ">
          <li>
            <button className="flex justify-center w-auto px-1 py-1">
              <span className="">
                <h1 className="flex gap-2 ">Name: {fullName}</h1>
              </span>
            </button>
          </li>
          <hr />
          <li>
            <button className=" flex justify-center w-auto px-1 py-1">
              <span className="  ">
                <h1 className="flex gap-2 ">Email: {emailId}</h1>
              </span>
            </button>
          </li>
          <hr />
          <li>
            <button className="flex justify-center w-auto px-1 py-1 ">
              <span className=" ">
                <h1 className="flex gap-2">Phone: {phoneNumber}</h1>
              </span>
            </button>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
  return (
    <>
      <div className="">
        <div className={`avatar  ${authUser ? "online" : "offline"}`}>
          <div className=" w-60 border border-black dark:border-slate-400 rounded-full  dark:hover:bg-black ease-in-out duration-200">
            <h1 className="flex items-center justify-center py-16 dark:text-slate-300 hover:dark:text-lime-500 ease-in-out duration-300">
              {authUser ? username : "No User"}
            </h1>
          </div>
        </div>
      </div>

      {userDetailsInfo}
    </>
  );
}

export default ProfilePicture;
