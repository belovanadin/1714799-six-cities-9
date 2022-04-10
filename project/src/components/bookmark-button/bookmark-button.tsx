import { MouseEvent } from 'react';

const ButtonSize = {
  small: {
    width: '18',
    heigth: '19',
  },
  big: {
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

  return (
    <button
      className={`${prefix}__bookmark-button ${isFavorite ?  `${prefix  }__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleBookmarkButtonClick}
    >
      <svg
        className="place-card__bookmark-icon"
        width={isSmall ? ButtonSize.small.width : ButtonSize.small.heigth}
        height={isSmall ? ButtonSize.big.width : ButtonSize.big.heigth}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
