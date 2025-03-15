import { LOG_OUT, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCEESS } from "./action";

const initialstate = {
  loading: false,
  user: JSON.parse(localStorage.getItem("username")),
  error: null,
  isLog: JSON.parse(localStorage.getItem("isLog")),
};
export function reducer(state = initialstate, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCEESS:
      localStorage.setItem("username", JSON.stringify(action.payload));
      localStorage.setItem("isLog", (true));
      return {
        ...state,
        loading: false,
        isLog: true,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        isLog: false,
        error: action.payload,
      };
    case LOG_OUT:
      localStorage.removeItem("username");
      localStorage.removeItem("isLog");
      return {
        ...state,
        loading: false,
        user: null,
        isLog: false,
        error: null,
      };
    default:
      return state;
  }
}
