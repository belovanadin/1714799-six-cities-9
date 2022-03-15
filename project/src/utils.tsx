const PERC_STAR = 20;

export default function getPercRating(rating: number) {
  return Math.round(rating)*PERC_STAR;
}
