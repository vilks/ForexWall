import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function forexListReducer(
  state = initialState.forexData,
  action
) {
  switch (action.type) {
    case types.LOAD_SINGLE_FOREX_SUCCESS:
      return action.forexData;
    default:
      return state;
  }
}
