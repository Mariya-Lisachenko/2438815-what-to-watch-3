export type ReviewType = {
  id: number;
  text: string;
  author: string;
  date: string;
  rating: number;
}

export type Reviews = ReviewType[];
