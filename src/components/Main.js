import warningIcon from "../images/polygon.svg";
import { Link } from "react-router-dom";

export default function Main(props) {
  return (
    <main className="content">
      <section className="lead">
        <div className="lead__left-column">
          <h1 className="lead__title">Расскажите о проблеме, а мы её решим!</h1>
          <p className="lead__text">
            Портал «АКТИВНЫЙ ГРАЖДАНИН ПОЭТ» разработан с целью улучшения
            качества жизни горожан через активное участие жителей в жизни
            города. Здесь любой человек может сообщить о проблемах в своем
            районе - доме, дворе, дороге или близлежащем парке, узнать о
            проблемах, с которыми сталкиваются другие жители, а также
            проконтролировать их решение.
          </p>
          <Link to="/categories" className="lead__button-link">
            <button type="button" className="button button_theme_lead">
              {"Выбрать категорию >>>"}
            </button>
          </Link>
        </div>
        <div className="lead__right-column">
          <div className="lead__title-item">
            <img src={warningIcon} alt="" className="lead__warning-icon" />
            <h2 className="lead__title-warning">Закон о цензуре</h2>
          </div>
          <p className="lead__text-warning">
            Для защиты общественной нравственности к рассмотрению принимаются
            только обращения, написанные цитатами поэтов-классиков.
          </p>
        </div>
      </section>
      <section className="info">
        <div className="info__item">
          <div className="info__title-item">
            <div className="info__rectangle"></div>
            <h2 className="info__title">ЗАРЕГИСТРИРОВАНО ПОЛЬЗОВАТЕЛЕЙ</h2>
          </div>
          <p className="info__text">364,245</p>
        </div>
        <div className="info__item">
          <div className="info__title-item">
            <div className="info__rectangle"></div>
            <h2 className="info__title">ВСЕГО ПОЛУЧЕНО ПРОБЛЕМ</h2>
          </div>
          <p className="info__text">364,245</p>
        </div>
        <div className="info__item">
          <div className="info__title-item">
            <div className="info__rectangle"></div>
            <h2 className="info__title">ВСЕГО РЕШЕНО ПРОБЛЕМ</h2>
          </div>
          <p className="info__text">364,245</p>
        </div>
      </section>
    </main>
  );
}
