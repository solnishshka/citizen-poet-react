import Card from "./Card";
import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-3.png";
import React from "react";
import { Link } from "react-router-dom";
import config from "../utils/data";
import { useRouteMatch, useParams } from "react-router-dom";

export default function Quotes(props) {
  const [qoutes, setQuotes] = React.useState([]);
  const { url } = useRouteMatch();
  const { name, title } = useParams();
  const query = config
    .filter((item) => item.name === name)[0]
    .subcategories.filter((item) => item.name === title)[0].query;
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [activeCard, setActiveCard] = React.useState({
    id: 100,
    quote: ''
  });

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
    });
    result.forEach((item, k) => {
      let text = "";
      const index = item
        .map((str, i) => {
          if (str.includes(query)) {
            return i;
          }
        })
        .filter((item) => item !== undefined)[0];
      for (let m = index; m < index + 4; m++) {
        if (item[m]) {
          text = text + item[m] + "\n";
        }
      }
      texts[k] = text.split("\n");
    });
    return texts;
  }

  function handleClickCard(isActive, id, text) {
    if (isActive) {
      setActiveCard({id : 100, quote : ''});
      setIsDisabled(true);
    } else {
      setActiveCard({id : id, quote : text});
      setIsDisabled(false);
    }
  }

  function handleSubmit() {
    localStorage.setItem('quote', JSON.stringify(activeCard.quote));
  }

  return (
    <main className="content">
      <PageTemplate
        navLink={`/categories/${name}`}
        navLinkText={[
          "Вернуться на главную",
          "Категории",
          config.filter((item) => item.name === name)[0].title,
          config
            .filter((item) => item.name === name)[0]
            .subcategories.filter((item) => item.name === title)[0].title,
        ]}
        title={"3. Выберите описание проблемы"}
        progressBar={qImage}
      />
        <section className="table table_theme_quotes">
          {setResult(0, 7).map((item, i) => (
            <Card
              cardLink="#"
              key={i}
              id={i}
              className={"card__description card__description_theme_quotes"}
              cardClassName={"card_type_quotes"}
              cardText={item}
              onClick={handleClickCard}
              isActive={i === activeCard.id ? true : false}
            />
          ))}
        </section>
      <div className="button-items">
        <Link to={`${url}/mesto`}>
          <button
            onClick={handleSubmit}
            type="button"
            className="button button_theme_apply"
            disabled={isDisabled ? true : false}
          >
            Подтвердить
          </button>
        </Link>
        <button className="button button_theme_update">
          Обновить варианты
        </button>
      </div>
    </main>
  );
}
