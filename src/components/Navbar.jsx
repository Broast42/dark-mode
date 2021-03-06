import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>

      <div className="flexNav">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/charts">Charts</NavLink>
      </div>


      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
