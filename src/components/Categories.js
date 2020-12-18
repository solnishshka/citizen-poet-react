import { Link } from "react-router-dom";
import qImage from "../images/progress-bar-1.png";
import house from "../images/house.png";
import yard from "../images/yard.png";
import road from "../images/road.png";
import park from "../images/park.png";

export default function Categories(props) {
  return (
    <section className="qategories">
      <Link className="qategories__link" to="/">Вернуться на главную</Link>
      <h1 className="qategories__title">1. Выберите категорию проблемы</h1>
      <img className="qategories__progress-bar" src={qImage} alt="" />
      <div className="table">
        <Link to="#" className="card">
          <div className="card__title-item">
            <h2 className="card__title">Дом</h2>
            <img className="card__image" src={house} alt="" />
          </div>
          <p className="card__description">
            Управление, уборка, ремонт, электричество, тепло- и водоснабжение{" "}
          </p>
        </Link>
        <div className="card">
          <div className="card__title-item">
            <h2 className="card__title">Двор</h2>
            <img className="card__image" src={yard} alt="" />
          </div>
          <p className="card__description">
            Благоустройство, зеленые насаждения, проезды, тротуары, парковка,
            уборка
          </p>
        </div>
        <div className="card">
          <div className="card__title-item">
            <h2 className="card__title">Дорога</h2>
            <img className="card__image" src={road} alt="" />
          </div>
          <p className="card__description">
            Инфраструктура, дорожное покрытие, пешеходные переходы
          </p>
        </div>
        <div className="card">
          <div className="card__title-item">
            <h2 className="card__title">Парк</h2>
            <img className="card__image" src={park} alt="" />
          </div>
          <p className="card__description">
            Досуг, освещение, торговля и реклама, уборка, инфраструктура
          </p>
        </div>
      </div>
    </section>
  );
}
