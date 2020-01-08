import React from "react";
import SignUpForm from "./SignUpForm";

class SignUp extends React.Component {
  state = {
    SignUpFormIsOpen: false,
    SignUpEmailInput: "",
    SignUpPasswordInput: "",
    Admin: false
  };
  addSignUpForm = () => {
    this.setState({ SignUpFormIsOpen: true });
  };

  onChangeEmailInput = e => {
    this.setState({ SignUpEmailInput: e.target.value });
  };
  onChangePasswordInput = e => {
    this.setState({ SignUpPasswordInput: e.target.value });
  };
  Admin = e => {
    this.setState({ Admin: true });
  };
  SignUpSubmit = e => {
    this.props.signUpThunk(
      this.state.SignUpEmailInput,
      this.state.SignUpPasswordInput,
      this.state.Admin
    );
  };
  currentUser = localStorage.getItem("token");
  render() {
    return (
      <div>
      
          <button
            className="waves-effect waves-light btn"
            onClick={this.addSignUpForm}
          >
            SignUp
          </button>
      
        {this.state.SignUpFormIsOpen === true ? (
          <SignUpForm
            ChangeEmailInput={this.onChangeEmailInput}
            EmailValue={this.state.SignUpEmailInput}
            ChangePasswordInput={this.onChangePasswordInput}
            PasswordValue={this.state.SignUpPasswordInput}
            Submit={this.SignUpSubmit}
            Admin={this.Admin}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default SignUp;
