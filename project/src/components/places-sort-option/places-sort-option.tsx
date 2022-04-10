import { useAppDispatch } from '../../hooks';
import { setSortType } from '../../store/offers-process/offers-process';

type PlacesSortOptionProps = {
  activeOption: string;
  option: string;
}

function PlacesSortOption({ activeOption, option }:PlacesSortOptionProps): JSX.Element {

  const dispatch = useAppDispatch();
  const changeActiveCard = () => {
    const sortType = option;
    dispatch(setSortType( sortType ));
  };
  return (
    <li
      className={`places__option ${
        activeOption === option ? 'places__option--active' : ''
      }`}
      tabIndex={0}
      onClick={() => changeActiveCard()}
    >
      {option}
    </li>
  );
}

export default PlacesSortOption;
