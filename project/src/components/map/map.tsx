import { OfferType} from '../../types/offer';
import { City } from '../../types/city';
import {Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { useEffect, useRef } from 'react';
import { URL_MARKERS, ICON, ANCHOR_POSITION } from '../../const';

type MapProps = {
  city: City;
  selectedPoint: OfferType | null;
  height: number;
  currentOffers: OfferType[];
  className: string;
}
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKERS.DEFAULT,
  iconSize: [ICON.WIDTH, ICON.HEIGHT],
  iconAnchor: [ANCHOR_POSITION.RELATIVE_X, ANCHOR_POSITION.RELATIVE_Y],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKERS.CURRENT,
  iconSize: [ICON.WIDTH, ICON.HEIGHT],
  iconAnchor: [ANCHOR_POSITION.RELATIVE_X, ANCHOR_POSITION.RELATIVE_Y],
});

const markers:Marker[]= [];

function Map({ currentOffers, city, selectedPoint, height, className}: MapProps) {
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
        markers.push(marker);
      });
    }
    return () => {
      markers.forEach((marker) => {
        if (map) {
          marker.removeFrom(map);
        }
      });
    };
  }, [map, currentOffers, selectedPoint, city]);

  return(
    <section
      className={className}
      ref={mapRef}
      style = {{height:`${height}px`}}
    >
    </section>
  );
}

export default Map;
