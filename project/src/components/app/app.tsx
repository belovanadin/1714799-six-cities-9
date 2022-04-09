import { Route, Routes } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import Favorites from '../favorites-screen/favorites-screen';
import SignIn from '../../pages/sign-in';
import Main from '../main/main';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route/private-route';
import PlaceCardScreen from '../place-card-screen/place-card-screen';
import Spinner from '../spinner-component/spinner-component';
import { useAppSelector } from '../../hooks';

const isCheckedAuth = (authorizationStatus: AutorizationStatus): boolean =>
  authorizationStatus === AutorizationStatus.Unknown;

function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
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
              authorizationStatus={AutorizationStatus}
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
    </HistoryRouter>
  );
}

export default App;
