import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Diario from '../pages/Diario/Diario'
import Menu from '../componentes/Menu/Menu'


function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Sobre />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='comentarios' element={<Comentarios />} />
                <Route path='diario' element={<Diario />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes