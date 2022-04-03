import CitiesItem from '../cities-item/cities-item';
import {citiesList} from '../../const';
import { useAppSelector } from '../../hooks';

function CitiesList(): JSX.Element {
  const { currentCity } = useAppSelector((state) => state);

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((item, id) => <CitiesItem city={item} key={item.name} activeCity={currentCity} />)}
    </ul>
  );
}

export default CitiesList;
