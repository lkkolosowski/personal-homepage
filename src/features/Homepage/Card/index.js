import {
  StyledCard,
  CardFront,
  CardFrontInner,
  CardBack,
  CardBackInner,
} from "./styled";

const Card = ({
  withPadding,
  cardFrontContent,
  cardBackContent,
  cardFrontBackground,
  cardBackBackground,
  brightening,
}) => {
  return (
    <StyledCard>
      <CardFront background={cardFrontBackground}>
        <CardFrontInner brightening={brightening} withPadding={withPadding}>
          {cardFrontContent}
        </CardFrontInner>
        <CardBack background={cardBackBackground}>
          <CardBackInner brightening={brightening} withPadding={withPadding}>
            {cardBackContent}
          </CardBackInner>
        </CardBack>
      </CardFront>
    </StyledCard>
  );
};

export default Card;
