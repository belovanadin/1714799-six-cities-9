import { City } from '../../types/city';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/offers-process/offers-process';

type CitiesItemProps = {
  activeCity: City;
  city: City;
};

function CitiesItem({city, activeCity}:CitiesItemProps): JSX.Element {

  const { name } = city;

  const isActive = name === activeCity.name ? 'tabs__item--active' : '';
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive}`} to='/'
        onClick={() => dispatch(setCity(city))}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default CitiesItem;
