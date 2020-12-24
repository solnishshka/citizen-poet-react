import qImage from "../images/progress-bar-1.png";
import Card from "../components/Card";
import PageTemplate from "./PageTemplate";
import config from "../utils/data";

export default function Categories(props) {
  const crumbs = ["Вернуться на главную", "Категории"]

  return (
    <section className="categories">
      <PageTemplate
        navLink={"/"}
        navLinkText={crumbs}
        title={"1. Выберите категорию проблемы"}
        progressBar={qImage}
      />
      <div className="table">
        {config.map((item) => (
          <Card
            titleItemClass={
              "card__title-item card__title-item_theme_categories"
            }
            className={"card__description"}
            cardLink={`/categories/${item.name}`}
            cardTitle={item.title}
            cardImage={item.image}
            cardText={item.description}
            card = {item}
            key = {item.id}
          />
        ))}
      </div>
    </section>
  );
}
