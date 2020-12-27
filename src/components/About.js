import leadImage from "../images/lead_img.png";
import infoImage from "../images/info-image.png";

export default function About(props) {
  return (
    <main className="content">
      <section className="lead">
        <div className="lead__left-column">
          <h1 className="lead__title">О ПОРТАЛЕ</h1>
          <p className="lead__text">
            Портал «АКТИВНЫЙ ГРАЖДАНИН ПОЭТ» разработан с целью улучшения
            качества жизни горожан через активное участие жителей в жизни
            города. Здесь любой человек может сообщить о проблемах в своем
            районе - доме, дворе, дороге или близлежащем парке, узнать о
            проблемах, с которыми сталкиваются другие жители, а также
            проконтролировать их решение.
          </p>
          <p className="lead__text">
            В связи с законом о цензуре на сайте можно оставлять жалобы только в
            форме цитат поэтов-классиков. Для удобства пользователей есть
            удобная категоризация проблем, а также готовые примеры цитат,
            которые можно использовать для своих обращений. Обращаем внимание,
            что все открытые жалобы, прошедшие модерацию, публикуются на сайте
            на странице с результатами. 
          </p>
          <p className="lead__text">
            Вместе сделаем наш город лучше!
          </p>
        </div>
        <div className="lead__right-column lead__right-column_theme_about">
          <img className="lead__image" src={leadImage} alt="" />
          <h2 className="lead__title-warning lead__title-warning_theme_about">
            Робот Роботович Роботов
          </h2>
          <p className="lead__subtitle lead__subtitle_theme_about">
            Председатель ЖКХ
          </p>
          <p className="lead__text-warning lead__text-warning_theme_about">
            Он такой классный и обеспечивает работу этого крутого сервиса, вот
            он какой молодец, вот это всё он, его заслуга, какой он
            замечательный.
          </p>
        </div>
      </section>
      <section className="info info_theme_about">
        <div className="info__item">
          <h2 className="info__title info__title_theme_about">ТОП ПРОБЛЕМ</h2>
          <img className="info__image" src={infoImage} alt="" />
        </div>
        <div className="info__item">
          <h2 className="info__title info__title_theme_about">ТОП ПРОБЛЕМ</h2>
          <img className="info__image" src={infoImage} alt="" />
        </div>
      </section>
    </main>
  );
}
