import { Fragment } from 'react';
import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {useState} from 'react';

type PlaceCardListProps = {
  offers: OfferType[];
}

function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {

  const [, setActiveOffer]=useState<null | OfferType>(null);

  const onActiveOfferChange=(offer:OfferType | null) => {
    setActiveOffer(offer);
  };
  return (
    <Fragment>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer}
          onActiveOfferChange={onActiveOfferChange}
        />
      ))}
    </Fragment>
  );
}

export default PlaceCardList;
