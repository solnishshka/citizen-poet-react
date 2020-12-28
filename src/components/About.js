import faceOne from "../images/face_1.png";
import faceTwo from "../images/face_2.png";

export default function About(props) {
  return (
    <main className="content">
      <section className="lead">
        <div className="lead__left-column">
          <h1 className="lead__title">О ПОРТАЛЕ</h1>
          <p className="lead__text">
            Портал “Активный Гражданин Поэт” – это проект, разработанный с целью
            улучшения качества жизни граждан и облика города через активное
            участие жителей в жизни столицы. На портал житель может сообщить о
            проблемах в содержании городских объектов (некачественной уборке,
            наличии ям, неисправности освещения и пр.) и проконтролировать
            качество устранения проблем городскими службами.
          </p>
          <p className="lead__text">
            На портале есть список категорий проблемных тем, которые
            рассматриваются в рамках нашего портала. Список включает в себя
            темы, связанные с некачественным содержанием домов, дворов, дорог и
            парков, а также с нарушениями, обнаруженными в содержании
            внутреннего хозяйства. Портал нацелен максимально в короткие сроки
            обработать все обращения и поспособствовать решению всех проблем.
          </p>
        </div>
        <div className="lead__information"></div>
      </section>
      <section className="faces">
        <div className="faces__item">
          <img className="faces__image" src={faceOne} alt="София" />
          <h2 className="faces__title">София Аль Робото</h2>
          <p className="faces__text">Председатель ЖКХ</p>
        </div>
        <div className="faces__item">
          <img className="faces__image" src={faceTwo} alt="Марселия" />
          <h2 className="faces__title">Марселия Яндексовна</h2>
          <p className="faces__text">Руководитель портала</p>
        </div>
      </section>
    </main>
  );
}
