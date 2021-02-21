import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({city, coords}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.lat,
        lng: city.lng
      },
      zoom: city.zoom
    });

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapRef.current);

    coords.forEach((coord) => {
      const mapPinIcon = leaflet.icon({
        iconUrl: `../../../img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: coord.lat,
        lng: coord.lng
      },
      {
        icon: mapPinIcon
      })
      .addTo(mapRef.current)
      .bindPopup(coord.title);
    });
  });

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = {
  city: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  coords: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }))
};

export default Map;
