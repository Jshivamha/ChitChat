import React from "react";
import Search from "./Search";
import Users from "./Users";
import { useAuth } from "../../Context/AuthProvider";

const Left = () => {
  const { authUser } = useAuth();

  return (
    <div className="w-[25%] bg-black border-r border-white/20 flex flex-col">
      <div className="p-6 border-b border-white/20">
        <h1 className="text-3xl font-bold text-white">
          🐽
          <span className="font-semibold">
            {authUser?.user?.fullName.split(" ")[0]}
          </span>
        </h1>
        <p className="text-white/60 text-sm mt-1">{authUser?.user?.email}</p>
      </div>

      <Search />

      <div className="flex-1 overflow-hidden">
        <Users />
      </div>
    </div>
  );
};

export default Left;
