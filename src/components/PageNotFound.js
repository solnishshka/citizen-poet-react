import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Страница не найдена
      </h3>
      <p className="not-found__text">Скоро здесь будет контент</p>
      <Link to="/">
        <button className="button button_theme_apply">
          Вернуться на главную
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
