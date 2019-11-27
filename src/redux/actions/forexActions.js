import * as types from "./actionTypes";
import * as forexApi from "../../api/forexApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadForexSuccess(forexList) {
  return { type: types.LOAD_FOREX_SUCCESS, forexList };
}

export function loadSingleForexDataSuccess(forexData) {
  return { type: types.LOAD_SINGLE_FOREX_SUCCESS, forexData };
}

export function loadForexData() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return forexApi
      .getForexData()
      .then(data => {
        dispatch(loadForexSuccess(data.forexList));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadSingleForexData(ticker) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return forexApi
      .getForexDataForTicker(ticker)
      .then(data => {
        dispatch(loadSingleForexDataSuccess(data));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
