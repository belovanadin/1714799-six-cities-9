import {OfferType } from '../../types/offer';
import Header from '../header/header';
import PropertyCard from '../property-card/property-card';
import PlaceCardList from '../place-card-list/place-card-list';
import {useState} from 'react';
import { useAppSelector } from '../../hooks';


function PlaceCardScreen(): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };
  const {offers, filteredOffers} = useAppSelector((state) => state);

  return (
    <div className="page">
      <Header />
      <PropertyCard offers={filteredOffers} selectedPoint={selectedPoint}/>
      <main className="page__main page__main--property">
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <PlaceCardList offers={offers} onPlaceCardHover={onPlaceCardHover}/>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PlaceCardScreen;
