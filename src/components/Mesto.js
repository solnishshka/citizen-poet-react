import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-4.png";
import { useRouteMatch, useParams, Redirect } from "react-router-dom";
import config from "../utils/data";
import areas from '../utils/areas';
import { useEffect, useState, useCallback } from "react";
import cn from 'classnames';

export default function Mesto(props) {
  const authorized = localStorage.getItem("authorized")
    ? JSON.parse(localStorage.getItem("authorized"))
    : false;
  const { url } = useRouteMatch();
  const { name, title, id } = useParams();
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
  const [isValid, setIsValid] = useState(true);
  const inputIsValid = {
    isValidName: true,
    isValidEmail: true,
    isValidStreet: true,
    isValidBuilding: true,
    isValidCorp: true,
  };

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
    formValues.username = localStorage.getItem("userName") || formValues.username;
    localStorage.setItem(`adress-${id}`, JSON.stringify(formValues));
  }

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

  useEffect(() => {
    inputIsValid.isValidStreet =
      formValues.street.length > 10 && formValues.street.length < 150;
    inputIsValid.isValidCorp = formValues.corp > 0 && formValues.corp < 1000;
    inputIsValid.isValidBuilding =
      formValues.building > 0 && formValues.building < 100;
    if (!authorized) {
      inputIsValid.isValidName =
        formValues.username.length > 9 && formValues.username.length < 25;
      inputIsValid.isValidEmail = formValues.email.length > 5;
    }

    setIsValid(
      inputIsValid.isValidStreet &&
        inputIsValid.isValidCorp &&
        inputIsValid.isValidBuilding &&
        inputIsValid.isValidName &&
        inputIsValid.isValidEmail
    );
  }, [formValues, authorized]);

  if (isSubmit) {
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
            <fieldset className="form__fieldset">
              <div className="form__household-align">
                <label className="form__input-label">
                  Имя*
                  <input
                    className={cn('form__input', 'form__input_type_name', {'form__input_type_error': !inputIsValid.isValidName})}
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
                E-mail*
                <input
                  className={cn("form__input", {'form__input_type_error': !inputIsValid.isValidEmail})}
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
            >{areas.map((area, i) => <option key={i} value={area}>{area}</option>)}
            </select>
            <label htmlFor="street" className="form__input-label">
              Адрес*
            </label>
            <input
              type="text"
              placeholder="Начните вводить название"
              required
              id="street"
              className={cn('form__input', 'form__input_type_street', {'form__input_type_error': !inputIsValid.isValidStreet})}
              name="street"
              value={street}
              onChange={handleInputChange}
            ></input>
            <div className="form__household-align">
              <label htmlFor="building" className="form__input-label">
                Дом*
                <input
                  type="number"
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
                Корпус*
                <input
                  type="number"
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
                  type="number"
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
          <button
            className={cn('button', 'button_theme_send', {'button_theme_disabled': !isValid})}
            type="submit"
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Отправить обращение
          </button>
        </form>
      </main>
    );
  }
}
