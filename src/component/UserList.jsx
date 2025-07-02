import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users = [] }) => {
  return (
    <div className="row justify-content-center">
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <div className="col-12 text-center">
          <p className="text-muted">No users found</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
