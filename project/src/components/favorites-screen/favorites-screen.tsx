import FavoriteList from '../favorites-list/favorites-list';
import FavoriteEmpty from '../favorite-empty/favorite-empty';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loadFavoriteAction } from '../../store/api-action';
import { useEffect } from 'react';


function FavoritesScreen(): JSX.Element {
  const {favorites} = useAppSelector(({DATA}) => DATA);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFavoriteAction());
  }, [dispatch]);
  return (
    <>
      <Header/>
      <main className={`page__main page__main--favorites ${favorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {
            favorites.length === 0 ? <FavoriteEmpty /> : <FavoriteList favorites={favorites} />
          }
        </div>
      </main>
      <Footer/>
    </>
  );
}
export default FavoritesScreen;
