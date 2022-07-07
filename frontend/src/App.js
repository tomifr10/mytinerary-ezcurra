import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Index from './pages/Index';
import Cities from './pages/Cities';
import CardDetail from './pages/CardDetail';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Toaster } from 'react-hot-toast';
import './styles/App.css';
import './styles/navbar.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usersActions from './redux/actions/usersActions';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      dispatch(usersActions.tokenVerification(token))
    }
  },[]);

  const user = useSelector(store => store.usersReducer.user)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/home" element={<Index/>}/>
        <Route path="/cities" element={<Cities/>}/>
        <Route path="/CardDetail/:id" element={<CardDetail/>}/>
        {!user && <Route path="/signIn" element={<SignIn/>}/>}
        {!user && <Route path="/signUp" element={<SignUp/>}/>}
      </Routes>
        <Toaster
        toastOptions={{
          className: '',
          style: {
            boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
            padding: '.8rem',
            color: 'black',
            textAlign: "center",
            fontSize: "1rem",
          },
        }} />
      <Footer />
    </div>
  );
}

export default App;
