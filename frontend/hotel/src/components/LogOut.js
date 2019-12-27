import React from "react";

class LogOut extends React.Component {
  LogOutFunction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };
  currentUser = localStorage.getItem("token");
  render() {
    return (
      <div>
        {this.currentUser ? (
          <button
            className="waves-effect waves-light btn"
            onClick={this.LogOutFunction}
          >
            LogOut
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default LogOut;
