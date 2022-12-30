import logo from './logo.svg';
import Profile from './components/Profile';
import Groups from './components/Groups';
import Cursuri from './components/Cursuri';
import Seminare from './components/Seminare';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

function App() {
  return (
    <div className="App">
 
      <Router>
      <Routes>
      <Route path="/" element={< Login/>} />
      <Route path="/register" element={< Register/>} />
      <Route path="/cursuri" element={< Cursuri/>} />
        <Route path="/seminare" element={<Seminare />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/grupuri" element={<Groups />} />


      </Routes>
    </Router>
    
    </div>
  );
}


export default App;
