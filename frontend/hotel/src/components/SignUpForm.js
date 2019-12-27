import React from "react";

function SignUpForm(props) {
  return (
    <form>
      <p>Email</p>
      <input
        className="signupemail"
        onChange={props.ChangeEmailInput}
        value={props.EmailValue}
      />
      <p>Password</p>
      <input
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
      <button className="signupbutton" onClick={props.Submit}>
        Sign Up
      </button>
    </form>
  );
}
export default SignUpForm;
