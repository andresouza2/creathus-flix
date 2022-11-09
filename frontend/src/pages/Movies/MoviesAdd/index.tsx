import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/Form/Input'
import TextArea from '../../../components/Form/TextArea'
import { useMovies } from '../../../hooks'
import { Movie } from '../../../types'
import * as C from './style'

const MoviesAdd = () => {
  const [movieAdd, setMovieAdd] = useState<Movie>({
    _id: '',
    author: '',
    description: '',
    title: '',
    image: '',
  })
  const [image, setImage] = useState('')
  const { createMovie } = useMovies()

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.value) {
      setMovieAdd({ ...movieAdd, [e.target.name]: e.target.value })
    }
  }

  const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()

    if (e.target.value) {
      setMovieAdd({ ...movieAdd, [e.target.name]: e.target.value })
      console.log(e.target.value)
    }
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files && e.target.files.length > 0) {
      setMovieAdd({ ...movieAdd, [e.target.name]: e.target.files[0] })
      const url = URL.createObjectURL(e.target.files[0])
      setImage(url)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    createMovie(movieAdd)
    console.log(movieAdd)
    navigate('/')
  }

  return (
    <C.Style>
      <div className="movie_add">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="group_primary">
            <div className="img_group">
              {image ? <img src={image} alt="imagem" width="180" /> : 'nao tem'}
            </div>
            <div className="input_group">
              <Input
                type="text"
                text="Autor"
                name="author"
                handleOnCheange={handleChange}
              />
              <Input
                type="text"
                text="Titulo"
                name="title"
                handleOnCheange={handleChange}
              />

              <TextArea
                text="Descrição"
                name="description"
                handleOnCheange={handleChangeArea}
              />
            </div>
          </div>
          <div className="group_second">
            <Input type="file" name="image" handleOnCheange={onFileChange} />
            <div className="group_button">
              <Input type="submit" name="button" value="Postar" />
              <Input type="reset" name="button" value="Cancelar" />
            </div>
          </div>
        </form>
      </div>
    </C.Style>
  )
}

export default MoviesAdd
