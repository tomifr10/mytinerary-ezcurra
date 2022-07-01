import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Index from './pages/Index';
import Cities from './pages/Cities';
import CardDetail from './pages/CardDetail';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Toaster } from 'react-hot-toast'
import './styles/App.css';
import './styles/navbar.css';
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
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
        <Toaster
        toastOptions={{
          className: '',
          style: {
            boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
            padding: '8px',
            color: 'black',
            textAlign: "center",
            fontSize: "13px",
          },
        }} />
      <Footer />
    </div>
  );
}

export default App;
