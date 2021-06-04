import { ADD_MASDATA, successAction } from "../types";

const initialState = {
  data: [
    { "What is your marital status?": ["Single", "Married"] },
    { "Are you planning on getting married next year?": ["Yes", "No"] },
    {
      "How long have you been married?": [
        "Less than a year",
        "More than a year",
      ],
    },
    { "Have you celebrated your one year anniversary?": ["Yes", "No"] },
  ],
};

export default function Qwest(state = initialState, action) {
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
