import { MouseEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const ButtonSize = {
  SMALL: {
    width: '18',
    heigth: '19',
  },
  BIG: {
    width: '31',
    heigth: '33',
  },
};

type BookmarkButtonProps = {
  isFavorite: boolean,
  isSmall: boolean,
  prefix: string,
  handleBookmarkButtonClick: (evt: MouseEvent<HTMLButtonElement>) => void,
}

function BookmarkButton({ handleBookmarkButtonClick, isFavorite, isSmall, prefix }: BookmarkButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <button
      className={`${prefix}__bookmark-button ${isFavorite && isAuth ?  `${prefix  }__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleBookmarkButtonClick}
    >
      <svg
        className={`${prefix}__bookmark-icon`}
        width={isSmall ? ButtonSize.SMALL.width : ButtonSize.SMALL.heigth}
        height={isSmall ? ButtonSize.BIG.width : ButtonSize.BIG.heigth}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
