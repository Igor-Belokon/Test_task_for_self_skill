import React from "react";
import "../../components/style.css";
import sorted from "./sort";

class tableComponent extends React.Component {
  state = { sort_value: "" };

  onButtonClick = (event) => {
    console.log("click");
    this.setState({ sort_value: event.target.name });
  };
  render() {
    const { users } = this.props;

    console.log("Ключи обьекта", Object.keys(users[1]));
    return (
      <div>
        <div className="buttos-sort">
          {Object.keys(users[1]).map((data) => (
            <div className="comp">
              <button
                onClick={this.onButtonClick}
                className="comp-elem"
                name={data}
              >
                {data}{" "}
              </button>
            </div>
          ))}
        </div>

        {sorted(users, this.state.sort_value).map((data) => (
          <div className="comp">
            {Object.values(data).map((value) => (
              <div className="comp-elem">{value} </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
export default tableComponent;
