import PageTemplate from "./PageTemplate";
import Card from "./Card";
import qImage from "../images/progress-bar-5.png";

export default function Result(props) {
  const count = localStorage.getItem("quote-id")
    ? localStorage.getItem("quote-id")
    : -1;
  const result = [];

  for (let i = 0; i <= count; i++) {
    const adress = localStorage.getItem(`adress-${i}`)
      ? JSON.parse(localStorage.getItem(`adress-${i}`))
      : "";
    const adr =
      adress !== ""
        ? `${adress.area} район, ${adress.street}, дом ${adress.building}, корпус ${adress.corp}`
        : "";
    const userName = adress.username
      ? adress.username
      : localStorage.getItem("userName")
      ? localStorage.getItem("userName")
      : "";
    const data = JSON.parse(localStorage.getItem(`quote-${i}`));
    result[i] = {
      quote: data.quote,
      category: data.cat,
      subCategory: data.subCat,
      adress: adr,
      name: userName,
    };
  }

  return (
    <main className="content">
      <PageTemplate title={"Обращения граждан"} progressBar={qImage} />
      <section className="table table_theme_result">
        {count >= 0 ? (
          result.map((card, i) => (
            <div className="result" key={i}>
              <h2 className="result__title">Гражданин: {card.name}</h2>
              <p className="result__text">Адрес: {card.adress}</p>
              <p className="result__text">Категория: {card.category}/{card.subCategory}</p>
              <Card
                cardLink="#"
                className={"card__description card__description_theme_quotes"}
                cardClassName={"card_type_result"}
                cardText={card.quote}
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </section>
    </main>
  );
}
