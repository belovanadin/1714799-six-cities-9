import { Fragment } from 'react';
import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {useState} from 'react';

type PlaceCardListProps = {
  offers: OfferType[];
  onPlaceCardHover: (id:number) => void;
}

function PlaceCardList({offers, onPlaceCardHover}: PlaceCardListProps): JSX.Element {

  const [, setActiveOffer]=useState<null | OfferType>(null);

  const onActiveOfferChange=(offer:OfferType | null) => {
    setActiveOffer(offer);
  };
  return (
    <Fragment>
      {offers.map((offer, id) => (
        <PlaceCard
          key={offer.id}
          offers={offer}
          onActiveOfferChange={onActiveOfferChange}
          onPlaceCardHover={onPlaceCardHover}
        />
      ))}
    </Fragment>
  );
}

export default PlaceCardList;
