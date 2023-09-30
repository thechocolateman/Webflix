import './App.css';
import MainTemplate from "./pages/Main"
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Splash from './pages/Splash';
import TvTemplate from './pages/TV';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/splash" element={<Splash />}/>
        <Route path="/" element={<MainTemplate />} />
        <Route path="/home" element={<MainTemplate />}/>
        <Route path="/movies" element={<MainTemplate />}/>
        <Route path="/tvseries" element={<TvTemplate />}/>
      </Routes>
    </div>
  );
}

export default App;
