import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  const [selected, setSelected] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  return (
    <ReactMapGl
      mapStyle='mapbox://styles/ankit1456/ckvu9hb1v2rkj15rwk8zl0m9g'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-10}
            offsetTop={-5}
          >
            <p
              role='img'
              onClick={() => setSelected(result)}
              className='cursor-pointer animate-bounce'
              aria-label='push-pin'
            >
              📌
            </p>
          </Marker>

          {selected.long === result.long ? (
            <Popup
              latitude={result.lat}
              longitude={result.long}
              onClose={() => setSelected({})}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          ) : (
            ""
          )}
        </div>
      ))}
    </ReactMapGl>
  );
};

export default Map;
