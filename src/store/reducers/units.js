import { ADD_UNIT, successAction } from "../types";
const initialState = {
  data: [
    { unit_name: "cm", koef_to_m: 0.01 },
    { unit_name: "mm", koef_to_m: 0.001 },
    { unit_name: "ft", koef_to_m: 0.33333 },
    { unit_name: "in", koef_to_m: 0.025 },
  ],
};

export default function Units(state = initialState, action) {
  switch (action.type) {
    case successAction(ADD_UNIT):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data],
      };

    default:
      return state;
  }
}
