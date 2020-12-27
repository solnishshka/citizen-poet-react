import warningIcon from "../images/polygon.svg";
import main from "../images/main.png";

export default function Main(props) {
  return (
    <main className="content">
      <section className="lead lead_theme_main">
        <div className="lead__main-item">
          <div className="lead__left-column">
            <h1 className="lead__title">
              Расскажите о проблеме, а мы её решим!
            </h1>
            <p className="lead__text lead__text_theme_main">
              Влияй на развитие своего района или целого города, оставляя
              обращения на портале “Активный Гражданин Поэт”
            </p>
          </div>
          <div className="lead__right-column">
            <div className="lead__title-item">
              <img src={warningIcon} alt="" className="lead__warning-icon" />
              <h2 className="lead__title-warning">Цензура 2025</h2>
            </div>
            <p className="lead__text-warning">
              Для защиты общественной нравственности к рассмотрению принимаются
              только обращения, написанные цитатами поэтов-классиков
            </p>
          </div>
        </div>
        <img
          className="lead__main-image"
          src={main}
          alt="Главное изображение"
        />
      </section>
    </main>
  );
}
