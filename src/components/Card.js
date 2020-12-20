import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Card(props) {
  const [isActive, setActive] = useState(false);

  function handleClickCard() {
    if (isActive) {
      setActive(false);
    }
    else {
      setActive(true);
    }
  }

  return (
    <>
      <Link to={props.cardLink} className={isActive ? "card card_active" : "card"} onClick={handleClickCard}>
        <div className={props.titleItemClass ? props.titleItemClass : "card__title-item"}>
          <h2 className="card__title">{props.cardTitle}</h2>
          <img className="card__image" src={props.cardImage} alt="" />
        </div>
        <p className={isActive ? props.className + " card__description_active" : props.className}>{props.cardText_1}</p>
        <p className={isActive ? props.className + " card__description_active" : props.className}>{props.cardText_2}</p>
        <p className={isActive ? props.className + " card__description_active" : props.className}>{props.cardText_3}</p>
        <p className={isActive ? props.className + " card__description_active" : props.className}>{props.cardText_4}</p>
      </Link>
    </>
  );
}
