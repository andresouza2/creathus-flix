import * as C from './style'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/logo.png'
import { FaHome, FaUserPlus } from 'react-icons/fa'

const Sidebar: React.FC = () => {
  return (
    <C.SidebarDiv>
      <h1>
        <img src={Logo} alt="" />
      </h1>

      <nav>
        <Link to="/">
          <FaHome />
          <span>Inicio</span>
        </Link>

        <Link to="adicionar">
          <FaUserPlus />
          <span>Adicionar</span>
        </Link>
      </nav>
    </C.SidebarDiv>
  )
}

export default Sidebar
