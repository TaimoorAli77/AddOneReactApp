// import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about"> About</Link></li>
            <li><Link to="/contact">Contact </Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
      
    </div>
  );
}

export default Navbar;
