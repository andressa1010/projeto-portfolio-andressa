

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import Projetos from './Pages/projetos'
import Contato from './Pages/contato'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projetos" element={<Projetos/>}/>
      <Route path="/contato" element={<Contato/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
