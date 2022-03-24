import './App.css';
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Home from './components/Home';
import CountryDetail from './components/ContryDetail';
import AddActivity from './components/addActivity';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/countries/:id" element={<CountryDetail />} />
        <Route path="/activity" element={<AddActivity />} />
      </Routes>
    </div>
  );
}

export default App;
