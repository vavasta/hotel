import React, {useEffect} from "react";
import { connect } from "react-redux";
import Tickets from "../components/Tickets";
import {
  getTicketsThunk,
  getTicketsParamsThunk,
  addTicketThunk,
  updateTicketThunk,
  deleteTicketThunk
} from "../reducers/ticketsReducer"; 

const TicketsContainer = props => {

  useEffect(()=>{
      props.getTicketsThunk()
  },[])



  return <Tickets {...props} />;
};

const mapStateToProps = (state, props) => {
  console.log("STATE", state);
  return {
    tickets: state.tickets
  };
};

const mapDispatchToProps = {
  getTicketsThunk,
  getTicketsParamsThunk,
  addTicketThunk,
  updateTicketThunk,
  deleteTicketThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer);
