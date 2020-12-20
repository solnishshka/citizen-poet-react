import qImage from "../images/progress-bar-1.png";
import house from "../images/house.png";
import yard from "../images/yard.png";
import road from "../images/road.png";
import park from "../images/park.png";
import Card from "../components/Card";
import PageTemplate from "./PageTemplate";

export default function Categories(props) {
  return (
    <section className="categories">
      <PageTemplate
        navLink={"/"}
        navLinkText={"Вернуться на главную"}
        title={"1. Выберите категорию проблемы"}
        progressBar={qImage}
      />
      <div className="table">
        <Card
          titleItemClass={"card__title-item card__title-item_theme_categories"}
          className={"card__description"}
          cardLink={"/categories/house"}
          cardTitle={"Дом"}
          cardImage={house}
          cardText_1={
            "Управление, уборка, ремонт, электричество, тепло- и водоснабжение"
          }
        />
        <Card
          titleItemClass={"card__title-item card__title-item_theme_categories"}
          className={"card__description"}
          cardLink={"/categories/yard"}
          cardTitle={"Двор"}
          cardImage={yard}
          cardText_1={
            "Благоустройство, зеленые насаждения, проезды, тротуары, парковка, уборка"
          }
        />
        <Card
          titleItemClass={"card__title-item card__title-item_theme_categories"}
          className={"card__description"}
          cardLink={"/categories/road"}
          cardTitle={"Дорога"}
          cardImage={road}
          cardText_1={"Инфраструктура, дорожное покрытие, пешеходные переходы"}
        />
        <Card
          titleItemClass={"card__title-item card__title-item_theme_categories"}
          className={"card__description"}
          cardLink={"/categories/park"}
          cardTitle={"Парк"}
          cardImage={park}
          cardText_1={
            "Досуг, освещение, торговля и реклама, уборка, инфраструктура"
          }
        />
      </div>
    </section>
  );
}
