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
          cardTitle={"Дом"}
          cardImage={house}
          cardText={
            "Управление, уборка, ремонт, электричество, тепло- и водоснабжение"
          }
        />
        <Card
          cardTitle={"Двор"}
          cardImage={yard}
          cardText={
            "Благоустройство, зеленые насаждения, проезды, тротуары, парковка, уборка"
          }
        />
        <Card
          cardTitle={"Дорога"}
          cardImage={road}
          cardText={"Инфраструктура, дорожное покрытие, пешеходные переходы"}
        />
        <Card
          cardTitle={"Парк"}
          cardImage={park}
          cardText={
            "Досуг, освещение, торговля и реклама, уборка, инфраструктура"
          }
        />
      </div>
    </section>
  );
}
