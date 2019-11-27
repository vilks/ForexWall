import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL;

export function getForexData() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getForexDataForTicker(ticker) {
  return fetch(baseUrl + "/" + ticker)
    .then(handleResponse)
    .catch(handleError);
}
