import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecretWord from './components/SecretWord';
import StartScreen from './pages/StartScreen';
import Navbar from './components/Navbar';









function App() {

  return (
    <div>
    
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/secretword" element={<SecretWord />} />
              <Route path="/" element={<StartScreen />} />
            </Routes>
          </div>
        </BrowserRouter>


    </div>
  );
}

export default App;
