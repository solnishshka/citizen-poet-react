import { Link } from "react-router-dom";
import { useState } from "react";

export default function Card(props) {
  const [isActive, setActive] = useState(false);
  const cardText = props.cardText;

  function handleClickCard() {
    if (isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  return (
    <>
      <Link
        to={props.cardLink}
        className={isActive ? "card card_active" : "card"}
        onClick={handleClickCard}
      >
        <div
          className={
            props.titleItemClass ? props.titleItemClass : "card__title-item"
          }
        >
          <h2 className="card__title">{props.cardTitle}</h2>
          <img className="card__image" src={props.cardImage} alt="" />
        </div>
        {cardText ? (
          cardText.map((text, i) => (
            <p className={props.className} key={i}>
              {text}
            </p>
          ))
        ) : (
          <p></p>
        )}
      </Link>
    </>
  );
}
