import React from "react";
import SignInForm from "./SignInForm";
class SignIn extends React.Component {
  state = {
    SignInFormIsOpen: false,
    EmailInput: "",
    PasswordInput: ""
  };

  addSignInForm = () => {
    this.setState({ SignInFormIsOpen: true });
  };

  onChangeEmailInput = e => {
    this.setState({ EmailInput: e.target.value });
  };
  onChangePasswordInput = e => {
    this.setState({ PasswordInput: e.target.value });
  };
  SignInSubmit = e => {
    e.preventDefault();
    this.props.signInThunk(this.state.EmailInput, this.state.PasswordInput);
  };
  refresh = () => {
    window.location.reload();
  };
  currentUser = localStorage.getItem("token");
  render() {
    return (
      <div>
        {this.currentUser ? (
          ""
        ) : (
          <button
            className="waves-effect waves-light btn"
            onClick={()=>this.addSignInForm()}
            
          >
            SignIn
          </button>
        )}
        {this.state.SignInFormIsOpen === true ? (
          <SignInForm
            ChangeEmailInput={this.onChangeEmailInput}
            EmailValue={this.state.EmailInput}
            ChangePasswordInput={this.onChangePasswordInput}
            PasswordValue={this.state.PasswordInput}
            Submit={this.SignInSubmit}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default SignIn;
