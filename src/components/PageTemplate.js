import { useRouteMatch } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

export default function PageTemplate(props) {
  const { url } = useRouteMatch();
  return (
    <section className="intro">
      <Breadcrumbs url={url} title={props.navLinkText} />
      <h1 className="intro__title">{props.title}</h1>
      {props.progressBar && <img
        className="intro__progress-bar"
        src={props.progressBar}
        alt="Индикатор прогресса заполнения заявки"
      />}
    </section>
  );
}
