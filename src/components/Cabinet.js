import icon from "../images/form-icon.png";

export default function Cabinet(props) {
  return (
    <form className="form form_type_register" name="register-form">
      <h2 className="form__title">Добро пожаловать!</h2>
      <p className="form__description">Укажите свои настоящие имя и фамилию</p>
      <div className="form__input-items">
        <label className="form__input-label form__input-label_type_register" htmlFor="userName">
          Имя
          <input
            className="form__input form__input_type_name"
            type="text"
            name="userName"
            placeholder="Иван"
            id="userName"
          />
        </label>
        <label className="form__input-label form__input-label_type_register" htmlFor="userSurname">
          Фамилия
          <input
            className="form__input form__input_type_name"
            type="text"
            name="userSurname"
            placeholder="Иванов"
            id="userSurname"
          />
        </label>
      </div>
      <label
        className="form__input-label form__input-label_type_email form__input-label_type_register"
        htmlFor="userEmail"
      >
        Контактный e-mail
        <p className="form__item">
          <input
            className="form__input"
            type="email"
            name="email"
            placeholder="email@yandex.ru"
            id="userEmail"
          />
        </p>
      </label>
      <button className="button button_theme_register" type="submit">
        Зарегистрироваться
      </button>
      <p className="form__text">или войдите с помощью</p>
      <img className="form__image" src={icon} alt="" />
    </form>
  );
}
