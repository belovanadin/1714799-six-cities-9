import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

type HeaderProps = {
  isThisPageLogin?: boolean;
}

function Header({isThisPageLogin}:HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {!isThisPageLogin ? <HeaderNav /> : ''}
        </div>
      </div>
    </header>
  );
}

export default Header;
