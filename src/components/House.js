import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-2.png";
import Card from "./Card";

export default function House(props) {
  return (
    <section className="categories">
      <PageTemplate
        navLink={"/categories"}
        navLinkText={"Категории"}
        title={"2. Уточните проблему"}
        progressBar={qImage}
      />
      <div className="table table_theme_house">
        <Card
          cardLink={"/categories/house/electro"}
          cardTitle={"Электричество"}
        ></Card>
        <Card
          cardLink={"/categories/house/electro"}
          cardTitle={"Ремонт"}
        ></Card>
        <Card
          cardLink={"/categories/house/electro"}
          cardTitle={"Тепло- и водоснабжение"}
        ></Card>
        <Card
          cardLink={"/categories/house/electro"}
          cardTitle={"Управление домом"}
        ></Card>
        <Card
          cardLink={"/categories/house/electro"}
          cardTitle={"Техническое содержание"}
        ></Card>
        <Card
          cardLink={"/categories/house/electro"}
          cardTitle={"Уборка"}
        ></Card>
      </div>
    </section>
  );
}
