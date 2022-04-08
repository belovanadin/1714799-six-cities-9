import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer';
import { AppRoute, CardTypes, PERCENT_PER_STAR } from '../../const';

type PlaceCardProps = {
  offers: OfferType;
  onActiveOfferChange: (offer: OfferType | null) => void;
  typeCard: CardTypes;
}

type CardsParametrs = {
  mainClass: string;
  classPrefix: string;
  imgWidth: number;
  imgHeight: number;
}

const getParametrs = (type: CardTypes): CardsParametrs => {
  switch (type) {
    case CardTypes.Main:
      return {
        mainClass: 'cities__place-card',
        classPrefix: CardTypes.Main,
        imgWidth: 260,
        imgHeight: 200,
      };
    case CardTypes.Favorites:
      return {
        mainClass: 'favorites__card',
        classPrefix: CardTypes.Favorites,
        imgWidth: 150,
        imgHeight: 110,
      };
    case CardTypes.Nearby:
      return {
        mainClass: 'near-places__card',
        classPrefix: CardTypes.Nearby,
        imgWidth: 260,
        imgHeight: 200,
      };
    default:
      return {
        mainClass: 'cities__place-card',
        classPrefix: CardTypes.Main,
        imgWidth: 260,
        imgHeight: 200,
      };
  }
};


function PlaceCard({offers, onActiveOfferChange, typeCard}: PlaceCardProps): JSX.Element {
  const {price, title, previewImage, type, rating, isPremium, id} = offers;
  const { mainClass, classPrefix, imgWidth, imgHeight } = getParametrs(typeCard);
  return (
    <article
      className={`${mainClass} place-card`}
      onMouseOver = {() => {
        onActiveOfferChange(offers);}}
      onMouseOut = {() => onActiveOfferChange(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgWidth}
            height={imgHeight}
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * PERCENT_PER_STAR}%`}}></span>
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
