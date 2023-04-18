import { Indicator, StyledSubtitle } from "./styled";

const Subtitle = ({ content }) => (
  <StyledSubtitle>
    {content}
    <Indicator />
  </StyledSubtitle>
);

export default Subtitle;
