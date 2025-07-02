import React from "react";

const UserCard = ({ user }) => {
  if (!user) {
    return null; // Prevent rendering if user data is missing
  }

  return (
    <div className="col-md-4 my-2">
      <div className="card shadow-sm border-0">
        <img
          src={user.avatar_url || "https://via.placeholder.com/150"}
          className="card-img-top img-fluid rounded-circle p-3"
          alt={user.login || "Github User"}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{user.login || "Unknown User"}</h5>
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
