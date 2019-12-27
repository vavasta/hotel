import { requestHttp } from "../api/api";
const initialState = {
  halls: []
};
///REDUCER//
const hallReducer = (state = initialState, action) => {
  // console.log("hall reducer", action);
  switch (action.type) {
    case "GET-HALLS": {
      return {
        halls: action.payload
      };
    }
    case "ADD-HALL": {
      return {
        ...state,
        halls: [...state.halls, action.payload]
      };
    }
    case "DELETE-HALL":
      return {
        ...state,
        halls: action.payload
      };
    default: {
      return state;
    }
  }
};

//ACTIONS CREATOR///
const getHalls = res => ({ type: "GET-HALLS", payload: res });
const addHall = res => ({ type: "ADD-HALL", payload: res });
const deleteHall = res => ({ type: "DELETE-HALL", payload: res });

///REDUX THUNK//
export const getHallsThunk = () => async dispatch => {
  const res = await requestHttp.getHalls();
  dispatch(getHalls(res.data.halls));
};

export const update = () => {};

export const addHallThunk = (
  title,
  description,
  imageURL
) => async dispatch => {
  const res = await requestHttp
    .addHall(title, description, imageURL)
    .then(res => {
      dispatch(addHall(res.data));
      console.log("IMAGEURL", imageURL);
    });
};
export const deleteHallThunk = (idToDelete, arr) => async dispatch => {
  const newarr = arr.halls.filter(item => item._id !== idToDelete);
  const res = await requestHttp.deleteHall(idToDelete);
  dispatch(deleteHall(newarr));
};

export default hallReducer;
