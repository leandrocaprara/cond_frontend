import React, { Suspense, useContext } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

import { AuthProvider, AuthContext } from './contexts/auth'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  // eslint-disable-next-line react/prop-types
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext)

    if (!authenticated) {
      return <Navigate to="login"/>
    }

    return children
  }
  return (
      <HashRouter>
        <Suspense fallback={loading}>
          <AuthProvider>
            <Routes>
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route path="*" name="Home" element={<Private><DefaultLayout /></Private>} />
            </Routes>
          </AuthProvider>
        </Suspense>
      </HashRouter>
  )
}

export default App
