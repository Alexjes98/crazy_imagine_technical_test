import { useState } from 'react'
import MainLayout from './components/layout/MainLayout.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes/appRoutes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout/>}>
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
