import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useMovies } from '../../../hooks'
import logoCreathus from '../../../assets/image/logo-dois.png'
import logo from '../../../assets/image/logo.png'
import { FaSistrix, FaBell, FaPlay, FaInfoCircle } from 'react-icons/fa'

import * as C from './style'

const MovieDetail: React.FC = () => {
  const { movieId } = useParams()
  const { movieDetail, getMovie } = useMovies()

  useEffect(() => {
    getMovie(String(movieId))
  }, [])

  return (
    <C.Style
      image={`${import.meta.env.VITE_URL_BACKEND}/img/movies/${
        movieDetail?.image
      }`}
    >
      <div className="movie_container">
        <div className="movie_logo_home">
          <div className="movie_logo">
            <div className="hero">
              <div className="hero_image">
                <img src={logoCreathus} alt="" />
                <Link to="/">HOME</Link>
              </div>

              <div className="c_show">
                <div className="c_logo">
                  <img src={logo} alt="" />
                  <p>show</p>
                </div>
                <p>{movieDetail?.title.toUpperCase()}</p>
              </div>
            </div>
            <div className="movie_icone">
              <span>
                <FaSistrix />
              </span>
              <span>
                <FaBell />
              </span>
            </div>
          </div>
        </div>

        <div className="movie_info_container">
          <div className="btn_group">
            <button>
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="btn_info">
              <FaInfoCircle />
              <span>Mais Informações</span>
            </button>
          </div>

          <p className="sinopse">SINOPSE & INFO</p>

          <p>{movieDetail?.description}</p>
        </div>
      </div>
    </C.Style>
  )
}

export default MovieDetail
