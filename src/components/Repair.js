import Card from "./Card";
import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-3.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Electro(props) {
  const [qoutes, setQuotes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://buymebuyme.xyz?q=ремонт")
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
      })
      .then((data) => {
        setQuotes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="categories">
      <PageTemplate
        navLink={"/categories/house"}
        navLinkText={"Назад к списку проблем"}
        title={"3. Выберите описание проблемы"}
        progressBar={qImage}
      />
      <div className="table table_theme_problems">
        {qoutes.map((item, i) => (
          <Card
            cardLink="#"
            key={i}
            className={"card__description card__description_theme_quotes"}
            cardText={[]}
          />
        ))}
      </div>
      <div className="button-items">
        <Link to="/mesto">
          <button className="button button_theme_apply">Подтвердить</button>
        </Link>
        <button className="button button_theme_update">
          Обновить варианты
        </button>
      </div>
    </section>
  );
}
