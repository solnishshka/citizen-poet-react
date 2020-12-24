import Card from "./Card";
import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-3.png";
import React from "react";
import { Link } from "react-router-dom";
import config from "../utils/data";
import { useRouteMatch, useParams  } from "react-router-dom";

export default function Problems(props) {
  const [qoutes, setQuotes] = React.useState([]);
  const [texts, setTexts] = React.useState([]);
  const { name, title } = useParams();
  const query = config.filter(item => item.name === name)[0].subcategories.filter(item => item.name === title)[0].query;

  React.useEffect(() => {
    fetch(`https://buymebuyme.xyz?q=%20${query}%20`)
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

  function setResult(i, j) {
    let texts = [];
    const res = qoutes.filter((item, index) => index > i && index < j);
    const result = res.map((item) => {
      return item.fields.text.split("\n");
    })
    result.forEach((item, k) => {
      let text = '';
      const index = item.map((str, i) => {
        if (str.includes(query))
          {
            return i;
          }
      }).filter(item => item !== undefined)[0];
      for (let m = index; m < (index + 4); m++) {
        if (item[m]){text = text + item[m] + "\n";}
      }
      texts[k] = text.split("\n");
    });
    return texts;
  }

  return (
    <section className="categories">
      <PageTemplate
        navLink={`/categories/${name}`}
        navLinkText={["Вернуться на главную", "Категории", config.filter(item => item.name === name)[0].title, config.filter(item => item.name === name)[0].subcategories.filter(item => item.name === title)[0].title]}
        title={"3. Выберите описание проблемы"}
        progressBar={qImage}
      />
      <div className="table table_theme_problems">
        {setResult(0, 7).map((item, i) => (
          <Card
            cardLink="#"
            key={i}
            className={"card__description card__description_theme_quotes"}
            cardText={item}
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