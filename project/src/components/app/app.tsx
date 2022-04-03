import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';
import Favorites from '../favorites-screen/favorites-screen';
import SignIn from '../../pages/sign-in';
import Main from '../main/main';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route/private-route';
import PlaceCardScreen from '../place-card-screen/place-card-screen';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
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
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PlaceCardScreen/>}
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
