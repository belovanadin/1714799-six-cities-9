import {OfferType} from '../../types/offer';
import PlaceCardList from '../place-card-list/place-card-list';
import CitiesList from '../cities-list/cities-list';
import {useState} from 'react';
import Map from '../map/map';
import {CITY} from '../../mocks/city';
import { citiesList } from '../../const';
import {useAppSelector} from '../../hooks/';
import {getCurrentOffers} from '../../utils';

type MainProps = {
  offers: OfferType[];
}

function Main({offers}: MainProps): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const currentCity = useAppSelector((state) => state.city);
  const countOffers = getCurrentOffers(currentCity, offers);
  const placesCount = countOffers.length;

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList
            citiesList={citiesList}
            currentCity={currentCity}
          />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in {currentCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex = {0}>
              Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex = {0}>Popular</li>
                <li className="places__option" tabIndex = {0}>Price: low to high</li>
                <li className="places__option" tabIndex = {0}>Price: high to low</li>
                <li className="places__option" tabIndex = {0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <PlaceCardList
                offers={countOffers}
                onPlaceCardHover={onPlaceCardHover}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={CITY} points={offers} selectedPoint={selectedPoint} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
