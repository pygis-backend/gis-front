import React from "react";
import { InitMap, Identify, addLayersSafely } from "./func";
import { connect } from "react-redux";
import config from "react-global-configuration";
import { logLevel, LogIt } from "../../utils/logs";
import { addLayers } from "../../redux/actions/layers";
import { setSelectedFeatures } from "../../redux/actions/features";
import "./style.css";

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }
  componentDidMount() {
    this.map = InitMap();
    this.map.on("click", (evt) =>
      Identify(evt, this.map, this.props.setSelectedFeatures)
    );
  }

  componentDidUpdate() {
    LogIt(logLevel.INFO, "Map Update");
    LogIt(logLevel.DEBUG, this.props.Layers);
    LogIt(logLevel.DEBUG, this.props.Features);
    if (this.props.Rasters) {
      const { Catalog, Focused } = this.props.Rasters;
      this.map.getLayers().setAt(0, Catalog[Focused].layer);
    }
  
    // addLayersSafely(this.props.Layers, this.map, this.props.addLayers);
    addLayersSafely(this.props.Layers, this.map);
  }

  render() {
    const { target } = config.get("MapConfig");
    return <div id={target} className="map"></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    Layers: state.mapLayers.newLayers,
    Rasters: state.Rasters,
    Features: state.Features,
  };
};

export default connect(mapStateToProps, { addLayers, setSelectedFeatures })(
  MapComponent
);
