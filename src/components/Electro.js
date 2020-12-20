import Card from "./Card";
import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-3.png";
import React from 'react';

export default function Electro(props) {
  const [ qoutes, setQuotes ] = React.useState([]);

  React.useEffect(() => {
    fetch("http://buymebuyme.xyz?q=электричество")
  .then((result) => {
    if (result.ok) {
      return result.json();
    } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
  }).then((data) => {
    setQuotes(data);
  }).catch((err) => {
    console.log(err);
  });
  }, []);

  return (
    <section className="categories">
      <PageTemplate
        navLink={"/categories/house"}
        navLinkText={"Назад"}
        title={"3. Выберите описание проблемы"}
        progressBar={qImage}
      />
      <div className="table table_theme_problems">
      {qoutes.map((item, i) => (
          <Card key={i} className={"card__description card__description_theme_quotes"} cardText_1={item.fields.text.split("\n")[2]} cardText_2={item.fields.text.split("\n")[3]} cardText_3={item.fields.text.split("\n")[4]} cardText_4={item.fields.text.split("\n")[5]} />
        ))}
      </div>
    </section>
  );
}
