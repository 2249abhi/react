import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,useParams, Outlet, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="create" element={<RestaurantCreate />} />
            <Route path="detail" element={<RestaurantDetail />} />
            <Route path="list" element={<RestaurantList />} />
            <Route path="search" element={<RestaurantSearch />} />
            <Route path="update/:id" element={<RestaurantUpdate />} render={props=>(<RestaurantUpdate {...props} />
            )} />
          </Route>
        </Routes>
        <header className="App-header"></header>
      </BrowserRouter>
    </div>
  );
}

export default App;
