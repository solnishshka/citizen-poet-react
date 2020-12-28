import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__links">
          <li className="footer__link-item">
            <Link className="footer__link" to="/about">
              О портале
            </Link>
          </li>
          <li className="footer__link-item">
            <Link className="footer__link" to="/categories">
              Категории
            </Link>
          </li>
          <li className="footer__link-item">
            <Link className="footer__link" to="/result">
              Результаты
            </Link>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">@2021 New Year</p>
    </footer>
  );
}
