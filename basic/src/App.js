//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import User from './User';
import Forms from './Forms';

function App() {
  return (
    <div className="App">
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
        <Home />
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
