import React from 'react'
// import filmeUm from '../../assets/image/filme_um.jpg'
import { CardComponent } from './style'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export type CardItemProps = {
  id: string
  author?: string
  title: string
  description?: string
  image: string | File
}

const Cards: React.FC<CardItemProps> = ({ id, title, image }) => {
  return (
    <CardComponent>
      <div className="card__img">
        <Link to={`/movie/${id}`}>
          <img
            src={`${import.meta.env.VITE_URL_BACKEND}/img/movies/${image}`}
            alt="imagem do filme"
          />
        </Link>
      </div>
      <div className="card__body">
        <span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <p>{title}</p>
      </div>
    </CardComponent>
  )
}

export default Cards
