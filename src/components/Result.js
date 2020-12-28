import PageTemplate from "./PageTemplate";
import Card from "./Card";
import img_1 from "../images/img_1.png";
import img_2 from "../images/img_2.png";
import img_3 from "../images/img_3.png";

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
      <PageTemplate title={"Результаты"} />
      <section className="info">
        <div className="info__item">
          <div className="info__title-item">
            <img className="info__rectangle" src={img_1} alt="Иконка"/>
            <h2 className="info__title">ЗАРЕГИСТРИРОВАНО ПОЛЬЗОВАТЕЛЕЙ</h2>
          </div>
          <p className="info__text">523,245</p>
        </div>
        <div className="info__item">
          <div className="info__title-item">
            <img className="info__rectangle" src={img_2} alt="Иконка"/>
            <h2 className="info__title">ВСЕГО СОЗДАНО ОБРАЩЕНИЙ</h2>
          </div>
          <p className="info__text">1,018,933</p>
        </div>
        <div className="info__item">
          <div className="info__title-item">
            <img className="info__rectangle" src={img_3} alt="Иконка"/>
            <h2 className="info__title">ВСЕГО РЕШЕНО ПРОБЛЕМ</h2>
          </div>
          <p className="info__text">764,245</p>
        </div>
      </section>
      <section className="description">
        <div className="description__left">
          <p className="description__text">
            Наш сервис получает и обрабатывает обращения граждан уже более 5
            лет. Несмотря на внесение правок в законодательство и введении
            особого режима цензуры, наш портал идёт в ногу со временем и
            предоставляет возможность создавать обращения и делать этот мир
            лучше.
          </p>
          <p className="description__text">
            Мы стараемся сохранить прежние механизмы по домоуправлению, остаясь
            при этом в рамках закона. Все обращения, созданные на нашем портале
            будут опубликованы строго конфиденциально.
          </p>
        </div>
        <div className="description__right">
          <p className="description__text">
            Изо дня в день мы стараемся сделать наш свервис лучше, чтобы
            граждане могли непосредственно влиять на среду, в которой они
            проживают. Мы всегда прислушиваемся к Вашим замечаниям и учитываем
            все пожелания.
          </p>
          <p className="description__text">
            <span className="description__span">Помогите нам стать лучше!</span>{" "}
            Подпишитесь на нашу рассылку, чтобы участвовать в регулярных
            голосованиях и влиять на развитие сервиса:
          </p>
          <button className="button">Подписаться</button>
        </div>
      </section>

      {count >= 0 ? (
        <section className="table table_theme_result">
          {result
            .filter((card) => card.name !== "" && card.adress !== "")
            .map((card, i) => (
              <div className="result" key={i}>
                <h2 className="result__title">{card.name}</h2>
                <p className="result__text">{card.adress}</p>
                <p className="result__text">
                  Категория: {card.category}/{card.subCategory}
                </p>
                <Card
                  cardLink="#"
                  className={"card__description card__description_theme_quotes"}
                  cardClassName={"card_type_result"}
                  cardText={card.quote}
                />
              </div>
            ))}
        </section>
      ) : (
        <></>
      )}
    </main>
  );
}
