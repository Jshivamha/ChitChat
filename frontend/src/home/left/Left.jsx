import React, { useEffect, useState } from "react";
import Search from "./Search";
import Users from "./Users";
import api from "../../utils/axios";

const Left = () => {
  const [user, setUser] = useState(null);
  const [name, setname] = useState(null);
  const [registeredUser, setregisteredUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const userData = localStorage.getItem("messanger");
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setname(parsedUser.user.fullName.split(" ")[0]);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const registeeredUser = async () => {
      try {
        // console.log('Making request to getalluser...');
        // console.log('Current cookies:', document.cookie);
        
        const res = await api.get("/user/getalluser");
        const registeredUserData = res.data;
        setregisteredUser(registeredUserData);
        // console.log('Users fetched successfully:', res.data);
        
      } catch (err) {
        console.error("Failed to fetch users", err.response?.data || err.message);
        console.error("Error status:", err.response?.status);
      }
    };
    registeeredUser();
  }, []);

  // console.log(registeredUser);

  return (
    <div className="w-[25%] bg-black border-r border-white/20 flex flex-col">
      <div className="p-6 border-b border-white/20">
        <h1 className="text-3xl font-bold text-white">
          🐽<span className="font-semibold">{name}</span>
        </h1>
        <p className="text-white/60 text-sm mt-1">Connect with friends</p>
      </div>
      <Search />
      <div className="flex-1 overflow-hidden">
        <Users />
      </div>
    </div>
  );
};

export default Left;
