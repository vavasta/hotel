import React from "react";
import moment from "moment";
import { DatePicker, message } from "antd";
const { MonthPicker, RangePicker } = DatePicker;
class Ticket extends React.Component {
  state = {
    value: ""
  };
  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  disabledDate(current) {
    // Can not select days before today and today
    console.log("CURRRR", current);
    return current && current < moment().endOf("day");
  }
  disabledDateTime() {
    return {
      disabledHours: () => this.range(0, 24).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56]
    };
  }

  // disabledRangeTime(_, type) {
  //   if (type === "start") {
  //     return {
  //       disabledHours: () => this.range(0, 60).splice(4, 20),
  //       disabledMinutes: () => this.range(30, 60),
  //       disabledSeconds: () => [55, 56]
  //     };
  //   }
  //   return {
  //     disabledHours: () => this.range(0, 60).splice(20, 4),
  //     disabledMinutes: () => this.range(0, 31),
  //     disabledSeconds: () => [55, 56]
  //   };
  // }
  // const EditTicket = (ticketId) => {

  // }
  onChange(value, dateString) {}
  onOk = value => {
    this.setState({ value: value });
  };
  updateTicket = ticketId => {
    this.props.updateTicketThunk(this.state.value, ticketId, this.props.title);
  };
  deleteTicket = ticketId => {
    const arr = this.props.arr;
    this.props.deleteTicketThunk(ticketId, arr);
  };
  render() {
    const from = this.props.from;
    console.log("PROOOOOOOOPS", this.props);
    const converted_date_from = moment.unix(from).format("LLLL");
    const to = this.props.to;
    const converted_date_to = moment.unix(to).format("LLLL");
    const { RangePicker } = DatePicker;
    return (
      <div className="container">
        <div className="card-panel hoverable ">
          <p>Room Name</p>
          {this.props.title}
          <br></br>
          {converted_date_from}
          <br></br>
          {converted_date_to}
          {/* <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={this.disabledDate}
            disabledTime={this.disabledDateTime}
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
          />
          <br />
          <MonthPicker
            disabledDate={this.disabledDate}
            placeholder="Select month"
          /> */}
          <br />
          <RangePicker
            disabledDate={this.disabledDate}
            disabledTime={this.disabledRangeTime}
            format="YYYY-MM-DD HH:mm"
            placeholder={["Start Time", "End Time"]}
            onChange={this.onChange}
            onOk={this.onOk}
            showTime={{
              hideDisabledOptions: true,
              defaultValue: [
                moment("00:00:00", "HH:mm:ss"),
                moment("11:59:59", "HH:mm:ss")
              ]
            }}
            format="YYYY-MM-DD HH:mm:ss"
          />
          <button
            onClick={() => this.deleteTicket(this.props.ticketId)}
            className=" deletehallbutton "
          >
            Delete Ticket
          </button>
          <button
            onClick={() => this.updateTicket(this.props.ticketId)}
            className=" card-panel teal lighten-2 deletehallbutton "
          >
            Edit Ticket
          </button>
        </div>
      </div>
    );
  }
}
export default Ticket;
