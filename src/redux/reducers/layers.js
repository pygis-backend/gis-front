import types from "../actions/actionsTypes";
import produce from "immer";

export default function (state = {}, action) {
  switch (action.type) {
    case types.ADD_LAYER:
      return produce(state, (draftState) => {
        action.payload.addedLayers.map((lyr) => {
          draftState[action.payload.mapId]["layers"][lyr.uuid] = lyr;
        });
      });

    case types.SET_LAYER_VISIBLE:
      return produce(state, (draftState) => {
        draftState[action.payload.mapId]["layers"][
          action.payload.layerId
        ].visible = action.payload.visible;
      });
    case types.SET_LAYER_OPACITY:
      return produce(state, (draftState) => {
        draftState[action.payload.mapId]["layers"][
          action.payload.layerId
        ].opacity = action.payload.Opacity;
      });
    case types.INIT_LAYERS:
      return produce(state, (draftState) => {
        draftState[action.payload.mapId] = action.payload.layersObject;
      });
    case types.LAYER_ADDED:
      return produce(state, (draftState) => {
        draftState[action.payload.mapId]["layerAdded"] =
          action.payload.layerAdded;
      });
    default:
      return state;
  }
}

export const selectVisibleLayers = (state) => {
  const { Layers, map } = state;
  const visibles = Object.keys(Layers[map.focused].layers).filter(
    (id) => Layers[map.focused].layers[id].visible === true
  );
  return visibles;
};
