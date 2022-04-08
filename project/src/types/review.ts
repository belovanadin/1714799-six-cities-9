export type ReviewType = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
};

export type ReviewTypeData = {
  id: number;
  comment: string;
  rating: number;
}

export type ReviewWithIdType = {
  comment: string;
  rating: number;
  id: number;
}
