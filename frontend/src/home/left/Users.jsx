import React, { createContext, useState, useEffect } from "react";
import User from "./User";
import api from "../../utils/axios";

// Create Context outside the component
export const UserContext = createContext();

const Users = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch current user from localStorage
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

  // Fetch all users except current user
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
      <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
        {registeredUser.map((user, index) => (
          <User key={user._id || index} user={user} />
        ))}
      </UserContext.Provider>

      <div className="text-center text-white/60 mt-4">
        {registeredUser.length === 0 ? "No users found" : ""}
      </div>
    </div>
  );
};

export default Users;
