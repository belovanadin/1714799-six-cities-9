import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';
import Favorites from '../favorites-screen/favorites-screen';
import Room from '../../pages/room-screen';
import SignIn from '../../pages/sign-in';
import Main from '../main/main';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { FavoriteOfferType } from '../../types/favorite-offer';
import { ReviewType } from '../../types/review';

 type AppProps = {
   favoriteOffers: FavoriteOfferType[];
   reviews: ReviewType[];
 }

function App({favoriteOffers, reviews}: AppProps): JSX.Element {
  const offers = useAppSelector ((state) => state.offersList);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers = {offers}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AutorizationStatus.Auth}
            >
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Room offers={offers[0]} reviews={reviews}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
