import React from "react";

function SignInForm(props) {
  return (
    <div className="signInForm">
      <form>
        <p>Email</p>
        <input
          className="signinemail"
          onChange={props.ChangeEmailInput}
          value={props.EmailValue}
        />
        <p>Password</p>
        <input
          type="password"
          className="signinpassword"
          onChange={props.ChangePasswordInput}
          value={props.PasswordValue}
        />
        <button className="btn waves-effect waves-light" onClick={props.Submit}>
          Sign In
        </button>
      </form>
    </div>
  );
}
export default SignInForm;
