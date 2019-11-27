import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
  button,
  searching
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <br />
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.ticker} value={option.ticker}>
                {option.ticker}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
      {button ? (
        <button
          type="submit"
          disabled={false}
          className="btn btn-outline-primary"
        >
          {searching ? "Searching..." : "Search"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
