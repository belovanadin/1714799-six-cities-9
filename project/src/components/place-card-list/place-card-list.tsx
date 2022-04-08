import { Fragment } from 'react';
import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {useState} from 'react';
import { CardTypes } from '../../const';

type PlaceCardListProps = {
  offers: OfferType[];
  onPlaceCardHover?: (offer: OfferType | null) => void;
  typeCard: CardTypes;
}

function PlaceCardList({offers, onPlaceCardHover, typeCard}: PlaceCardListProps): JSX.Element {

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
          typeCard={typeCard}
        />
      ))}
    </Fragment>
  );
}

export default PlaceCardList;
