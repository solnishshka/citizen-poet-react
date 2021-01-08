import { Link } from "react-router-dom";
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export default function Card({ id, cardText, cardLink, isCardQuotes, isCardCategory, isActive, children, className, onClick }) {
  const card = {
    id: id,
    text: cardText,
  };

  function handleClickCard() {
    if (onClick) {
      onClick(isActive, card.id, card.text);
    }
  }

  return (
      <Link
        to={cardLink}
        className={cn('card', {'card_type_quotes': isCardQuotes}, {'card_active': isActive && isCardQuotes})}
        onClick={handleClickCard}
      >
        <div
          className={cn('card__title-item', {"card__title-item_theme_categories": isCardCategory})}
        >
          {children}
        </div>
        {card.text ? (
          card.text.map((text) => (
            <p
              className={cn(className, {'card__description_active': isActive})}
              key={uuidv4()}
            >
              {text}
            </p>
          ))
        ) : (
          <p />
        )}
      </Link>
  );
}
