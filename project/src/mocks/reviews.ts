import { ReviewType } from '../types/offer';

export const reviews: ReviewType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Feb 22 2022 13:07:16 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 1.5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 6,
      isPro: true,
      name: 'MaxIvan',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Jun 12 2022 13:07:16 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 4.3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 7,
      isPro: true,
      name: 'Max',
    },
  },
];
