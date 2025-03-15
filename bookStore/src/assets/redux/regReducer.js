import { REG_ERROR, REG_REQUEST, REG_SUCEESS } from "./regActiontype";

const initialstate = {
  loading: false,
  user: JSON.parse(localStorage.getItem("username")),
  error: null,
  isLog: false,
};
export function regReducer(state = initialstate, action) {
  switch (action.type) {
    case REG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REG_SUCEESS:
      localStorage.setItem("username", JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLog: true,
      };
    case REG_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        isLog: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
