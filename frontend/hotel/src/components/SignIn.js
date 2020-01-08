import React from "react";
import SignInForm from "./SignInForm";
import { Button, Icon, notification, Divider } from "antd";
class SignIn extends React.Component {
  state = {
    SignInFormIsOpen: false,
    EmailInput: "",
    PasswordInput: "",
    showHello: false
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
    this.props.history.push("/halls");
    this.setState({ showHello: true });
  };
  refresh = () => {
    window.location.reload();
    this.props.history.push("/tickets");
  };
  openNotification = placement => {
    notification.info({
      message: `Hello!`,
      description:
        "Thank you for using VAL'S BOOKING",
      placement
    });
  };
  render() {
    const currentUser = this.props.user;
    console.log("USER", currentUser);
    return (
      <div>
        <button
          className="waves-effect waves-light btn"
          onClick={() => this.addSignInForm()}
        >
          SignIn
        </button>

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
        {this.state.showHello === true ? this.openNotification("topRight") : ""}
      </div>
    );
  }
}
export default SignIn;
