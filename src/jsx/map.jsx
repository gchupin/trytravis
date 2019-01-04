import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../css/map.css";
import { runInThisContext } from "vm";

class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latlng: {
        lat: 44.87067,
        lng: -0.63931
      },
      zoom: 2,
      length: 4,
      labArray: props.array
    }; 
  }
  
  render() {
    let listMarker = [];
    for (let i = 0; i < this.state.labArray.length; ++i)
    {
      listMarker.push(<Marker key={i} position={[this.state.labArray[i][0], this.state.labArray[i][1]]}>
        <Popup>
        {this.state.labArray[i][2]}
        </Popup>
      </Marker>)
    }
    return (
      <div id="main-wrap">
        <Map
          center={this.state.latlng}
          length={this.state.length}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {listMarker}
        </Map>
      </div>
    );
  }
}

export default WorldMap;
