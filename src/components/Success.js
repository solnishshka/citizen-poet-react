import PageTemplate from "./PageTemplate";
import qImage from "../images/progress-bar-4.png";
import { Link } from 'react-router-dom';

export default function Success(props) {
    return (
        <section className="categories">
            <PageTemplate
                navLink={"/categories/house/electro"}
                navLinkText={"Вернуться к описанию"}
                title={"5. Ваше сообщение успешно отправлено"}
                progressBar={qImage}
            />
            <div className="success"><h1 className="success__title">Спасибо!</h1>
                <p className="success__description">Ваше обращение успешно отправлено и принято в обработку.
Отчёт о результатах поступит на указанный электронный адрес.</p>
                <div className="success__button-items">
                    <Link to="/categories">
                        <button className="button button_theme_apply">Новое обращение</button>
                    </Link>
                    <Link to="/">
                        <button className="button button_theme_update">На главную</button>
                    </Link>
                </div></div>
        </section>
    );
}