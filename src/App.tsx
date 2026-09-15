import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<div style={{ paddingTop: '100px' }}>Contact Page Coming Soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;