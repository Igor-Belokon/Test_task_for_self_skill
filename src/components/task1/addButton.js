import React from "react";
import { connect } from "react-redux";

import { postUnit } from "../../store/action/actions";

class AddButton extends React.Component {
  state = {
    unit_name: "",
    unit_value: 0,
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  Add = () => {
    const unit = {
      unit_name: this.state.unit_name,
      koef_to_m: +this.state.unit_value,
    };
    console.log(unit);
    this.props.postUnit(unit);
  };

  render() {
    return (
      <div>
        <div className="">
          <input
            type="unit_name"
            name="unit_name"
            placeholder="unit name"
            value={this.state.unit_name}
            onChange={this.handleChange}
          />

          <input
            type="number"
            name="unit_value"
            placeholder="unit value"
            value={this.state.unit_value}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.Add}>+</button>
      </div>
    );
  }
}
export default connect(null, { postUnit })(AddButton);
