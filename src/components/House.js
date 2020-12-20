import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-2.png";
import Card from "./Card";

export default function House(props) {
  return (
    <section className="categories">
      <PageTemplate
        navLink={"/categories"}
        navLinkText={"Категории"}
        title={"2. Уточните проблему"}
        progressBar={qImage}
      />
      <div className="table table_theme_house">
        <Card
          className={"card__description card__description_theme_problems"}
          cardLink={"/categories/house/electro"}
          cardTitle={"Электричество"}
          cardText_1={"Повреждение электроповодки"}
          cardText_2={"Некачественное содержание лифта"}
          cardText_3={"Неисправность элементов освещения"}
          cardText_4={"Нарушение пожаробесопасности"}
        ></Card>
        <Card
          className={"card__description card__description_theme_problems"}
          cardLink={"/categories/house/repair"}
          cardTitle={"Ремонт"}
          cardText_1={"Некачественный текущий ремонт"}
          cardText_2={
            "Неудовлетворяющее выполнение работ по капитальному ремонту"
          }
        ></Card>
        <Card
          className={"card__description card__description_theme_problems"}
          cardLink={"/categories/house/water"}
          cardTitle={"Тепло- и водоснабжение"}
          cardText_1={"Холодно в подъезде"}
          cardText_2={"Нарушение пожаробесопасности"}
        ></Card>
        <Card
          className={"card__description card__description_theme_problems"}
          cardLink={"/categories/house/manage"}
          cardTitle={"Управление домом"}
          cardText_1={"Нарушение при выборе управляющей организации"}
          cardText_2={"Нарушение при создании ТСЖ"}
        ></Card>
        <Card
          className={"card__description card__description_theme_problems"}
          cardLink={"/categories/house/tech"}
          cardTitle={"Техническое содержание"}
          cardText_1={"Повреждение крыши, лестниц, окон, козырьков подьезда"}
          cardText_2={"Протечка в подъезде"}
          cardText_3={"Сломанные почтовые ящики"}
          cardText_4={
            "Повреждение указателей с наименованием улицы и номером дома"
          }
        ></Card>
        <Card
          className={"card__description card__description_theme_problems"}
          cardLink={"/categories/house/cleaning"}
          cardTitle={"Уборка"}
          cardText_1={"Некачественное содержание мусоропровода"}
          cardText_2={"Несанкционнированые объявления"}
          cardText_3={
            "Неубранный подъезд, карниз над подъездом, неубранные сосульки"
          }
          cardText_4={"Складирование реагентов в общих помещениях"}
        ></Card>
      </div>
    </section>
  );
}
