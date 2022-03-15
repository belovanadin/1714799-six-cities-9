import { Fragment } from 'react';
import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: OfferType[];
}

function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {

  return (
    <Fragment>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer} />
      )) }
    </Fragment>
  );
}

export default PlaceCardList;
