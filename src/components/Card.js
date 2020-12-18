import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <Link to={props.cardLink} className="card">
        <div className="card__title-item">
          <h2 className="card__title">{props.cardTitle}</h2>
          <img className="card__image" src={props.cardImage} alt="" />
        </div>
        <p className="card__description">{props.cardText}</p>
      </Link>
    </>
  );
}
