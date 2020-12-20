import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-4.png";
import { Link } from "react-router-dom";

export default function Mesto(props) {
  return (
    <section className="categories">
      <PageTemplate
        navLink={"/categories/house/electro"}
        navLinkText={"Вернуться к описанию"}
        title={"4. Укажите местонахождение проблемы"}
        progressBar={qImage}
      />
      <div className="button-items">
        <Link to="/success">
          <button className="button button_theme_apply">
            Отправить обращение
          </button>
        </Link>
      </div>
    </section>
  );
}
