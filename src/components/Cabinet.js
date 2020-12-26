import icon from "../images/form-icon.png";
import { useState, useEffect } from "react";

export default function Cabinet(props) {
  const [authorized, setAuthorized] = useState(
    localStorage.getItem("authorized") ? true : false
  );

  const [name, setName] = useState(
    localStorage.getItem("userName") ? localStorage.getItem("userName") : ""
  );
  const [surname, setSurname] = useState(
    localStorage.getItem("userSurname")
      ? localStorage.getItem("userSurname")
      : ""
  );
  const [email, setEmail] = useState(
    localStorage.getItem("userEmail") ? localStorage.getItem("userEmail") : ""
  );
  const [isValid, setIsValid] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeSurname(e) {
    setSurname(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);

  }

  function handleSubmit(e) {
    e.preventDefault();
    setAuthorized(true);
    localStorage.setItem("authorized", true);
    localStorage.setItem("userName", name);
    localStorage.setItem("userSurname", surname);
    localStorage.setItem("userEmail", email);
  }

  function handleSubmitSaveForm(e) {
    e.preventDefault();
    localStorage.setItem("userName", name);
    localStorage.setItem("userSurname", surname);
    localStorage.setItem("userEmail", email);
  }

  function handleClickExitButton() {
    setAuthorized(false);
    setEmail('');
    setName('');
    setSurname('');
    localStorage.removeItem("authorized");
    localStorage.removeItem("userName");
    localStorage.removeItem("userSurname");
    localStorage.removeItem("userEmail");
    localStorage.removeItem('user');
  }

  useEffect(() => {
    const isValidName = name.length > 2 && name.length < 25;
    const isValidSurname = surname.length > 2 && surname.length < 25;
    const isValidEmail = email.length > 4;
    setIsValid(isValidName && isValidSurname && isValidEmail);
  }, [name, surname, email]);

  if (authorized) {
    return (
      <form
        className="form form_type_authorized"
        onSubmit={handleSubmitSaveForm}
      >
        <h2 className="form__title form__title_type_auth">Личный кабинет</h2>
        <label
          className="form__input-label form__input-label_type_auth"
          htmlFor="name"
        >
          Имя
          <input
            type="text"
            className="form__input form__input_type_auth"
            name="name"
            id="name"
            value={name}
            onChange={handleChangeName}
            minLength="2"
            maxLength="25"
          />
        </label>
        <label
          className="form__input-label form__input-label_type_auth"
          htmlFor="surname"
        >
          Фамилия
          <input
            type="text"
            className="form__input form__input_type_auth"
            name="surname"
            id="surname"
            value={surname}
            onChange={handleChangeSurname}
            minLength="2"
            maxLength="25"
          />
        </label>
        <label
          className="form__input-label form__input-label_type_auth"
          htmlFor="email"
        >
          Почта
          <input
            type="email"
            className="form__input form__input_type_auth"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <div className="form__button-items">
          <button className={isValid ? "button button_theme_save" : "button button_theme_save button_theme_disabled"} type="submit" disabled={isValid ? false : true} >
            Сохранить
          </button>
          <button className="button button_theme_exit" type="button" onClick={handleClickExitButton}>
            Выход
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <form
        className="form form_type_register"
        name="register-form"
        onSubmit={handleSubmit}
      >
        <h2 className="form__title">Добро пожаловать!</h2>
        <p className="form__description">
          Укажите свои настоящие имя и фамилию
        </p>
        <div className="form__input-items">
          <label
            className="form__input-label form__input-label_type_register"
            htmlFor="userName"
          >
            Имя
            <input
              className="form__input form__input_type_name"
              type="text"
              name="userName"
              placeholder="Иван"
              id="userName"
              value={name ? name : ""}
              onChange={handleChangeName}
            />
          </label>
          <label
            className="form__input-label form__input-label_type_register"
            htmlFor="userSurname"
          >
            Фамилия
            <input
              className="form__input form__input_type_name"
              type="text"
              name="userSurname"
              placeholder="Иванов"
              id="userSurname"
              value={surname ? surname : ""}
              onChange={handleChangeSurname}
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
              name="userEmail"
              placeholder="email@yandex.ru"
              id="userEmail"
              onChange={handleChangeEmail}
              value={email ? email : ""}
            />
          </p>
        </label>
        <button className={isValid ? "button button_theme_register" : "button button_theme_register button_theme_disabled"} type="submit" disabled={isValid ? false : true}>
          Зарегистрироваться
        </button>
        <p className="form__text">или войдите с помощью</p>
        <img className="form__image" src={icon} alt="" />
      </form>
    );
  }
}
