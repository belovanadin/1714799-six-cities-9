import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { LogoTypes } from '../../const';

type LogoProps = {
  type: LogoTypes;
};

type Parametrs = {
  classPrefix: string;
  width: number;
  height: number;
};

const getParametrs = (type: LogoTypes): Parametrs => {
  switch (type) {
    case LogoTypes.Header:
      return { classPrefix: LogoTypes.Header, width: 81, height: 41 };
    case LogoTypes.Footer:
      return { classPrefix: LogoTypes.Footer, width: 64, height: 33 };
    default:
      return { classPrefix: LogoTypes.Header, width: 81, height: 41 };
  }
};

function Logo({type}: LogoProps): JSX.Element {
  const {  width, height } = getParametrs(type);
  return (
    <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}


export default Logo;
