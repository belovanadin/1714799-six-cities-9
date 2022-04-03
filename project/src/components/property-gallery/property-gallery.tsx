import { OfferType } from '../../types/offer';

type PropertyGalleryProps = {
  offer: OfferType;
};

const MAX_PHOTOS = 6;

function PropertyGallery({offer}: PropertyGalleryProps): JSX.Element {

  const cutPhotosQuantity = offer.images.slice(0, MAX_PHOTOS);
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          cutPhotosQuantity.map((imageUrl: string , id: number) => {
            const keyValue = id + imageUrl;
            return (
              <div key = {keyValue} className="property__image-wrapper">
                <img className="property__image" src={imageUrl} alt="room_photo"/>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default PropertyGallery;
