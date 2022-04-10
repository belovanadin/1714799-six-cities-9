import {Link, Navigate} from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loginAction } from '../store/api-action';
import { AppRoute, AuthorizationStatus } from '../const';
import { getUserLogin } from '../store/user-process/user-process';


function SignInScreen(): JSX.Element {

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {currentCity} = useAppSelector(({OFFERS}) => OFFERS);

  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const loginChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const { value } = evt.target;
    setLogin(value);
  };

  const passwordChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const { value } = evt.target;
    setPassword(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (login !== '' && password !== '') {
      dispatch(
        loginAction({
          login: login,
          password: password,
        }),
      );
      dispatch(getUserLogin(login));
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={login}
                onChange={loginChangeHandler}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={passwordChangeHandler}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link to={AppRoute.Main} className="locations__item-link" >
              <span>{currentCity.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignInScreen;
