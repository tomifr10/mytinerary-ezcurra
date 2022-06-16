import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Index from './pages/Index'
import Cities from './pages/Cities'
import CardDetail from './pages/CardDetail';
import './styles/App.css';
import './styles/navbar.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/home" element={<Index/>}/>
        <Route path="/cities" element={<Cities/>}/>
        <Route path="/CardDetail/:id" element={<CardDetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
