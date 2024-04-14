import { Fragment } from "react";
import { MyAuth } from "./AuthProvider";

const BasicDetails = () => {
  const { auth, setAuth } = MyAuth();
  const handleLogout = () => {
    setAuth({});
  }
  return (
    <Fragment>
      <h2>username: {auth.username}</h2>
      <button onClick={handleLogout}>Logout</button>
    </Fragment>
  );
};

export default BasicDetails;
