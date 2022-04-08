import {OfferType } from '../../types/offer';
import Header from '../header/header';
import PropertyCard from '../property-card/property-card';
import PlaceCardList from '../place-card-list/place-card-list';
import {useState, useEffect} from 'react';
import { useAppSelector } from '../../hooks';
import { CardTypes } from '../../const';
import {store} from '../../store';
import {useParams} from 'react-router-dom';
import {loadCurrentOfferAction, fetchReviewsAction, fetchNearbyOffersAction} from '../../store/api-action';
import NotFoundPage from '../../pages/not-found-page';

function PlaceCardScreen(): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };
  const {offers, filteredOffers, reviews} = useAppSelector((state) => state);

  const {id} = useParams<{id: string}>();

  const currentOffer = filteredOffers.find((offer) => offer.id === Number(id));

  useEffect(() => {
    store.dispatch(loadCurrentOfferAction(Number(id)));
    store.dispatch(fetchReviewsAction(Number(id)));
    store.dispatch(fetchNearbyOffersAction(Number(id)));
  }, [id]);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header />
      {currentOffer && (
        <>
          <PropertyCard offers={filteredOffers} selectedPoint={selectedPoint} currentOffer={currentOffer} reviews={reviews} />
          <main className="page__main page__main--property">
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">

                  <PlaceCardList offers={offers} onPlaceCardHover={onPlaceCardHover} typeCard={CardTypes.Nearby}/>

                </div>
              </section>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default PlaceCardScreen;
