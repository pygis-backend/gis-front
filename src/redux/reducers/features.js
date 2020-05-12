import types from "../actions/actionsTypes";
import produce from "immer";


// selectedFeatures: {},
// currentLayer: null,
// currentFeature: null,
export default function (state = {}, action) {
  switch (action.type) {
    case types.SET_SELECTED_FEATURES:
      return produce(state, (draftState) => {

        if (!(action.payload.focusedmap in state)) {
          draftState[action.payload.focusedmap] = {}
        }

        draftState[action.payload.focusedmap].selectedFeatures = action.payload.featuresByLayers;
        // if (action.payload.length == 1) {
        //   draftState[action.payload.focusedmap].currentFeature = action.payload[0];
        // }
      });


    case types.SET_CURRENT_FEATURE:
      return produce(state, (draftState) => {
        if (!(action.payload.focusedmap in state)) {
          draftState[action.payload.focusedmap] = {}
        }
        draftState[action.payload.focusedmap].currentFeature = action.payload.currentFeature;
      });

    case types.SET_CURRENT_LAYER:
      return produce(state, (draftState) => {
        if (!(action.payload.focusedmap in state)) {
          draftState[action.payload.focusedmap] = {}
        }
        draftState[action.payload.focusedmap].currentLayer = action.payload.currentLayer;
      });

    default:
      return state;
  }
}
