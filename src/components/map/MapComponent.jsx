import React from 'react';

// Open Layers Imports
import {Tile as TileLayer} from 'ol/layer.js';
import {OSM,} from 'ol/source.js';
import View from 'ol/View.js';
import Map from 'ol/Map.js';
import {Vector as VectorSource} from 'ol/source.js';
import {Projection} from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import 'ol/ol.css';
import { combineReducers } from 'redux';


class MapComponent extends React.Component {
     constructor(props) {
         super(props)

         this.map = {};
    }

    handleAddLayer(){
        var proj_2039 = new Projection({
            code: 'EPSG:2039',
            units: 'm',
            axisOrientation: 'neu',
            global: false
          });
      
          var polyEditingVectorSource = new VectorSource({
            format: new GeoJSON(),
            url:'http://localhost:8080/geoserver/Jeru/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Jeru%3AGANANUTFORGEOSERVER&maxFeatures=100000&outputFormat=application%2Fjson'
          });
      
          var vectorEditingLayer = new VectorLayer({
            source: polyEditingVectorSource,
            projection: proj_2039 
          });
      
          this.props.addLayer(vectorEditingLayer);          
    }

    componentDidMount() {
        var a  = new TileLayer({
            source: new OSM()
        })

        this.map = new Map({

            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });
    }
    

    componentWillReceiveProps(newProps) {
        if (
          newProps.layers !== this.props.layers &&
          newProps.layers.length > 0
        ) {
            var layers = [...newProps.layers];
            this.map.addLayer(layers.pop());
        }
    }


    render() {
        console.log("our layers:" + this.props.layers)
        return (
            
            <div>
              <button onClick={() => { this.handleAddLayer(); }} > 
              Gardens
              </button> 
              <div id="map" className="map" ref="olmap"></div>
            </div>
        )
    }
}
export default (MapComponent);