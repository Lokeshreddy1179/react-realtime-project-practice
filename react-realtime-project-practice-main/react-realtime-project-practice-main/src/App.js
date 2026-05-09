// import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './body/home/Home';
import About from './body/about/About';
import Services from './body/services/Services';
import Contact from './body/contact/Contact';
import './header/./Header.css'

function App() {
  return (
    <div className="App">

      {/* <Header></Header> */}

      <Router>

        <nav className="header nav">

          <div className="logo">Dheeraj</div>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <div className="search">
            <input type="text" placeholder="Search..." />
            <button type="button">Search</button>
          </div>

        </nav>




        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div>
        {/* <header className="App-header">
         
          <h1>Contacts Managment system</h1>

          <p>
            Hello ,Welcome to my application :)    </p>

        </header> */}

      </div>


    </div>
  );
}

export default App;
