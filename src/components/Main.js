import warningIcon from '../images/polygon.svg';

export default function Main(props) {
    return (
        <main className="content">
        <section className="lead">
          <div className="lead__left-column">
            <h1 className="lead__title">Расскажите о проблеме, а мы её решим!</h1>
            <p className="lead__text">
              Не следует, однако забывать, что сложившаяся структура организации
              в значительной степени обуславливает создание существенных
              финансовых и административных условий. Равным образом начало
              повседневной работы по формированию позиции влечет за собой
              процесс внедрения и модернизации новых предложений. Разнообразный
              и богатый опыт реализация намеченных плановых заданий способствует
              подготовки и реализации соответствующий условий активизации.
            </p>
            <button type="button" className="lead__button">
              <a href="#" className="lead__button-link">{'Выбрать категорию >>>'}</a>
            </button>
          </div>
          <div className="lead__right-column">
            <div className="lead__title-item">
              <img
                src={warningIcon}
                alt=""
                className="lead__warning-icon"
              />
              <h2 className="lead__title-warning">Закон о цензуре</h2>
            </div>
            <p className="lead__text-warning">
              Бла-бла-бла, только в стихотворной форме можно оставлять свои
              жалобы бла-бла-бла, только в стихотворной форме можно оставлять
              свои жалобы
            </p>
          </div>
        </section>
        <section className="info">
          <div className="info__item">
            <div className="info__title-item">
              <div className="info__rectangle"></div>
              <h2 className="info__title">ЗАРЕГИСТРИРОВАНО ПОЛЬЗОВАТЕЛЕЙ</h2>
            </div>
            <p className="info__text">364,245</p>
          </div>
          <div className="info__item">
            <div className="info__title-item">
              <div className="info__rectangle"></div>
              <h2 className="info__title">ВСЕГО РЕШЕНО ПРОБЛЕМ</h2>
            </div>
            <p className="info__text">364,245</p>
          </div>
          <div className="info__item">
            <div className="info__title-item">
              <div className="info__rectangle"></div>
              <h2 className="info__title">ВСЕГО РЕШЕНО ПРОБЛЕМ</h2>
            </div>
            <p className="info__text">364,245</p>
          </div>
        </section>
      </main>
    );
}