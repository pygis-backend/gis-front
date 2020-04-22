//actionTypes
const actionTypes = {
  ADD_LAYER: "ADD_LAYER",
  ADD_OVERLAYS: "ADD_OVERLAYS",

  INIT_LAYERS: "INIT_LAYERS",
  INIT_TOOLS: "INIT_TOOLS",
  INIT_RASTER: "INIT_RASTER",

  UPDATE_LAYER: "UPDATE_LAYER",
  UPDATE_FEATURE_ATTRIBUTES: "UPDATE_FEATURE_ATTRIBUTES",

  SET_UPDATED_IDS: "SET_UPDATED_IDS",
  SET_RASTER: "SET_RASTER",
  SET_CURRENT_FEATURE: "SET_CURRENT_FEATURE",
  SET_SELECTED_FEATURES: "SET_SELECTED_FEATURES",
  SET_CURRENT_FEATURE: "SET_CURRENT_FEATURE",
  SET_LAYER_VISIBLE: "SET_LAYER_VISIBLE",
  SET_LAYER_OPACITY: "SET_LAYER_OPACITY",
  SET_LAYER_SELECTABLE: "SET_LAYER_SELECTABLE",
  SET_TOOL_FOCUSED: "SET_TOOL_FOCUSED",
  SET_OVERLAY: "SET_OVERLAY",

  OPEN_DRAW_SESSION: "OPEN_DRAW_SESSION",
  CLOSE_DRAW_SESSION: "CLOSE_DRAW_SESSION",
  PERSIST_DRAW_SESSION: "PERSIST_DRAW_SESSION",
  TOGGLE_TOOLS: "OPEN_TOOLS",
  TOGGLE_GROUP_TOOLS: "OPEN_GROUP_TOOLS",
  TOGGLE_SIDENAV: "OPEN_SIDENAV",
};

export default actionTypes;
