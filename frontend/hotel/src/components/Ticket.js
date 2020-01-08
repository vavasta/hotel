import React from "react";
import moment from "moment";
import { DatePicker, message } from "antd";
const { MonthPicker, RangePicker } = DatePicker;
class Ticket extends React.Component {
  state = {
    value: "",
    isDisabled: false,
    isOpen: true
  };
  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
  disabledChanged = day => {
    return moment().add(-1, "days") >= day || moment().add(1, "month") <= day;
  };
  disabledDate = day => {
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
    return isDisabled || this.disabledChanged(day);
  };

  onChange(value, dateString) {
    // const filteredticket = this.props.arr.tickets.filter(
    //   item => item._id === this.props.ticketId
    // );
    // console.log("FILTERD", filteredticket);
  }
  onOk = value => {
    this.setState({ value: value });
  };
  updateTicket = ticketId => {
    this.props.updateTicketThunk(this.state.value, ticketId, this.props.title);
  };
  deleteTicket = ticketId => {
    this.setState({ isOpen: false });
    const arr = this.props.arr;
    this.props.deleteTicketThunk(ticketId, arr);
  };
  clearTicket = ticketId => {
    this.props.clearTicket(ticketId);
    // const valuearr = this.props.tickets.tickets.filter(
    //   item => item._id === ticketId
    // );
    // return this.disabledDate(valuearr);

    // this.setState({ isDisabled: false });
  };
  render() {
    const from = this.props.from;
    const converted_date_from = moment.unix(from).format("LLLL");
    console.log("DATEFROM ", converted_date_from);
    const to = this.props.to;
    const converted_date_to = moment.unix(to).format("LLLL");
    const { RangePicker } = DatePicker;
    const currentUser = localStorage.getItem("token");
    return (
      <div className="container">
        <div className="card-panel hoverable cardticket ">
          <p>Room Name</p>
          <div className="title">{this.props.title}</div>
          <div className="ticket-center-container">
            <div>
              <br></br>
              {moment(converted_date_from).isValid()
                ? converted_date_from
                : "Please select a new 'FROM' day"}
              <br></br>
              {moment(converted_date_to).isValid()
                ? converted_date_to
                : "Please select a new 'TO' day"}
            </div>
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
            <div>
              <RangePicker
                //   1578621845
                // //  1579273199
                defaultValue={[moment.unix(from), moment.unix(to)]}
                disabledDate={this.disabledDate}
                disabledTime={this.disabledRangeTime}
                format="YYYY-MM-DD HH:mm"
                placeholder={["Start Time", "End Time"]}
                onChange={this.onChange}
                // open={this.state.isOpen}
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
            </div>
          </div>
          <div className="deletedescription">
            If you want to edit your ticket, please press "Clear" button, then
            make changes and press "Edit Ticket" button.
          </div>
          <div className="editbuttons">
            <button
              onClick={() => this.clearTicket(this.props.ticketId)}
              className=" card-panel teal lighten-2 edithallbutton "
            >
              Clear
            </button>
            <button
              onClick={() => this.updateTicket(this.props.ticketId)}
              className=" card-panel teal lighten-2 edithallbutton "
            >
              Edit Ticket
            </button>
          </div>
          <div className="deletedescription">
            If you want to delete your ticket, please pless "Delete Ticket"
            button at any time.
          </div>
          <button
            onClick={() => this.deleteTicket(this.props.ticketId)}
            className=" deletehallbutton "
          >
            Delete Ticket
          </button>
        </div>
      </div>
    );
  }
}
export default Ticket;
