import React from "react";
import { DatePicker, message } from "antd";
import moment from "moment";
// import "antd/dist/antd.css";
// import "./index.css";

class Hall extends React.Component {
  state = {
    value: ""
  };
  onChange(value, dateString) {}
  onOk = value => {
    this.setState({ value: value });
  };
  bookIt = () => {
    this.props.addTicketThunk(
      this.state.value,
      this.props.buttonsId,
      this.props.title
    );
  };

  disabledDate = current => {
    console.log("CURRRR", current);

    // Can not select days before today and today

    return (
      // current && current < moment().endOf("day") && this.disablechecked(current)
      this.disablechecked(current)
    );
  };
  disablechecked = data => {
    const from = this.props.from;
    const to = this.props.to;
    console.log("FROOOM", from);
    return moment(data).isBetween(from, to);
  };
  render() {
    const { RangePicker } = DatePicker;
    console.log("RANFEPICKER", RangePicker);
    return (
      <div className=" card-panel hoverable">
        <img className="activator" src={this.props.imageURL}></img>
        <br></br>
        {this.props.title}
        <br></br>
        <br></br>
        {this.props.description}
        {localStorage.getItem("isAdmin") === "true" ? (
          <button
            className="  deletehallbutton "
            onClick={() => this.props.DeleteRoom(this.props.buttonsId)}
          >
            Delete
          </button>
        ) : (
          <div className="bookitcontainer">
            <div>
              <br />
              <RangePicker
                disabledDate={this.disabledDate}
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                placeholder={["Start Time", "End Time"]}
                onChange={this.onChange}
                onOk={this.onOk}
              />
            </div>
            <button className="  bookit " onClick={this.bookIt}>
              Book It
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Hall;
