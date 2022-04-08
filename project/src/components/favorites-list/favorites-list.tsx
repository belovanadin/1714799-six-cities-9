import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';
import { OfferType } from '../../types/offer';
import {AppRoute} from '../../const';
import { Link } from 'react-router-dom';

type FavoriteListProps = {
  favoriteOffers: OfferType[];
}

function FavoriteList ({favoriteOffers}:FavoriteListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{favoriteOffers[0]}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => (
          <FavoritePlaceCard
            favoriteOffers={offer}
            key={offer.id}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoriteList;
