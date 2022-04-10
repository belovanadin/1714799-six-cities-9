import { useState } from 'react';
import { sortingType } from '../../utils';
import PlacesSortOption from '../places-sort-option/places-sort-option';

type PlacesSortProps = {
  sortType: string;
}

function PlacesSort({sortType}: PlacesSortProps):JSX.Element {

  const [isOpenSortPopup, toggleOpenSortPopup] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => toggleOpenSortPopup(!isOpenSortPopup)}>
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSortPopup ? 'places__options--opened': ''}`}>
        {sortingType.map((type) => (
          <PlacesSortOption
            activeOption={sortType}
            key={type}
            option={type}
          />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSort;
