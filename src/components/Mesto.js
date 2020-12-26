import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-4.png";
import { Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import config from "../utils/data";
import { useEffect, useState, useCallback } from "react";

export default function Mesto(props) {
  const authorized = localStorage.getItem('authorized') ? JSON.parse(localStorage.getItem('authorized')) : false;
  const { url } = useRouteMatch();
  const { name, title } = useParams();
  const [formValues, setFormValues] = useState({
    username: "",
    surname: "",
    email: "",
    area: "",
    street: "",
    building: "",
    corp: "",
    entrance: "",
    comments: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [isValid, setIsValid] = useState({
    streetIsValid: true,
    buildingIsValid: true,
  });

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
    },
    [setFormValues]
  );

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    localStorage.setItem("adress", JSON.stringify(formValues));
  }

  useEffect(() => {
    setIsValid({
      streetIsValid:
        formValues.street.length > 10 && formValues.street.length < 50,
      buildingIsValid: typeof formValues.building === "number",
    });
  }, [formValues]);

  const {
    username,
    surname,
    email,
    area,
    street,
    building,
    corp,
    entrance,
    comments,
  } = formValues;
  console.log(isSubmit);
  console.log(isValid);
  if (isSubmit && isValid) {
    return <Redirect from={url} to={`${url}/success`} />;
  } else {
    return (
      <main className="content">
        <PageTemplate
          navLinkText={[
            "Вернуться на главную",
            "Категории",
            config.filter((item) => item.name === name)[0].title,
            config
              .filter((item) => item.name === name)[0]
              .subcategories.filter((item) => item.name === title)[0].title,
            "Адрес",
          ]}
          title={"4. Укажите местонахождение проблемы"}
          progressBar={qImage}
        />
        <form className="form form_type_adress">
          {authorized ? (
            <></>
          ) : (
            <fieldset className="form__fieldset form__fieldset_userInfo">
              <div className="form__household-align">
                <label className="form__input-label">
                  Имя
                  <input
                    className="form__input form__input_type_name"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="form__input-label">
                  Фамилия
                  <input
                    className="form__input form__input_type_name"
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <label className="form__input-label">
                E-mail
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </label>
            </fieldset>
          )}
          <fieldset className="form__fieldset form__fieldset_address">
            <label htmlFor="area" className="form__input-label">
              Выберите район
            </label>
            <select
              id="area"
              className="form__input form__input_type_area"
              name="area"
              value={area}
              onChange={handleInputChange}
            >
              <option>Восточный</option>
              <option>Зеленоградский</option>
              <option>Западный</option>
              <option>Новомосковский</option>
              <option>Северный</option>
              <option>Северо-Восточный</option>
              <option>Северо-Западный</option>
              <option>Троицкий</option>
              <option>Центральный</option>
              <option>Юго-Восточный</option>
              <option>Юго-Западный</option>
              <option>Южный</option>
            </select>
            <label htmlFor="street" className="form__input-label">
              Адрес
            </label>
            <input
              type="text"
              placeholder="Начните вводить название"
              required
              id="street"
              className={`form__input form__input_type_street`}
              name="street"
              value={street}
              onChange={handleInputChange}
            ></input>
            <div className="form__household-align">
              <label htmlFor="building" className="form__input-label">
                Дом
                <input
                  id="building"
                  placeholder="12"
                  required
                  className="form__input form__input_type_building"
                  name="building"
                  value={building}
                  onChange={handleInputChange}
                ></input>
              </label>

              <label htmlFor="corp" className="form__input-label">
                Корпус
                <input
                  id="corp"
                  placeholder="2"
                  className="form__input form__input_type_corp"
                  name="corp"
                  value={corp}
                  onChange={handleInputChange}
                ></input>
              </label>

              <label htmlFor="entrance" className="form__input-label">
                Подъезд
                <input
                  id="entrance"
                  placeholder="3"
                  className="form__ input form__input_type_entrance"
                  name="entrance"
                  value={entrance}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <label htmlFor="comments" className="form__input-label">
              Комментарии
            </label>
            <textarea
              placeholder="Напиши что-нибудь"
              id="comments"
              className="form__ input form__input_type_comments"
              name="comments"
              value={comments}
              onChange={handleInputChange}
            ></textarea>
          </fieldset>
          <Link to={`${url}/success`}>
            <button
              className="button button_theme_send"
              type="submit"
              onClick={handleSubmit}
            >
              Отправить обращение
            </button>
          </Link>
        </form>
      </main>
    );
  }
}
