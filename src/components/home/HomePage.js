import React, { useEffect, useState } from "react";
import Ticker from "./Ticker";
import { connect } from "react-redux";
import {
  loadForexData,
  loadSingleForexData
} from "../../redux/actions/forexActions";
import SelectInput from "../common/SelectInput";
import useInterval from "../common/useInterval";
import { toast } from "react-toastify";

export function HomePage({
  forexList,
  forexData,
  loadForexData,
  loadSingleForexData,
  history,
  ...props
}) {
  const [ticker, setTicker] = useState({ ...props.ticker });
  const [tableIsPopulated, setTableIsPopulated] = useState(false);
  const [errors, setErrors] = useState({});
  const [searcing, setSearching] = useState(false);

  useInterval(() => {
    if (typeof ticker != "undefined" && ticker.length > 0 && tableIsPopulated) {
      loadSingleForexData(ticker);
    }
  }, 2000);

  useEffect(() => {
    if (forexList.length === 0) {
      loadForexData().catch(error => {
        toast.error("Loading forex data failed - " + error);
      });
    }
  }, [props.forexList]);

  function handleChange(event) {
    const { value } = event.target;
    setTicker(value.replace("/", ""));
  }

  function handleSearch(event) {
    event.preventDefault();

    if (!formIsValid()) return;
    setSearching(true);
    loadSingleForexData(ticker)
      .then(() => {})
      .catch(error => {
        setSearching(false);
        toast.error("Error getting the data. Try again later.");
      });

    setTableIsPopulated(true);
  }

  function formIsValid(event) {
    const errors = {};

    if (
      typeof ticker == "undefined" ||
      ticker.length == 0 ||
      Object.keys(ticker).length == 0
    )
      errors.ticker = "FX pair is required.";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <SelectInput
          name="ticker"
          label="Select FX pair"
          options={forexList}
          onChange={handleChange}
          button={true}
          error={errors.ticker}
          searcing={searcing}
        />
      </form>
      <Ticker forexDataForTable={forexData} ticker={ticker} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    forexList: state.forexList,
    forex: state.forex,
    ticker: state.ticker,
    forexData: state.forexData
  };
}

const mapDispatchToProps = {
  loadForexData,
  loadSingleForexData
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
