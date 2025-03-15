import { LOG_OUT, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCEESS } from "./action";
import axios from "axios";
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCEESS,
    payload: user,
  };
};
const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};
export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const checkResponce = await axios.get(
        "https://authentication-c86a9-default-rtdb.firebaseio.com/bookUsers.json"
      );
      const userRes = await checkResponce.data;
      const userPresent = Object.values(userRes).find(
        (item) => item.email == data.email
      );
      if (userPresent) {
        if (userPresent.password == data.password) {
          dispatch(loginSuccess(userPresent));
        } else if (userPresent.password !== data.password) {
          dispatch(loginError("Incorrect Password"));
          alert("Incorrect Password");
        }
      }
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
};
