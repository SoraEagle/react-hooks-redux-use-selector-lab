import React from "react";
import {useSelector} from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users);
  const userCount = useSelector((state) => state.users.length);
  return (
    <div>
      <ul>
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
      Total Users: {userCount}
    </div>
  );
}

export default Users;