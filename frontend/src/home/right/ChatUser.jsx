import React, { useContext } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { useAuth } from "../../Context/AuthProvider";
import { UserContext } from "../ChatArea/ChatArea";

const ChatUser = () => {
  const { authUser } = useAuth();
  const userContext = useContext(UserContext);
  const selectedUser = userContext?.selectedUser;

  const CurrentUserName = authUser?.user?.fullName || "Paapi Bilota😼";
  const avatarUrl =
    authUser?.user?.avatar ||
    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp";

  const CurrentSelectedUserName = selectedUser?.fullName || "No one selected";
  console.log("CurrentSelectedUserName:", CurrentSelectedUserName);
  

  return (
    <div className="flex items-center justify-between p-6 border-b border-white/ 20 bg-white/5">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/30">
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">
            {CurrentSelectedUserName}
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white/60 text-sm">Online</span>
          </div>
        </div>
      </div>

      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200">
        <IoEllipsisVertical className="w-5 h-5 text-white/60" />
      </button>
    </div>
  );
};

export default ChatUser;
