import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link" onClick={toggleMenu}>All-Todos</Link>
        <Link to="/createlist" className="navbar-link" onClick={toggleMenu}>Create-Todos</Link>
      

      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
