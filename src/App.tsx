import './App.css';
import { Route, Routes } from 'react-router-dom';
import LetterToLongHa from './pages/Letter';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path='/longha-25' element={<LetterToLongHa />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
