import axios from "axios";
import { REG_ERROR, REG_REQUEST, REG_SUCEESS } from "./regActiontype";
const regRequest = () => {
  return {
    type: REG_REQUEST,
  };
};
const regSuccess = (user) => {
  return {
    type: REG_SUCEESS,
    payload: user,
  };
};
const regError = (error) => {
  return {
    type: REG_ERROR,
    payload: error,
  };
};
export const regFunction = (data) => {
  return async (dispatch) => {
    dispatch(regRequest());
    try {
      const checkRes = await axios.get(
        "https://authentication-c86a9-default-rtdb.firebaseio.com/bookUsers.json"
      );
      const resData = checkRes.data;
      const userPresent = Object.values(resData).find(
        (item) => item.email === data.email
      );
      if (userPresent) {
        dispatch(regError("User Already Exist"));
        alert("User Already Exist");
        return
      }
      const response = await axios.post(
        "https://authentication-c86a9-default-rtdb.firebaseio.com/bookUsers.json",
        data
      );
      const idData = response.data;
      dispatch(regSuccess(idData));
    } catch (error) {
      dispatch(regError(error.message));
    }
  };
};
