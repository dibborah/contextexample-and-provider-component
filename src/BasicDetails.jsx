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

// hooks I learned and need to learn

// useState

// useEffect
// useInsertionEffect
// useLayoutEffect

// useRef
// useForwardRef

// useReducer(dispatch)
// useContext (createContext)

// useMemo
// useCallback

// useImperativeHandle
// useId
// useTransition

// useDebugValue
// useDeferredValue

// useSyncExternalStore



