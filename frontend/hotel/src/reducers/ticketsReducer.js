import { requestHttp } from "../api/api";
import moment from "moment";
import { Item } from "rc-menu";
import { updateHallThunk } from "../reducers/hallReducer";
const initialState = {
  tickets: [],
  error: null,
  errorTwo: null
};

///REDUCER//
const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-TICKETS": {
      return {
        ...state,
        tickets: action.payload
      };
    }

    case "GET-TICKETSPARAMS":
      return {
        ...state,
        tickets: action.payload
      };

    case "ADD-TICKET": {
      return {
        ...state,
        tickets: [...state.tickets, action.payload]
      };
    }

    case "PUT-TICKET":
      return {
        ...state,
        tickets: action.payload
      };

    case "DELETE-TICKET":
      return {
        ...state,
        tickets: action.payload
      };
    case "NOAUTH-ERROR":
      return {
        ...state,
        error: action.payload
      };
    case "NOAUTH-ERROR-TWO":
      return {
        ...state,
        errorTwo: action.payload
      };
    case "CLEAR-TICKET": {
      const newTicketsArr = [...state.tickets].map(item => {
        if (item._id === action.payload) {
          item.from = moment(null);
          item.to = moment(null);
          return item;
        } else {
          return item;
        }
      });
      return {
        ...state,
        tickets: newTicketsArr
      };
    }
    default: {
      return state;
    }
  }
};

///ACTION CREATOR /////////

const getTickets = res => ({ type: "GET-TICKETS", payload: res.data });
const getTicketsParams = res => ({ type: "GET-TICKETSPARAMS", payload: res });
const addTicket = res => ({ type: "ADD-TICKET", payload: res });
const putTicket = res => ({ type: "PUT-TICKET", payload: res });
const deleteTicket = res => ({ type: "DELETE-TICKET", payload: res });
const noAuthError = res => ({ type: "NOAUTH-ERROR", payload: res });
const noAuthErrorTwo = res => ({ type: "NOAUTH-ERROR-TWO", payload: res });
export const clearTicket = id => ({
  type: "CLEAR-TICKET",
  payload: id
});
//////////// REDUX THUNK //////////////////////

//GETTICKETSTHUNK

export const getTicketsThunk = () => async dispatch => {
  const res = await requestHttp.getTickets();
  console.log("res", res.data);
  dispatch(getTickets(res));
};

export const getTicketsParamsThunk = () => async dispatch => {
  const res = await requestHttp.getTicketsParams();
  dispatch(getTicketsParams(res.data));
  console.log("res", res);
};
export const addTicketThunk = (value, buttonsId, titlee) => async dispatch => {
  const from = value[0].unix();
  const to = value[1].unix();
  const hall_id = buttonsId;
  const title = titlee;
  const res = await requestHttp.addTicket(from, to, hall_id, title);
  console.log("RESADDTICK", res);
  dispatch(addTicket(res.data));
  localStorage.setItem("ticket", [from, to, hall_id]);
  if (res.data === "No authority") {
    dispatch(noAuthError(res.data));
  }
  // updateHallThunk(from, to, hall_id);
  // } else {
  //   dispatch(noAuthErrorTwo("No authority"));
  // }
};
export const updateTicketThunk = (
  value,
  buttonsId,
  titlee
) => async dispatch => {
  const from = value[0].unix();
  const to = value[1].unix();
  const title = titlee;
  const res = await requestHttp.updateTicket(from, to, buttonsId, title);
  console.log("REEEEEEESSSSSSSSSS", res);
  const arr = res.data;
  dispatch(putTicket(arr));
  if (res.data === "No authority") {
    dispatch(noAuthError(res.data));
  }
};
export const deleteTicketThunk = (id, arr) => async dispatch => {
  console.log("ARRRRRRRRR", arr);
  const newarr = arr.tickets.filter(item => item._id !== id);
  console.log("NEWWWWAAARRRR", newarr);
  const res = await requestHttp.deleteTicket(id);
  dispatch(deleteTicket(newarr));
  if (res.data === "No authority") {
    dispatch(noAuthError(res.data));
  }
};
export default ticketsReducer;
