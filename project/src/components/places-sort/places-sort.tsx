import { useState } from 'react';
import { SortType } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setSortPlaces } from '../../store/action';

type PlacesSortProps = {
  sortType: string;
}

function PlacesSort({sortType}: PlacesSortProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={(evt) => {evt.preventDefault(); return setIsOpenOptions(!isOpenOptions);}}
    >
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpenOptions &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortType).map((name, index) =>
            (
              <li className={`places__option ${(sortType === name)? 'places__option--active' : ' '}`}
                tabIndex = {index}
                key={name}
                onClick={() => dispatch(setSortPlaces(name))}
              >
                {name}
              </li>
            ))}
        </ul>
      }
    </form>
  );
}

export default PlacesSort;
