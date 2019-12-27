import { requestHttp } from "../api/api";
import axios from "axios";
const initialState = {
  users: null
};

//REDUCER///

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN-UP":
      return {
        ...state,
        users: action.payload
      };

    case "SIGN-IN":
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

//ACTIONS CREATOR

const signUp = res => ({ type: "SIGN-UP", payload: res });
const signIn = res => ({ type: "SIGN-IN", payload: res });

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
  const email = signInEmail;
  const password = signInPassword;
  // const adminsid = "5e01e6c01217a3347c0fe7ae";
  const isAdmin = true;
  const res = await requestHttp.signIn(email, password, isAdmin).then(res => {
    dispatch(signIn(res.data.token));
    console.log("STORAGE", res.data);
    localStorage.setItem("isAdmin", res.data.isAdmin);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userId", res.data._id);
  });
};
export default usersReducer;
