import React from "react";
import { connect } from "react-redux";

import { postMasData } from "../../store/action/actions";

class AddButton extends React.Component {
  state = {
    count: 0,
    name: "",
    email: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  getNextPropertyName = (o) => {
    const propertys = Object.getOwnPropertyNames(o);
    const numbers = propertys
      .map((p) => Number(p.split("field")[1]))
      .sort((a, b) => b - a);
    const maxNumber = Number.isNaN(numbers[0]) ? 1 : numbers[0] + 1;
    return "field" + maxNumber;
  };
  Add = () => {
    const { count, ...unit } = this.state;
    var dataBase = [
      { "What is your marital status?": ["Single", "Married"] },
      { "Are you planning on getting married next year?": ["Yes", "No"] },
      {
        "How long have you been married?": [
          "Less than a year",
          "More than a year",
        ],
      },
      { "Have you celebrated your one year anniversary?": ["Yes", "No"] },
    ];
    console.log(dataBase[0]);
    this.props.postMasData(unit);
  };

  render() {
    return (
      <div>
        <div className="">
          <div>
            <button onClick={this.onClick}>Добавить компонент</button>
            {[...Array(this.state.count)].map((v, i) => (
              <input onChange={this.handleChange} name={"field" + i} />
            ))}
          </div>
          <input
            type="name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="email"
            placeholder="second"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.Add}>+</button>
      </div>
    );
  }
}
export default connect(null, { postMasData })(AddButton);
