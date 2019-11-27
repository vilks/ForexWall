import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function forexListReducer(
  state = initialState.forexList,
  action
) {
  switch (action.type) {
    case types.LOAD_FOREX_SUCCESS:
      return action.forexList;
    default:
      return state;
  }
}
