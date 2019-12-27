import React from "react";
import Halls from "../components/Halls";
import { connect } from "react-redux";
import {
  getHallsThunk,
  addHallThunk,
  deleteHallThunk
} from "../reducers/hallReducer";
import {
  getTicketsThunk,
  getTicketsParamsThunk,
  addTicketThunk,
  updateTicketThunk,
  deleteTicketThunk
} from "../reducers/ticketsReducer";

const HallsContainer = props => {
  return <Halls {...props} />;
};

const mapStateToProps = (state, props) => {
  return {
    halls: state.halls
  };
};

const mapDispatchToProps = {
  getHallsThunk,
  addHallThunk,
  deleteHallThunk,
  getTicketsThunk,
  getTicketsParamsThunk,
  addTicketThunk,
  updateTicketThunk,
  deleteTicketThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(HallsContainer);
