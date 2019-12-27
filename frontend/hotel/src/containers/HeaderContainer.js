import React from "react";
import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import LogOut from "../components/LogOut";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getHallsThunk,
  addHallThunk,
  deleteHallThunk
} from "../reducers/hallReducer";
import { signInThunk, signUpThunk } from "../reducers/usersReducer";

const HeaderContainer = props => {
  const currentUser = localStorage.getItem("token");
  console.log(currentUser);
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
          <li>
            <a>
              <LogOut />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = {
  getHallsThunk,
  addHallThunk,
  deleteHallThunk,
  signInThunk,
  signUpThunk
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
);
