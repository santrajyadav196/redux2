import classes from "./UserProfile.module.css";
import {useDispatch} from "react-redux";

import {authActions} from "../store/index";

const UserProfile = () => {
  const dispatch = useDispatch();
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
