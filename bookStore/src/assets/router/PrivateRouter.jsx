import { useSelector } from "react-redux";
import Login from "../components/Login";

const PrivateRouter = ({ children }) => {
  const { isLog, user } = useSelector((state) => state.loginUser);

  return isLog || user ? children : <Login />;
};

export default PrivateRouter;
