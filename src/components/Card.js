import { Link } from "react-router-dom";
import { useState } from "react";

export default function Card(props) {
  const card = {
    id : props.id,
    text : props.cardText
  };

  function handleClickCard() {
    if (props.onClick) {
      props.onClick(props.isActive, card.id, card.text);
    }
  }

  return (
    <>
      <Link
        to={props.cardLink}
        className={
          props.cardClassName
            ? props.isActive
              ? "card card_active " + props.cardClassName
              : "card " + props.cardClassName
            : "card"
        }
        onClick={handleClickCard}
      >
        <div
          className={
            props.titleItemClass ? props.titleItemClass : "card__title-item"
          }
        >
          {props.children}
        </div>
          {card.text ? (
            card.text.map((text, i) => (
              <p
                className={
                  props.isActive
                    ? `${props.className} + card__description_active`
                    : props.className
                }
                key={i}
              >
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
