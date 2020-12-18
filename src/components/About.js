import leadImage from '../images/lead_img.png';

export default function About(props) {
    return (
      <main className="content">
        <section className="lead">
          <div className="lead__left-column">
            <h1 className="lead__title">О ПОРТАЛЕ</h1>
            <p className="lead__text">
              Не следует, однако забывать, что сложившаяся структура организации
              в значительной степени обуславливает создание существенных
              финансовых и административных условий. Равным образом начало
              повседневной работы по формированию позиции влечет.
            </p>
            <p className="lead__text">
              Дальнейшее развитие различных форм деятельности позволяет оценить
              значение модели развития. Задача организации, в особенности же
              новая модель организационной деятельности позволяет выполнять
              важные задания по разработке системы обучения кадров,
              соответствует насущным потребностям. Товарищи! консультация с
              широким активом позволяет выполнять важные задания по разработке
              систем массового участия. Равным образом новая модель
              организационной деятельности способствует подготовки и реализации
              новых предложений.
            </p>
          </div>
          <div className="lead__right-column lead__right-column_theme_about">
            <img className="lead__image" src={leadImage} alt=""/>
            <h2 className="lead__title-warning lead__title-warning_theme_about">Робот Роботович Роботов</h2>
            <p className="lead__subtitle lead__subtitle_theme_about">Председатель ЖКХ</p>
            <p className="lead__text-warning lead__text-warning_theme_about">
              Он такой классный и обеспечивает работу этого крутого сервиса, вот
              он какой молодец, вот это всё он, его заслуга, какой он
              замечательный.
            </p>
          </div>
        </section>
      </main>
    );
}