import {
  StyledCard,
  CardFront,
  CardFrontInner,
  CardBack,
  CardBackInner,
} from "./styled";

const Card = ({
  withPadding,
  contentFront,
  contentBack,
  backgroundFront,
  backgroundBack,
  brightening,
  highlighted,
}) => {
  return (
    <StyledCard highlighted={highlighted}>
      <CardFront background={backgroundFront}>
        <CardFrontInner brightening={brightening} withPadding={withPadding}>
          {contentFront}
        </CardFrontInner>
        <CardBack background={backgroundBack}>
          <CardBackInner brightening={brightening} withPadding={withPadding}>
            {contentBack}
          </CardBackInner>
        </CardBack>
      </CardFront>
    </StyledCard>
  );
};

export default Card;
