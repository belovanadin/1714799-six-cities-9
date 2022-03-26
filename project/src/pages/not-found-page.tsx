import { Link } from 'react-router-dom';
import  Header from '../components/header/header';
import { AppRoute } from '../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <section  style={{marginTop: 80, textAlign: 'center'}}>
          <div>
            <img  src="img/not-found.png" alt="not found page" width='100%' />
          </div>
        </section>

      </main>
      <div style={{height: 480, marginTop: 80, textAlign: 'center'}}>
        <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;


