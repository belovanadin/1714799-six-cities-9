import { OfferType } from '../types/offer';
import Header from '../components/header/header';
import PropertyCard from '../components/property-card/property-card';
import PlaceCardList from '../components/place-card-list/place-card-list';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { store } from '../store';
import { useParams } from 'react-router-dom';
import { loadCurrentOfferAction, fetchReviewsAction, fetchNearbyOffersAction } from '../store/api-action';
import NotFoundPage from './not-found-page';
import Spinner from '../components/spinner/spinner';
import { getCurrentOffer, getNearbyOffers, getOfferReviews, getCurrentOfferLoaded, getFavoriteOffers } from '../store/offers-data/selectors';

function PlaceCardScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const [, setSelectedPoint] = useState<OfferType | null>(null);
  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };
  const favorites = useAppSelector(getFavoriteOffers);
  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getOfferReviews);
  const offers = useAppSelector(getNearbyOffers);
  const isCurrentOfferLoaded = useAppSelector(getCurrentOfferLoaded);
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    store.dispatch(loadCurrentOfferAction(Number(id)));
    store.dispatch(fetchReviewsAction(Number(id)));
    store.dispatch(fetchNearbyOffersAction(Number(id)));
  }, [id, dispatch, favorites, isCurrentOfferLoaded]);

  if (isCurrentOfferLoaded === false) {
    return (
      <Spinner />
    );
  }

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header />
      {currentOffer !==null && (
        <>
          <PropertyCard offers={offers} currentOffer={currentOffer} reviews={reviews} />
          <main className="page__main page__main--property">
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">

                  <PlaceCardList className="near-places__list places__list" offers={offers} onPlaceCardHover={onPlaceCardHover} />

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
