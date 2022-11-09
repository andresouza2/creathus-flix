// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../layouts/Sidebar'
// import MoviesAll from '../Movies/MoviesAll'
import { Component } from './style'

const Home: React.FC = () => {
  return (
    <Component>
      <Sidebar />
      <Outlet />
    </Component>
  )
}

export default Home
