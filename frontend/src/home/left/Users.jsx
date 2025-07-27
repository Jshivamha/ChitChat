import React from "react";
import User from "./User";

const Users = () => {
  // Just duplicating User component for demo purpose
  const userList = Array.from({ length: 10 });

  return (
    <div className="h-full overflow-y-auto px-4 pb-4">
      <div className="space-y-2">
        {userList.map((_, i) => (
          <User key={i} />
        ))}
      </div>
    </div>
  );
};

export default Users;
