import {OfferType } from '../../types/offer';
import { ReviewType} from '../../types/review';
import Header from '../header/header';
import PropertyCard from '../property-card/property-card';
import PlaceCardList from '../place-card-list/place-card-list';
import {useState} from 'react';

type PlaceCardScreenProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function PlaceCardScreen({offers, reviews}:PlaceCardScreenProps): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };

  return (
    <div className="page">
      <Header />
      <PropertyCard offers={offers} reviews={reviews} selectedPoint={selectedPoint}/>
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
