import { Wrapper, Paragraph, StyledLoader } from "./styled";

const Loader = () => (
  <Wrapper>
    <Paragraph>Please wait, projects are being loaded...</Paragraph>
    <StyledLoader />
  </Wrapper>
);

export default Loader;
