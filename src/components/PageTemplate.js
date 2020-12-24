import { useRouteMatch } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs';

export default function PageTemplate(props) {
  const { url } = useRouteMatch();
  return (
    <div className="page-container">
      <Breadcrumbs url={url} title={props.navLinkText}/>
      <h1 className="page-container__title">{props.title}</h1>
      <img
        className="page-container__progress-bar"
        src={props.progressBar}
        alt=""
      />
    </div>
  );
}
