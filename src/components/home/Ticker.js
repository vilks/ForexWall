import React from "react";
import PropTypes from "prop-types";
import "../home/Ticker.css";
import { loadSingleForexData } from "../../redux/actions/forexActions";
import { connect } from "react-redux";

const Ticker = ({ forexDataForTable, ticker, ...props }) => (
  <div className="forex-ticker">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Pair</th>
          <th scope="col">Price</th>
          <th scope="col">Change</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr key={forexDataForTable.ticker}>
          <td>{forexDataForTable.ticker}</td>
          <td>{forexDataForTable.bid}</td>
          <td>
            {typeof forexDataForTable.changes != "undefined"
              ? forexDataForTable.changes.toFixed(2)
              : ""}
          </td>
          <td>{forexDataForTable.date}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

Ticker.propTypes = {
  //forexDataForTable: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    forexDataForTable: state.forexData,
    ticker: state.ticker
  };
}

const mapDispatchToProps = {
  loadSingleForexData
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
