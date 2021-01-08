import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-2.png";
import Card from "./Card";
import config from "../utils/data";
import { useRouteMatch, useParams } from "react-router-dom";

export default function Subcategories(props) {
  const { url } = useRouteMatch();
  const { name } = useParams();

  const defineId = name => {
    switch (name) {
      case "yard": return 1;
      case "road": return 2;
      case "park": return 3;
      default: return 0;
    }
  }
  const id = defineId(name)

  return (
    <main className="content">
      <PageTemplate
        navLink={"/categories"}
        navLinkText={[
          "Вернуться на главную",
          "Категории",
          `${config.find((item) => item.name === name).title}`,
        ]}
        title={"2. Уточните проблему"}
        progressBar={qImage}
      />
      <section className="table table_theme_subcategories">
        {config[id].subcategories.map((card) => (
          <Card
            className=
              "card__description card__description_theme_subcategories"
            cardLink={`${url}/${card.name}`}
            cardTitle={card.title}
            cardText={card.description}
            key={card.id}
            isCardQuotes={false}
            isCardCategory={false}
          >
            <h2 className="card__title">{card.title}</h2>
          </Card>
        ))}
      </section>
    </main>
  );
}
