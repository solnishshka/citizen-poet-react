import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-5.png";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import config from "../utils/data";

export default function Success(props) {
  const { url } = useRouteMatch();
  const { name, title } = useParams();

  return (
    <main className="content">
      <PageTemplate
        navLinkText={[
          "Вернуться на главную",
          "Категории",
          config.filter((item) => item.name === name)[0].title,
          config
            .filter((item) => item.name === name)[0]
            .subcategories.filter((item) => item.name === title)[0].title,
          "Адрес", "Сообщение отправлено"
        ]}
        title={"Обращение успешно отправлено!"}
        progressBar={qImage}
      />
      <div className="success">
        <h1 className="success__title">Спасибо!</h1>
        <p className="success__description">
          Ваше обращение успешно отправлено и принято в обработку. Отчёт о
          результатах поступит на указанный электронный адрес.
        </p>
        <div className="success__button-items">
          <Link to="/categories">
            <button className="button button_theme_apply">
              Новое обращение
            </button>
          </Link>
          <Link to="/">
            <button className="button button_theme_update">На главную</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
