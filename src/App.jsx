import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categoria from './pages/Categoria';
import Emprendedor from './pages/Emprendedor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/emprendedor" element={<Emprendedor />} />
      </Routes>
    </Router>
  );
}

export default App
