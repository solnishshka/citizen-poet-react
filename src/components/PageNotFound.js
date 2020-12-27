import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3>
        <span>404</span> - Страница не найдена
      </h3>
      <p>Скоро здесь будет контент</p>
      <Link to="/">
        <button className="button">
          Вернуться на главную
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
