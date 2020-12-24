import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-2.png";
import Card from "./Card";
import config from "../utils/data";

export default function Road(props) {
  const id = 2;
  
  return (
    <section className="categories">
      <PageTemplate
        navLink={"/categories"}
        navLinkText={"Категории"}
        title={"2. Уточните проблему"}
        progressBar={qImage}
      />
      <div className="table table_theme_house">
        {config[id].subcategories.map((card) => (
          <Card
            className={"card__description card__description_theme_problems"}
            cardLink={`/categories/road/${card.name}`}
            cardTitle={card.title}
            cardText={card.description}
            key={card.id}
          />
        ))}
      </div>
    </section>
  );
}
