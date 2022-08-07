import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.navLink)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.navLink)}
        to="/movie"
      >
        Movie
      </NavLink>
    </nav>
  );
};
export default Navigation;
