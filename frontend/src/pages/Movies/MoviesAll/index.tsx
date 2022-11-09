import { useEffect } from 'react'
import { useMovies } from '../../../hooks'
import Cards from '../../../components/Cards'
import * as C from './style'

const MoviesAll: React.FC = () => {
  const { movies, getAll } = useMovies()

  useEffect(() => {
    getAll()
  }, [])

  return (
    <C.Style>
      <div className="movie_container">
        <div className="movie_container_titulos">
          <h2>Últimos filmes adicionados</h2>

          <p>Próximos filmes</p>
        </div>
        <div className="movie_container_button">
          <button>Próximo</button>
        </div>
      </div>

      <div className="group_card">
        {movies?.movies.map((movie) => (
          <Cards
            key={movie._id}
            id={movie._id}
            title={movie.title}
            image={movie.image}
          />
        ))}
      </div>
    </C.Style>
  )
}

export default MoviesAll
