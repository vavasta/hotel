import React, { useEffect } from "react";
import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import LogOut from "../components/LogOut";
import { withRouter } from "react-router-dom";
import {
  getHallsThunk,
  addHallThunk,
  deleteHallThunk
} from "../reducers/hallReducer";
import { getTicketsThunk } from "../reducers/ticketsReducer";
import { signInThunk, signUpThunk, reLogin } from "../reducers/usersReducer";

const HeaderContainer = props => {
  useEffect(() => {
    props.getTicketsThunk();
    const token = localStorage.getItem("token");
    const _id = localStorage.getItem("userId");
    const isAdmin = localStorage.getItem("isAdmin");
    const user = { token, _id, isAdmin };
    props.reLogin(user);
  }, []);
  const currentUser = props.user.user;
  console.log("currentUser", currentUser);
  return (
    <nav>
      <div className="container nav-wrapper">
        <a onClick={() => props.history.push("/halls")} className="brand-logo">
          VAL'S BOOKING
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a onClick={() => props.history.push("/tickets")}>Tickets</a>
          </li>
          {currentUser && currentUser.token ? (
            <li>
              <a>
                <LogOut />
              </a>
            </li>
          ) : (
            <>
              <li>
                <a className="dropdown-trigger" data-target="dropdown1">
                  {" "}
                  <SignIn {...props} />
                </a>
              </li>
              <li>
                <a>
                  <SignUp {...props} />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  getHallsThunk,
  addHallThunk,
  deleteHallThunk,
  signInThunk,
  signUpThunk,
  getTicketsThunk,
  reLogin
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
);
