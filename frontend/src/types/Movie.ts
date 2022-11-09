export type Movie = {
  _id: string;
  author: string;
  title: string;
  description: string;
  image: string | File;
}

export type ResultAll = {
  message: string;
  total: number;
  movies: Movie[]
}
