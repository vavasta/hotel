import React from "react";
import { type } from "os";
import Hall from "./Hall";

class Halls extends React.Component {
  state = {
    RoomName: "",
    Description: "",
    imageUrl: null
  };

  onChangeRoomNameInput = e => {
    this.setState({ RoomName: e.target.value });
  };
  onChangeDescription = e => {
    this.setState({ Description: e.target.value });
  };

  AddNewRoom = e => {
    this.props.addHallThunk(
      this.state.RoomName,
      this.state.Description,
      this.state.imageUrl
    );
  };
  DeleteRoom = idToDelete => {
    console.log("IDTODELETE", idToDelete);
    const arr = this.props.halls;
    this.props.deleteHallThunk(idToDelete, arr);
  };

  // handleChange(event) {
  //   this.setState({
  //     file: URL.createObjectURL(event.target.files[0])
  //   });
  //   console.log("HALLSFILE", this.state.file);
  // }
  // handleChange = this.handleChange.bind(this);
  _onChange = e => {
    const file = this.refs.uploadImg.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        imageUrl: reader.result
      });
    } else {
      this.setState({
        imageUrl: ""
      });
    }
  };
  onOkHalls = value => {
    this.props.addTicketThunk(value);
  };
  render() {
    console.log("this.props.user.user.isAdmin", this.props.user.user.isAdmin);
    return (
      <div className="container">
        {this.props.user.user.isAdmin === true ||
        this.props.user.user.isAdmin === "true" ? (
          <div className="card-panel hoverable ">
            <img className="activator" src={this.state.imageUrl} />
            <p>Room Name</p>
            <input
              onChange={this.onChangeRoomNameInput}
              value={this.state.RoomName}
              className="roomnameinput"
            ></input>
            <p>Description</p>
            <input
              onChange={this.onChangeDescription}
              value={this.state.Description}
              className="roomdescription"
            ></input>

            <input
              ref="uploadImg"
              type="file"
              name="selectedFile"
              className="autocomplete"
              onChange={this._onChange}
            />

            <button
              className=" card-panel teal lighten-2 addhallbutton "
              onClick={this.AddNewRoom}
            >
              Add Hall +
            </button>
          </div>
        ) : (
          ""
        )}
        {this.props.halls.halls.map(hall => (
          <Hall
            {...this.props}
            key={hall._id}
            title={hall.title}
            buttonsId={hall._id}
            description={hall.description}
            imageURL={hall.imageURL}
            DeleteRoom={this.DeleteRoom}
            from={hall.from}
            to={hall.to}
          />
        ))}
      </div>
    );
  }
}
export default Halls;
