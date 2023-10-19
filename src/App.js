import './App.css';
import { lazy } from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Splash from './pages/Splash';
import Search from './pages/Search';
import TvTemplate from './pages/TV';
import LatestTemplate from './pages/Latest';
import { Suspense, React } from 'react';
import "./init"
// const MainTemplate = lazy(() =>import("./pages/Main"))
import MainTemplate from './pages/Main';


const renderLoader = () => <p className="backgroundColor=red">Loading</p>;

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/splash" element={<Splash />}/>
        <Route path="/" element={<MainTemplate />} />
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<MainTemplate />}/>
        <Route path="/movies" element={<MainTemplate />}/>
        <Route path="/tvseries" element={<TvTemplate />}/>
        <Route path="/latest" element={<LatestTemplate />}/>
      </Routes>
    </div>
  );
}

export default App;
