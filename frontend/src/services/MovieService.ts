import { api } from "../providers";
import { ResultAll, Movie } from "../types";

// Método GET - buscar todos os filmes
const getAll = () => api.get<ResultAll>('/movies');

// Metodo GET - buscar um filme apenas, pelo id
const getMovie = (id: string) => api.get<Movie>(`/movies/${id}`);


// Método POST - cadastrar novo filme
const createMovie = (movie: Pick<Movie, 'author' | 'title' | 'description' | 'image'>) => api.post("/movies/register", movie, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export const MovieService = {
  getAll,
  createMovie,
  getMovie
}
