import logo from './logo.svg';
import './App.css';
import Home from './Pages/Homepage.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import { Link, Switch, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage.js';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
