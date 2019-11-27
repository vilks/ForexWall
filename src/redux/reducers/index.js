import { combineReducers } from "redux";
import forexList from "./forexListReducer";
import forexData from "./forexDataReducer";
import apiCallsInProgress from "./apiStatusReducer";
import { reducer as toastr } from "react-redux-toastr";

const rootReducer = combineReducers({
  forexList,
  forexData,
  apiCallsInProgress,
  toastr
});

export default rootReducer;
