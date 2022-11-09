import { NavLink } from 'react-router-dom'

const NoPage: React.FC = () => {
  return (
    <div>
      <h2>Você está se aventurando em terras estranhas! - Erro 404</h2>
      <NavLink to="/">Voltar</NavLink>
    </div>
  )
}

export default NoPage
