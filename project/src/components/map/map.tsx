import { OfferType} from '../../types/offer';
import { City } from '../../types/city';
import {Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, WIDTH_MARKER, HEIGHT_MARKER, ANCHOR_MARKER } from '../../const';

type MapProps = {
  city: City;
  selectedPoint: OfferType | null;
  height: number;
  currentOffers: OfferType[];
  className: string;
}
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [WIDTH_MARKER, HEIGHT_MARKER],
  iconAnchor: [ANCHOR_MARKER, HEIGHT_MARKER],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [WIDTH_MARKER, HEIGHT_MARKER],
  iconAnchor: [ANCHOR_MARKER, HEIGHT_MARKER],
});

const markers:Marker[]= [];

function Map({ currentOffers, city, selectedPoint, className, height}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      currentOffers.forEach((currentPoint) => {
        const marker = new Marker({
          lat: currentPoint.location.latitude,
          lng: currentPoint.location.longitude,
        });
        marker
          .setIcon(
            selectedPoint !== null && currentPoint.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
    return () => {
      markers.forEach((marker) => marker.remove());
      markers.length = 0;
    };
  });

  return(
    <section className="cities__map map" ref={mapRef} />
  );
}

export default Map;
