import React, { useState, useEffect, useContext } from "react";
import User from "./User";
import api from "../../utils/axios";
import { UserContext } from "../ChatArea/ChatArea";

const Users = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState([]);
  const { selectedUser, setSelectedUser } = useContext(UserContext);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const userData = localStorage.getItem("messanger");
      const parsedUser = userData ? JSON.parse(userData) : null;
      if (parsedUser) {
        setCurrentUser(parsedUser);
        console.log("Current user email:", parsedUser.user.email);
      }
    };
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const res = await api.get("/user/getalluser");
        const registeredUserData = res.data.filter(
          user => user.email !== currentUser?.user?.email
        );
        setRegisteredUser(registeredUserData);
        console.log("Users fetched successfully:", registeredUserData);
      } catch (err) {
        console.error("Failed to fetch users", err.response?.data || err.message);
      }
    };

    if (currentUser) {
      fetchRegisteredUsers();
    }
  }, [currentUser]);

  return (
    <div className="h-full overflow-y-auto px-4 pb-4">
      {registeredUser.map((user, index) => (
        <User key={user._id || index} user={user} />
      ))}

      <div className="text-center text-white/60 mt-4">
        {registeredUser.length === 0 ? "No users found" : ""}
      </div>
    </div>
  );
};

export default Users;
