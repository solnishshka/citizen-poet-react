import logo from '../images/logo.svg';
import searchIcon from '../images/search.png';

export default function Header(props) {
    return (
        <header className="header">
        <a href="/"><img className="header__logo" src={logo} alt="" /></a>
        <nav className="header__menu">
          <ul className="header__menu-items">
            <li className="header__menu-item">
              <a href="/about" className="header__menu-link">О ПОРТАЛЕ</a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">КАТЕГОРИИ</a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">РЕЗУЛЬТАТЫ</a>
            </li>
          </ul>
        </nav>
        <div className="header__right-column">
          <img src={searchIcon} alt="" className="header__search-icon" />
          <a href="#" className="header__link">МОЙ КАБИНЕТ</a>
          <button type="button" className="header__button">
            СОЗДАТЬ ОБРАЩЕНИЕ
          </button>
        </div>
      </header>
    );
}