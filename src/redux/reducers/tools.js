import types from "../actions/actionsTypes";
import produce from "immer";

export default function (state = null, action) {
  switch (action.type) {
    case types.INIT_TOOLS:
      return action.payload;
    case types.TOGGLE_TOOLS:
      return produce(state, (draftState) => {
        const IsOpen = draftState.tools[action.payload].IsOpen;
        draftState.tools[action.payload].IsOpen = !IsOpen;
      });
    case types.TOGGLE_GROUP_TOOLS:
      return produce(state, (draftState) => {
        const IsOpen = draftState.Groups[action.payload].IsOpen;
        draftState.Groups[action.payload].IsOpen = !IsOpen;
      });

    default:
      return state;
  }
}
