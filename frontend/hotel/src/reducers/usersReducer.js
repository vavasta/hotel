import { requestHttp } from "../api/api";
import axios from "axios";
const initialState = {
  user: false
};

//REDUCER///

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN-UP":
      return {
        ...state,
        user: action.payload
      };

    case "SIGN-IN": {
      return {
        user: action.payload
      };
    }
    case "RE-LOGIN": {
      return {
        user: action.payload
      };
    }
    case "SIGN-OUT":
      return initialState;
    default:
      return state;
  }
};

//ACTIONS CREATOR

const signUp = res => ({ type: "SIGN-UP", payload: res });
const signIn = res => ({ type: "SIGN-IN", payload: res });
 
export const reLogin = res => ({ type: "RE-LOGIN", payload: res });
//USERS THUNK

export const signUpThunk = (
  signUpEmail,
  signUpPassword,
  admin
) => async dispatch => {
  const email = signUpEmail;
  const password = signUpPassword;
  // const id = "5e01dfa6e9a7842f42825197";
  const isAdmin = admin;
  const res = await requestHttp.signUp(email, password, isAdmin);
  dispatch(signUp(res));
  console.log("");
};
export const signInThunk = (signInEmail, signInPassword) => async dispatch => {
  const res = await requestHttp.signIn(signInEmail, signInPassword, true);
  dispatch(signIn(res.data));
  localStorage.setItem("isAdmin", res.data.isAdmin);
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("userId", res.data._id);
};
export default usersReducer;
