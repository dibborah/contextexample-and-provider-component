import BasicDetails from "./BasicDetails";
import { MyAuth } from "./AuthProvider";

const UserProfile = () => {
  const { auth, setAuth } = MyAuth();
  function handleLogin() {
    setAuth({username: "dibya", email: "dibya123@yopmail.com"})
  } 
  return (
    <div>
      <h1>UserProfile</h1>
      {auth.username ? <BasicDetails /> : <button onClick={handleLogin}>Login</button>}
    </div>
  );
};

export default UserProfile;
