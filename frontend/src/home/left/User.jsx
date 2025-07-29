import React, { useContext } from "react";
import { UserContext } from "../ChatArea/ChatArea";
import { useAuth } from "../../Context/AuthProvider";

const User = ({ user }) => {
  const { setSelectedUser } = useContext(UserContext);
  const { authUser } = useAuth(); 

  const handleClick = () => {
    console.log("handleClick called with user:", user);
    setSelectedUser(user);
  };

  if (authUser?.user?._id === user?._id) return null;

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group-hover:shadow-lg hover-lift">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-200">
            <img
              src={user?.avatar || "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white border-2 border-black rounded-full animate-pulse"></div>
        </div>

        <div className="ml-4 flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate">{user?.fullName || "Unknown"}</h3>
          <p className="text-white/60 text-sm truncate">{user?.email || "No email"}</p>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-xs text-white/40">2m ago</span>
          <div className="w-2 h-2 bg-white rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default User;
