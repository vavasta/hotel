import React from "react";
import TicketsContainer from "../containers/TicketsContainer";
import Ticket from "./Ticket";
const Tickets = props => {
  console.log("PROOOOOOOOPS", props);
  return (
    <div>
      {props.tickets.tickets.map(ticket => (
        <Ticket
          {...props}
          updateTicketThunk={props.updateTicketThunk}
          deleteTicketThunk={props.deleteTicketThunk}
          title={ticket.title}
          key={ticket._id}
          from={ticket.from}
          to={ticket.to}
          ticketId={ticket._id}
          arr={props.tickets}
        />
      ))}
    </div>
  );
};
export default Tickets;
