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
          cardLink={"/categories/house/problems"}
          cardTitle={"Электричество"}
        ></Card>
        <Card
          cardLink={"/categories/house/problems"}
          cardTitle={"Ремонт"}
        ></Card>
        <Card
          cardLink={"/categories/house/problems"}
          cardTitle={"Тепло- и водоснабжение"}
        ></Card>
        <Card
          cardLink={"/categories/house/problems"}
          cardTitle={"Управление домом"}
        ></Card>
        <Card
          cardLink={"/categories/house/problems"}
          cardTitle={"Техническое содержание"}
        ></Card>
        <Card
          cardLink={"/categories/house/problems"}
          cardTitle={"Уборка"}
        ></Card>
      </div>
    </section>
  );
}
