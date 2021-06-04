import { ADD_MASDATA, successAction } from "../types";
const initialState = {
  data: [
    { name: "John", email: "john2@mail.com" },
    { name: "John", email: "john1@mail.com" },
    { name: "Jane", email: "jane@mail.com" },
  ],
};

export default function Users(state = initialState, action) {
  switch (action.type) {
    case successAction(ADD_MASDATA):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data],
      };

    default:
      return state;
  }
}
