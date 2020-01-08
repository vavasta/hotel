import React from "react";

class LogOut extends React.Component {
  LogOutFunction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };
  render() {
    return (
      <div>
        <button
          className="waves-effect waves-light btn"
          onClick={this.LogOutFunction}
        >
          LogOut
        </button>
      </div>
    );
  }
}
export default LogOut;
