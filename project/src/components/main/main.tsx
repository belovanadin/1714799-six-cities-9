import {OfferType} from '../../types/offer';
import PlaceCardList from '../place-card-list/place-card-list';
import CitiesList from '../cities-list/cities-list';
import {useState} from 'react';
import Map from '../map/map';
import {useAppSelector} from '../../hooks/';
import PlacesSort from '../places-sort/places-sort';
import { sortOffers } from '../../utils';
import { CardTypes } from '../../const';
import Spinner from '../spinner-component/spinner-component';
import Header from '../header/header';

function Main(): JSX.Element {
  const {filteredOffers, currentCity, sortType, isDataLoaded} = useAppSelector((state) => state);
  const sortedOffers = sortOffers(filteredOffers, sortType);

  const placesCount: number = filteredOffers.length;
  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };
  return (
    <>
      <Header />
      {!isDataLoaded ? <Spinner /> :
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesCount} places to stay in {currentCity}</b>
                <PlacesSort sortType={sortType} />
                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardList
                    offers={sortedOffers}
                    onPlaceCardHover={onPlaceCardHover}
                    typeCard={CardTypes.Main}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={currentCity} currentOffers={filteredOffers} selectedPoint={selectedPoint} key={currentCity.name} className='cities__map map' height={682}/>
                </section>
              </div>
            </div>
          </div>
        </main>}
    </>
  );
}

export default Main;
