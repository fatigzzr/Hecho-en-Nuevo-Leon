import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categoria from './pages/Categoria';
import Categorias from './pages/Categorias';
import Emprendedor from './pages/Emprendedor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:nombre" element={<Categoria />} />
        <Route path="/emprendedores/:id" element={<Emprendedor />} />
      </Routes>
    </Router>
  );
}

export default App
