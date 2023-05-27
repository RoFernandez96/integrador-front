import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Style from './NavBar.module.css';

const NavBar = ({ onSearch }) => {
  return (
    <div className={Style.nav}>
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button className={Style.home}>Home</button>
      </Link>
      <Link to="/about">
        <button className={Style.about}>About</button>
      </Link>
      <Link to='/Favorites'>
        <button className={Style.favorites}>Favorites</button> 
      </Link>
    </div>
  );
};

export default NavBar;
