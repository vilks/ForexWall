import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_ENTENSION_COMPOSE__ || compose; //add support for Redux devtools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) //middleware as a safety net for immutability
  );
}
