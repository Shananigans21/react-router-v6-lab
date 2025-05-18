import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink>
      <NavLink to="/directors" className={({ isActive }) => (isActive ? "active" : undefined)}>Directors</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>About</NavLink>
    </nav>
  );
}

export default NavBar;
