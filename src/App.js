import "./App.css";

import store from "./store";

import Calculator from "./components/task1/unit_calculator";
import Table from "./components/task2/sortData";
import Qwest from "./components/task3/questionnaire";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
        {/* <Table /> */}
        {/* <Qwest></Qwest> */}
      </div>
    </Provider>
  );
}

export default App;
