import { ADD_UNIT, successAction, ADD_MASDATA } from "../types";

export function postUnit(unit) {
  return { type: successAction(ADD_UNIT), data: unit };
}
export function postMasData(mas) {
  return { type: successAction(ADD_MASDATA), data: mas };
}
