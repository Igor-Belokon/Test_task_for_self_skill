import React from "react";

import { connect } from "react-redux";

import { getQwest } from "../../store/selectors/card";

class Calculator extends React.Component {
  state = {};

  render() {
    const { qwest } = this.props;
    console.log(qwest);
    return <div>{qwest[1]}</div>;
  }
}

function mapStateToProps(state) {
  return { qwest: getQwest(state) };
}

export default connect(mapStateToProps)(Calculator);
