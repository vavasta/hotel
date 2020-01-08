import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import hallReducer from "./reducers/hallReducer";
import ticketsReducer from "./reducers/ticketsReducer";
import usersReducer from "./reducers/usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers =
  typeof window === "object" && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducers = combineReducers({
  halls: hallReducer,
  tickets: ticketsReducer,
  user: usersReducer
});

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  reducers,
  // composeWithDevTools(applyMiddleware(...reducers)),
  enhancer
);
export { store as store2 };
export default store;
