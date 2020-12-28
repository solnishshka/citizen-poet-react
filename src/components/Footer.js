import { Link, useRouteMatch } from "react-router-dom";

export default function Footer(props) {
  const { url, path } = useRouteMatch();
  console.log(path);

  return (
    <footer className={url === "/" ?  "footer footer_theme_main" : "footer"}>
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
