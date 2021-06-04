import React from "react";

import { connect } from "react-redux";

import { getUnits } from "../../store/selectors/card";

import Buttons from "./buttos";
import AddButton from "./addButton";

class Calculator extends React.Component {
  state = {
    unit: "",
    unit_value: 0,
    normalised: 0,
    convert_to: "",
    result: 0,
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: +event.target.value,
    });
  };
  onUnitClick = (name, koef_to_m) => {
    this.setState({
      unit: name,
      normalised: this.state.unit_value * koef_to_m,
    });
  };
  onClickConvertTo = (name, koef_to_m) => {
    this.setState({
      convert_to: name,
      result: this.state.normalised / koef_to_m,
    });
  };

  render() {
    const { units } = this.props;
    return (
      <div>
        <h1>Calculator</h1>
        <div className="header_math">
          <div>Enter Unit</div>
          <Buttons onClick={this.onUnitClick} {...this.props} />
        </div>
        <div>Enter Unit value</div>

        <div className="">
          <input
            type="number"
            name="unit_value"
            placeholder="unit"
            value={this.state.unit_value}
            onChange={this.handleChange}
          />
          <div className="unit_cont">
            <div className="unit"> {this.state.unit}</div>
            <div className="unit"> {this.state.convert_to}</div>
          </div>
        </div>
        <div className="header_math">
          <div>Enter convert unit</div>
          <Buttons onClick={this.onClickConvertTo} {...this.props} />
        </div>
        <h1>Result Convertetion</h1>
        <div className="converted"> {this.state.result}</div>
        <h1>Add new Unit</h1>
        <AddButton></AddButton>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { units: getUnits(state) };
}

export default connect(mapStateToProps)(Calculator);
