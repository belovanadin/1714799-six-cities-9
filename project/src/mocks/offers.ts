import { OfferType } from '../types/offer';

export const offers: OfferType[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
    ],
    host: {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': true,
      'name': 'Angelina',
    },
    id: 1,
    images: [
      'img/1.png',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 4,
    city: {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      name: 'Amsterdam',
    },
    description: 'This five-star hotel with friendly staff who speaks several languages, including Russian and English.',
    goods: [
      'Heating',
    ],
    host: {
      'avatarUrl': 'img/1.png',
      'id': 2,
      'isPro': true,
      'name': 'Angelina',
    },
    id: 1,
    images: [
      'img/1.png',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/1.png',
    price: 160,
    rating: 4.4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    bedrooms: 2,
    city: {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    description: 'It is a fifteen storey building, which is located in the centre of Paris. The hotel has 100 rooms.',
    goods: [
      'Heating',
    ],
    host: {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': false,
      'name': 'Mark',
    },
    id: 1,
    images: [
      'img/1.png',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 1,
    previewImage: 'img/1.png',
    price: 220,
    rating: 4.3,
    title: 'These hotels are regarded perfect all over the world.',
    type: 'Hotel',
  },
  {
    bedrooms: 8,
    city: {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      name: 'Amsterdam',
    },
    description: 'The kitchen is small, but, as I said before, quite cozy. The biggest room in the apartment is the living room.',
    goods: [
      'Heating',
    ],
    host: {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Dmitrii',
    },
    id: 4,
    images: [
      'img/1.png',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 120,
    rating: 4.8,
    title: 'Bright 3 room apartment for up to 6 people',
    type: 'Apartment',
  },
];
