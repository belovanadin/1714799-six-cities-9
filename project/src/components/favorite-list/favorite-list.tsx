import FavoriteLocationCards from '../favorite-location-cards/favorite-location-cards';
import { FavoriteOfferType } from '../../types/favorite-offer';

type FavoriteListProps = {
  favorites: FavoriteOfferType[];
}

const mapOffersToCity = (favoriteOffers: FavoriteOfferType[]) =>
  favoriteOffers.reduce<{ [key: string]: FavoriteOfferType[] }>((favorites, offer) => {
    if (!favorites[offer.city.name]) {
      favorites[offer.city.name] = [];
    }

    favorites[offer.city.name].push(offer);
    return favorites;
  }, {});


function FavoriteList ({favorites}:FavoriteListProps): JSX.Element {
  const favoriteOffersByCities = mapOffersToCity(favorites);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoriteOffersByCities).map((city) => (
          <FavoriteLocationCards
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
