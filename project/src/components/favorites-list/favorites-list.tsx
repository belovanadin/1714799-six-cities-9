import FavoritesLocationCards from '../favorite-location-card/favorite-location-card';
import { FavoriteOfferType } from '../../types/favorite-offer';

type FavoriteListProps = {
  favorites: FavoriteOfferType[];
}

const mapOffersToCity = (arr: FavoriteOfferType[]) =>
  arr.reduce<{ [key: string]: FavoriteOfferType[] }>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }

    acc[offer.city.name].push(offer);
    return acc;
  }, {});


function FavoriteList ({favorites}:FavoriteListProps): JSX.Element {
  const favoriteOffersByCities = mapOffersToCity(favorites);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoriteOffersByCities).map((city) => (
          <FavoritesLocationCards
            key={city}
            city={city}
            locationOffers={favoriteOffersByCities[city]}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoriteList;
