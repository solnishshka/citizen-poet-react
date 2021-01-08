import Card from "./Card";
import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-3.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../utils/data";
import { useRouteMatch, useParams } from "react-router-dom";
import Api from '../utils/api';
import cn from 'classnames';

export default function Quotes(props) {
  let id = localStorage.getItem("quote-id")
    ? JSON.parse(localStorage.getItem("quote-id")) + 1
    : 0;
  const [qoutes, setQuotes] = useState([]);
  const { url } = useRouteMatch();
  const { name, title } = useParams();
  const query = config
    .filter((item) => item.name === name)[0]
    .subcategories.filter((item) => item.name === title)[0].query;
  const [isDisabled, setIsDisabled] = useState(true);
  const cat = config.filter((item) => item.name === name)[0].title;
  const subCat = config
    .filter((item) => item.name === name)[0]
    .subcategories.filter((item) => item.name === title)[0].title;
  const [activeCard, setActiveCard] = useState({
    id: 100,
    quote: "",
    cat: cat,
    subCat: subCat,
  });

  const api = new Api(`https://buymebuyme.xyz?q=%20${query}%20`);

  useEffect(() => {
    api.getQuotes()
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
          } else {
            return -1;
          }
        })
        .filter((item) => item !== -1)[0];
      for (let m = index; m < index + 4; m++) {
        if (item[m]) {
          text =
            text + item[m].charAt(0).toUpperCase() + item[m].slice(1) + "\n";
        }
      }
      texts[k] = text.split("\n");
    });
    return texts;
  }

  function handleClickCard(isActive, id, text) {
    if (isActive) {
      setActiveCard({ id: 100, quote: "", cat: "", subCat: "" });
      setIsDisabled(true);
    } else {
      setActiveCard({ id: id, quote: text, cat: cat, subCat: subCat });
      setIsDisabled(false);
    }
  }

  function handleSubmit() {
    localStorage.setItem("quote-id", id);
    localStorage.setItem(`quote-${id}`, JSON.stringify(activeCard));
  }

  return (
    <main className="content">
      <PageTemplate
        navLink={`/categories/${name}`}
        navLinkText={["Вернуться на главную", "Категории", cat, subCat]}
        title={"3. Выберите описание проблемы"}
        progressBar={qImage}
      />
      <section className="table table_theme_quotes">
        {setResult(0, 7).map((item, i) => (
          <Card
            cardLink="#"
            key={i}
            id={i}
            className="card__description card__description_theme_quotes"
            isCardQuotes={true}
            cardText={item}
            onClick={handleClickCard}
            isActive={i === activeCard.id ? true : false}
            isCardCategory={false}
          />
        ))}
      </section>
      <div className="button-items">
        <Link to={`${url}/mesto/${id}`}>
          <button
            onClick={handleSubmit}
            type="button"
            className={cn('button', 'button_theme_apply', {'button_theme_disabled': isDisabled})}
            disabled={isDisabled}
          >
            Подтвердить
          </button>
        </Link>
        <button className="button button_theme_disabled" disabled>
          Обновить варианты
        </button>
      </div>
    </main>
  );
}
