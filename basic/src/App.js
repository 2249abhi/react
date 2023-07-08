//import logo from './logo.svg';
import './App.css';
import Layout from './cmp/Layout';
import Home from './cmp/Home';
import About from './cmp/About';
import Contactus from './cmp/Contactus';
import Profile from './Profile';
import User from './User';
import Forms from './Forms';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contactus />} />
            <Route path="about" element={<About />} />
          </Route>        
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        
        
        <Forms />
        <Profile text={{name:'ABHI'}} data="Profile class Data" />
        {/* <Profile text={{name:'rahul'}} data="rahul Profile class Data" /> */}
        {/* <User text="(User text from app)" /> */}
        <User text={{name:'SHRI'}} data="user fun Data" />
      </header>
    </div>
  );
}

export default App;
