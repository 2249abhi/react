import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/detail">Detail</Link></li>
          <li><Link to="/list">list</Link></li>
          <li><Link to="/search">search</Link></li>
          <li><Link to="/update">update</Link></li>
        </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };

  export default Layout;