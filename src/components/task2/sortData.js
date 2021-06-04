import React from "react";

import { connect } from "react-redux";

import { getData } from "../../store/selectors/card";

import TableComponent from "./tableComponent";

import AddButton from "./addForm";

class SortData extends React.Component {
  state = {};
  onButtonClick = () => {
    console.log("click");
  };
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Data base</h1>
        <div>
          <TableComponent {...this.props} />
        </div>
        <button onclick={this.onButtonClick}>sort</button>
        <h1>Add data to base</h1>
        <AddButton></AddButton>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: getData(state) };
}

export default connect(mapStateToProps)(SortData);
