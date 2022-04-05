import { OfferType} from '../../types/offer';
import { City } from '../../types/city';
import React, { useRef} from 'react';
import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, WIDTH_MARKER, HEIGHT_MARKER, ANCHOR_MARKER } from '../../const';

type MapProps = {
  points: OfferType[];
  city: City;
  selectedPoint: OfferType | null;
  height: number;
}
const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [WIDTH_MARKER, HEIGHT_MARKER],
  iconAnchor: [ANCHOR_MARKER, HEIGHT_MARKER],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [WIDTH_MARKER, HEIGHT_MARKER],
  iconAnchor: [ANCHOR_MARKER, HEIGHT_MARKER],
});

function Map({ points, city, selectedPoint, height}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        marker
          .setIcon(
            selectedPoint !== null && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return(
    <section className="cities__map map" ref={mapRef} />
  );
}

export default Map;
