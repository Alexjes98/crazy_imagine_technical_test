/*
  Este componente es el encargado de renderizar la aplicación.
  Contiene el componente BrowserRouter de react-router-dom.
  Contiene el componente Routes de react-router-dom.
  Y sobre el componente Routes se renderizan las rutas de la aplicación.
  Primero se renderiza el componente MainLayout, que contiene la barra superior y la barra lateral.
  Y dentro del componente MainLayout se renderizan las rutas de la aplicación.
*/
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import routes from './routes/appRoutes'
import MainLayout from './components/layout/MainLayout.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
