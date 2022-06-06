import BSCarousel from './components/BSCarousel';
import Subtitle from './components/SubTitle';
import VideoMain from './components/VideoMain';
import Footer from "./components/Footer"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/navbar.css'

function App() {
  return (
    <div className="App">
      <VideoMain/>
      <Subtitle/>
      <BSCarousel/>
      <Footer />
    </div>
  );
}

export default App;
