import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tickets from "../components/Tickets";
import {
  getTicketsThunk,
  getTicketsParamsThunk,
  addTicketThunk,
  updateTicketThunk,
  deleteTicketThunk,
  clearTicket
} from "../reducers/ticketsReducer";

const TicketsContainer = props => {
  useEffect(() => {
    props.getTicketsThunk();
  }, []);

  return <Tickets {...props} />;
};

const mapStateToProps = (state, props) => {
  console.log("STATE", state);
  return {
    tickets: state.tickets,
    user: state.user
  };
};

const mapDispatchToProps = {
  getTicketsThunk,
  getTicketsParamsThunk,
  addTicketThunk,
  updateTicketThunk,
  deleteTicketThunk,
  clearTicket
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer);
