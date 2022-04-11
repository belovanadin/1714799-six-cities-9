import { OfferType } from '../../types/offer';
import { ReviewType } from '../../types/review';
import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';
import PropertyGallery from '../property-gallery/property-gallery';
import Map from '../map/map';
import getPercRating from '../../utils';
import { AppRoute, AuthorizationStatus } from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {useState} from 'react';
import { toggleFavoriteAction } from '../../store/api-action';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type PropertyCardProps = {
  offers: OfferType[];
  currentOffer: OfferType;
  reviews: ReviewType[];
};

function PropertyCard({offers, currentOffer, reviews }: PropertyCardProps):JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isOfferFavorite, setToggleFavorite] = useState(currentOffer.isFavorite);
  const dispatch = useAppDispatch();
  const postFavoriteFlag = currentOffer.isFavorite ? 0 : 1;
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const { id: currentId } = currentOffer;

  const handleFavoriteClick = () => {
    if (!isAuth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    dispatch(toggleFavoriteAction({
      id: currentId,
      flag: postFavoriteFlag,
    }));

    setToggleFavorite(!isOfferFavorite);
  };

  return (
    <section className="property">

      <PropertyGallery offer = {currentOffer} />

      <div className="property__container container">
        <div className="property__wrapper">
          {currentOffer.isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {currentOffer.title}
            </h1>
            <BookmarkButton
              isFavorite={currentOffer.isFavorite}
              handleBookmarkButtonClick={handleFavoriteClick}
              isSmall={false}
              prefix={'property'}
            />
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: `${getPercRating(currentOffer.rating)}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{currentOffer.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {currentOffer.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {currentOffer.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {currentOffer.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{currentOffer.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                currentOffer.goods.map((insides:string) => {
                  const keyValue = insides;
                  return (
                    <li key={keyValue} className="property__inside-item">
                      {insides}
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {currentOffer.host.name}
              </span>
              {currentOffer.host.isPro &&
              <span className="property__user-status">
                Pro
              </span>}
            </div>
            <div className="property__description">
              <p className="property__text">
                {currentOffer.description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

            <ReviewList reviews={reviews} />
            {isAuth ? <ReviewForm currentOffer={currentOffer} currentId={currentId} />: ''}

          </section>
        </div>
      </div>
      <div style = {{ width:'80%', margin:'0 auto', marginBottom:'50px'}}>
        <Map city={currentOffer.city} currentOffers={[...offers, currentOffer]} selectedPoint={currentOffer} className={'property__map map'} height={500}/>
      </div>
    </section>
  );
}

export default PropertyCard;
