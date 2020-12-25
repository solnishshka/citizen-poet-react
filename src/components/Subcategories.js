import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-2.png";
import Card from "./Card";
import config from "../utils/data";
import { useRouteMatch, useParams } from "react-router-dom";

export default function Subcategories(props) {
  const { url } = useRouteMatch();
  const { name } = useParams();

  let id = 0;
  switch (name) {
    case "yard":
      id = 1;
      break;
    case "road":
      id = 2;
      break;
    case "park":
      id = 3;
      break;
    default:
      id = 0;
  }

  return (
    <main className="content">
      <PageTemplate
        navLink={"/categories"}
        navLinkText={[
          "Вернуться на главную",
          "Категории",
          `${config.filter((item) => item.name === name)[0].title}`,
        ]}
        title={"2. Уточните проблему"}
        progressBar={qImage}
      />
      <section className="table table_theme_subcategories">
        {config[id].subcategories.map((card) => (
          <Card
            className={"card__description card__description_theme_subcategories"}
            cardLink={`${url}/${card.name}`}
            cardTitle={card.title}
            cardText={card.description}
            key={card.id}
          >
            <h2 className="card__title">{card.title}</h2>
          </Card>
        ))}
      </section>
    </main>
  );
}
