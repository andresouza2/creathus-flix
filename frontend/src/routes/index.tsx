import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home'))
const NoPage = React.lazy(() => import('../pages/NoPage'))
const MoviesAdd = React.lazy(() => import('../pages/Movies/MoviesAdd'))
const MovieDetail = React.lazy(() => import('../pages/Movies/MovieDetail'))
const MovieAll = React.lazy(() => import('../pages/Movies/MoviesAll'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>aguarde...</>}>
            <Home />
          </React.Suspense>
        }
      >
        <Route
          path="adicionar"
          element={
            <React.Suspense fallback={<>aguarde novamente...</>}>
              <MoviesAdd />
            </React.Suspense>
          }
        />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>aguarde novamente...</>}>
              <MovieAll />
            </React.Suspense>
          }
        />
      </Route>
      <Route
        path="movie/:movieId"
        element={
          <React.Suspense fallback={<>aguarde...</>}>
            <MovieDetail />
          </React.Suspense>
        }
      />

      <Route
        path="*"
        element={
          <React.Suspense fallback={<>aguarde...</>}>
            <NoPage />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default MyRoutes
