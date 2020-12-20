import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-4.png";
import { Link } from 'react-router-dom';

export default function Mesto(props) {
    return (
        <section className="categories">
            <PageTemplate
                navLink={"/categories/house/electro"}
                navLinkText={"Вернуться к описанию"}
                title={"4. Укажите местонахождение проблемы"}
                progressBar={qImage}
            />

            <form className="form form_type_adress">
                <fieldset className="form__fielset form__fieldset_address">
                    <label htmlFor="area" className="form__input-label">Выберите район</label>
                    <select id="area" className="form__input_type_area">
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
                    <label htmlFor="street" className="form__input-label">Адрес</label>
                    <input type="text" placeholder="Начните вводить название" required id="street" className="form__input_type_street"></input>
                    <div className="form__household-align">
                        <label htmlFor="building" className="form__input-label">Дом
                            <input id="building" placeholder="12" required className="form__input_type_building"></input>
                        </label>
                        
                        <label htmlFor="corp" className="form__input-label">Корпус
                            <input id="corp" placeholder="2" className="form__input_type_corp"></input>
                        </label>
                        
                        <label htmlFor="entrance" className="form__input-label">Подъезд
                            <input id="entrance" placeholder="3" className="form__input_type_entrance"></input>
                        </label>
                    </div>
                    <label htmlFor="comments" className="form__input-label">Комментарии</label>
                    <textarea placeholder="Напиши что-нибудь" id="comments" className="form__input_type_comments"></textarea>
                </fieldset>
                <Link to="/success"><button className="button button_theme_apply">Отправить обращение</button></Link>
            </form>
        </section>
    );
}