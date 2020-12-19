import logo from "../images/logo.svg";
import searchIcon from "../images/search.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <nav className="header__menu">
        <ul className="header__menu-items">
          <li className="header__menu-item">
            <Link to="/about" className="header__menu-link">
              О ПОРТАЛЕ
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/categories" className="header__menu-link">
              КАТЕГОРИИ
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="#" className="header__menu-link">
              РЕЗУЛЬТАТЫ
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__right-column">
        <img src={searchIcon} alt="" className="header__search-icon" />
        <a href="#" className="header__link">
          МОЙ КАБИНЕТ
        </a>
        <Link to="/categories">
          <button type="button" className="header__button">
            СОЗДАТЬ ОБРАЩЕНИЕ
          </button>
        </Link>
      </div>
    </header>
  );
}
