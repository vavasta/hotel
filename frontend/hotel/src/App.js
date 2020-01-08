import React from "react";
import "./App.css";
import { getHallsThunk } from "./reducers/hallReducer";
import { getTicketsThunk } from "./reducers/ticketsReducer";
import HallsContainer from "./containers/HallsContainer";
import { connect } from "react-redux";
import HeaderContainer from "./containers/HeaderContainer";
import { Route } from "react-router-dom";
import TicketsContainer from "./containers/TicketsContainer";
import Tickets from "./components/Tickets";
class App extends React.Component {
  componentDidMount() {
    this.props.getHallsThunk();
    // this.props.getTicketsThunk();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <Route exact path="/halls" render={() => <HallsContainer />} />
        <Route exact path="/tickets" render={() => <TicketsContainer />} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("PROPSAPP", state);
  return {
    halls: state.halls,
    tickets: state.tickets,
    user: state.user,
    error: state.error
  };
};

const mapDispatchToProps = {
  getTicketsThunk,
  getHallsThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
