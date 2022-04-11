import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {useState} from 'react';

type PlaceCardListProps = {
  offers: OfferType[];
  onPlaceCardHover?: (offer: OfferType | null) => void;
  className: string;
}

function PlaceCardList({offers, onPlaceCardHover, className}: PlaceCardListProps): JSX.Element {

  const [, setActiveOffer]=useState<null | OfferType>(null);

  const onActiveOfferChange=(offer:OfferType | null) => {
    setActiveOffer(offer);
  };
  return (
    <div className={className}>
      {offers.map((offer, id) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onActiveOfferChange={onActiveOfferChange}
        />
      ))}
    </div>
  );
}

export default PlaceCardList;
