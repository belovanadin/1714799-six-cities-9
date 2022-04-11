import { Link } from 'react-router-dom';

import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';

import { AppRoute } from '../../const';
import { FavoriteOfferType } from '../../types/favorite-offer';

type FavoriteLocationProps = {
  locationOffers: FavoriteOfferType[],
  city: string;
}

function FavoriteLocationCards({ locationOffers, city }: FavoriteLocationProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {locationOffers.map((offer) => <FavoritePlaceCard key={offer.id} favoriteOffers={offer} />)}
      </div>
    </li>
  );
}

export default FavoriteLocationCards;
