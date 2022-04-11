import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer';
import {AppRoute, AuthorizationStatus} from '../../const';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {toggleFavoriteAction, fetchOfferAction, loadFavoriteAction} from '../../store/api-action';
import getPercRating from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState } from 'react';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type PlaceCardProps = {
  offer: OfferType;
  onActiveOfferChange: (offer: OfferType | null) => void;
}

function PlaceCard({offer, onActiveOfferChange}: PlaceCardProps): JSX.Element {
  const {price, title, previewImage, type, rating, isPremium, id} = offer;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isOfferFavorite, setToggleFavorite] = useState(offer.isFavorite);
  const dispatch = useAppDispatch();
  const postFavoriteFlag = offer.isFavorite ? 0 : 1;

  const handleFavoriteClick = () => {

    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    dispatch(toggleFavoriteAction({
      id: offer.id,
      flag: postFavoriteFlag,
    }));

    setToggleFavorite(!isOfferFavorite);

    dispatch(fetchOfferAction());
    dispatch(loadFavoriteAction());
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver = {() => {
        onActiveOfferChange(offer);}}
      onMouseOut = {() => onActiveOfferChange(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            isFavorite={offer.isFavorite}
            handleBookmarkButtonClick={handleFavoriteClick}
            isSmall
            prefix={'place-card'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getPercRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
