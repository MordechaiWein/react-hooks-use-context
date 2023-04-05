import React, { useContext } from "react";
import { UserContext } from "./user";
import Interests from "./Interests";

function Profile() {

  const hello = useContext(UserContext)

  if (!hello) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{hello}'s Profile</h2>
     { /* <Interests interests={user.interests} theme={theme} /> */}
    </div>
  );
}

export default Profile;
