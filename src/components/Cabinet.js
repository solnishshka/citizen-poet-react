import icon from '../images/form-icon.png';

export default function Cabinet(props) {
    return (
        <form className="form" name="register-form">
            <h2 className="form__title">Добро пожаловать!</h2>
            <p className="form__description">Укажите свои настоящие имя и фамилию</p>
            <div className="form__input-items">
                <p><label className="form__input-label">Имя</label><p><input className="form__input form__input_theme_name" name="userName" placeholder="Иван"/></p></p>
                <p><label className="form__input-label">Фамилия</label><p> <input className="form__input form__input_theme_name" name="userSurname" placeholder="Иванов"/></p></p>
            </div>           
            <p><label className="form__input-label">Контактный e-mail</label></p><p><input className="form__input" name="email" placeholder="email@yandex.ru"/></p>
            <button className="form__button" type="submit">Зарегистрироваться</button>
            <p></p>
            <p></p>
            <img className="form__image" src={icon} alt=""/>
        </form>
    );
}