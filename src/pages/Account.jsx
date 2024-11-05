import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

import { useAuth } from "../AuthContext";
import NSWBg from "../img/NSW-Government-bg.svg";
import logo from "../img/logo.png";

export default function Account() {
  const { signOut, user } = useAuth();

  const handleSignOut = async () => {
    signOut();
  };

  return (
    <div className="w-full h-screen md:bg-[#FBE9E9] md:flex md:items-center md:justify-center ">
      <div className="w-full md:w-[50%] lg:w-[60%] lg:flex md:rounded-xl bg-white justify-center px-6 md:px-10 py-8">
        <div className="lg:basis-1/2">
          <div className="w-2/3 mx-auto">
            <img src={logo} alt="" className="mb-8" />
          </div>
          <div className="h-[450px] relative">
            <div className="flex items-center gap-2">
              <FaUserCircle size={40} color="#013e7f" />
              <p className="text-[#013e7f]"> {user?.email}</p>
            </div>
            <div className="p-12">
              <p className="text-gray-800 font-semibold text-lg">
                Welcome to your account!
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 absolute left-3 bottom-4"
            >
              <FaSignOutAlt size={30} color="#013e7f" />
              <p>Sign out</p>
            </button>
          </div>
        </div>

        <div className="hidden lg:block basis-1/2 relative">
          <img src={NSWBg} className="w-80 absolute -bottom-5 -right-10" />
        </div>
      </div>
    </div>
  );
}
