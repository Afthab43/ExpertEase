import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

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
        // localStorage.setItem("Users", JSON.stringify(res.data)); //local-storage
      }, 3000);
      // window.location.reload();
    } catch (error) {
      toast.error("error" + error.message);
    }
  };
  return (
    <div>
      <button
        className="px-4 py-1 bg-red-500 text-white rounded-lg cursor-pointer hover:text-red-500 hover:bg-slate-700 duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
