import {OfferType} from '../../types/offer';
import PlaceCardList from '../place-card-list/place-card-list';
import CitiesList from '../cities-list/cities-list';
import {useState} from 'react';
import Map from '../map/map';
import {useAppSelector} from '../../hooks/';
import PlacesSort from '../places-sort/places-sort';
import { sortOffers, filterCity } from '../../utils';
import Spinner from '../spinner-component/spinner-component';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';

function Main(): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);
  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };

  const offers = useAppSelector(({DATA}) => DATA.offers);
  const currentCity = useAppSelector(({OFFERS}) => OFFERS.currentCity);
  const sortType = useAppSelector(({OFFERS}) => OFFERS.sortType);
  const {isOfferLoaded} = useAppSelector(({ DATA }) => DATA);
  const filteredOffers = filterCity(offers, currentCity);
  const sortedOffers = sortOffers(filteredOffers, sortType);
  const placesCount: number = filteredOffers.length;

  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">
        <Header />
        {!isOfferLoaded ? <Spinner /> :
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <CitiesList />
              </section>
            </div>
            <div className="cities">
              {filteredOffers.length > 0 ?
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{placesCount} places to stay in {currentCity.name}</b>

                    <PlacesSort sortType={sortType} />

                    <div className="cities__places-list places__list tabs__content">
                      <PlaceCardList
                        offers={sortedOffers}
                        onPlaceCardHover={onPlaceCardHover}
                      />
                    </div>
                  </section>
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      <Map city={currentCity} currentOffers={filteredOffers} selectedPoint={selectedPoint} key={currentCity.name} height={682} />
                    </section>
                  </div>
                </div> :
                <MainEmpty city={currentCity.name}/>}
            </div>
          </main>}
      </div>
    </>
  );
}

export default Main;
