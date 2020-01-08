import React from "react";
import { DatePicker, message } from "antd";
import moment from "moment";
import { Alert, Button, Icon, notification, Divider } from "antd";
// import "antd/dist/antd.css";
// import "./index.css";
import Error from "../components/Error";
class Hall extends React.Component {
  state = {
    value: "",
    isOpen: true,
    notification: false,
    noAuthority: true
    // valuearr: []
  };
  onChange(value, dateString) {
    return value && value < moment().endOf("day");
  }
  onOk = dates => {
    this.setState({
      // valuearr: [
      //   ...this.state.valuearr,
      //   {
      //     from: dates[0],
      //     to: dates[1]
      //   }
      // ]
      value: dates
    });
    this.setState({ isOpen: false });
    this.setState({ value: dates });
    console.log("valuearr", this.state.valuearr);
    localStorage.setItem("arr", JSON.stringify(this.state.valuearr));
  };
  bookIt = () => {
    this.props.addTicketThunk(
      this.state.value,
      this.props.buttonsId,
      this.props.title
    );
    // this.setState({ notification: true });
    if (this.props.user.user.token) {
      this.openSucessNotification();
    }
  };

  disabledDate = day => {
    return moment().add(-1, "days") >= day || moment().add(1, "month") <= day;
  };
  disablechecked = day => {
    let isDisabled = false;
    const valuearr = this.props.tickets.tickets;
    valuearr &&
      valuearr.length > 0 &&
      valuearr.forEach(_day => {
        if (
          moment(day).isBetween(
            moment.unix(_day.from),
            moment.unix(_day.to),
            "day"
          )
        ) {
          isDisabled = true;
        }
      });

    // const isDisalbed = this.state.value.reduce((current, next) => {
    //   console.log(
    //     "d",
    //     moment(day).isBetween(moment(next.from), moment(next.to), "day")
    //   );
    //   console.log("c", current);

    //   return (
    //     current &&

    //   );
    // }, true);

    // console.log(isDisalbed);
    // console.log(day);
    this.disabledDate(day);
    return isDisabled || this.disabledDate(day);

    // return moment(current).isBetween(from, to);
  };

  //////////////////////////////////
  /////////////////////////////////////
  //////////////////////////////////////
  ///////////////////////////////////////

  /////////////////////////////////////////
  ////////////////////////////////////////////
  /////////////////////////////////////
  showError = () => {
    alert("No Authurity");
  };
  showErrorTwo = () => {
    alert("No Authurity");
  };
  openNotification = placement => {
    notification.info({
      message: `No Authurity `,
      description:
        "Please either Sign In if you already registered or Sign Up if you don't have an account",
      placement
    });
  };
  openSucessNotification = placement => {
    notification.info({
      message: `Congrats! `,
      description: "Please check your 'Tickets' to complete booking!",
      placement
    });
  };
  render() {
    const { RangePicker } = DatePicker;
    return (
      <div className=" card-panel hoverable">
        <img className="activator" src={this.props.imageURL}></img>
        <br></br>
        {this.props.title}
        <br></br>
        <br></br>
        {this.props.description}
        {this.props.user.user.isAdmin === true ||
        this.props.user.user.isAdmin === "true" ? (
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
                disabledDate={this.disablechecked}
                // disabled={this.disabledDate}
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                placeholder={["Start Time", "End Time"]}
                onChange={this.onChange}
                onOk={this.onOk}
              />
            </div>
            <button
              className="  bookit "
              onClick={this.bookIt}
              disabled={this.state.isOpen}
            >
              Book It
            </button>
            {this.props.tickets.error === "No authority" &&
              this.openNotification("topRight")}
          </div>
        )}
      </div>
    );
  }
}
export default Hall;
