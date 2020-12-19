import Card from "../components/Card";
import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-3.png";

export default function Problems(props) {
  return (
    <section className="categories">
      <PageTemplate
        navLink={"/categories/house"}
        navLinkText={"Назад"}
        title={"3. Выберите описание проблемы"}
        progressBar={qImage}
      />
    </section>
  );
}
