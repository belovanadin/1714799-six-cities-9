import { OfferType } from '../../types/offer';
import FavoriteList from '../favorites-list/favorites-list';
import Header from '../header/header';
import Footer from '../footer/footer';

type FavoritesProps = {
  offers: OfferType[];
}

function FavoritesScreen({offers}: FavoritesProps): JSX.Element {
  return (
    <>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList favoriteOffers={offers} />
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}
export default FavoritesScreen;
