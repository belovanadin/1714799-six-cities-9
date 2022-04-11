import CitiesItem from '../cities-item/cities-item';
import {citiesList} from '../../const';
import { useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/offers-process/selectors';

function CitiesList(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);


  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((item) => <CitiesItem city={item} key={item.name} activeCity={currentCity} />)}
    </ul>
  );
}

export default CitiesList;
