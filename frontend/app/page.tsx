import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';
// import './App.css';
import TheMarvels from './pages/TheMarvels';
import DirectTo from './pages/DirectTo';
import TrollsBandTogether from './pages/TrollsBandTogether';
import Animal from './pages/Animal';
import Napoleon from './pages/Napoleon';
import Srimulat from './pages/Srimulat';

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<DirectTo />}/>
        <Route path="/TheMarvels" element={<TheMarvels />}/>
        <Route path="/TrollsBandTogether" element={<TrollsBandTogether />}/>
        <Route path="/Animal" element={<Animal />}/>
        <Route path="/Napoleon" element={<Napoleon />}/>
        <Route path="/Srimulat" element={<Srimulat />}/>
      </Routes>
    </Router>
  );
}

export default App;
