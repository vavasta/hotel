import React from "react";

function SignUpForm(props) {
  return (
    <div className="signInForm">
      <form>
        <p>Email</p>
        <input
          className="signupemail"
          onChange={props.ChangeEmailInput}
          value={props.EmailValue}
        />
        <p>Password</p>
        <input
          type="password"
          className="signuppassword"
          onChange={props.ChangePasswordInput}
          value={props.PasswordValue}
        />
        <p></p>
        <label for="admin">Admin</label>
        <input
          id="admin"
          type="checkbox"
          className="checkbox"
          onClick={props.Admin}
        />
        <br></br>
        <button className="btn waves-effect waves-light" onClick={props.Submit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default SignUpForm;
