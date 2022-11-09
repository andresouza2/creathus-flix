import { useCallback, useState } from 'react'
import { MovieService } from '../services'
import { Movie, ResultAll } from '../types'

export const useMovies = () => {
  const [movies, setMovies] = useState<ResultAll>({
    message: '',
    total: 0,
    movies: [],
  })
  const [movieDetail, setMovieDetail] = useState<Movie>({
    _id: '',
    author: '',
    title: '',
    description: '',
    image: '',
  })

  const getAll = useCallback(async () => {
    await MovieService.getAll()
      .then((response) => {
        setMovies(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const createMovie = useCallback(
    async (
      movie: Pick<Movie, 'author' | 'title' | 'description' | 'image'>
    ) => {
      await MovieService.createMovie(movie)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          throw new Error('error: ' + error)
        })
    },
    []
  )

  const getMovie = useCallback(async (movie: string) => {
    if (movie) {
      await MovieService.getMovie(movie)
        .then((response) => {
          setMovieDetail(response.data)
        })
        .catch((error) => {
          throw new Error('error: ' + error)
        })
    }
  }, [])

  return {
    movies,
    movieDetail,
    setMovieDetail,
    getAll,
    createMovie,
    getMovie,
  }
}
