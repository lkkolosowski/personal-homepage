import ButtonLink from "../ButtonLink";
import {
  StyledHeader,
  ProfilePicture,
  Title,
  Subtitle,
  HeaderParagraph,
  Icon,
} from "./styled";

const Header = () => (
  <StyledHeader>
    <ProfilePicture />
    <div>
      <Subtitle>
        <span>Hello, my name is</span>
      </Subtitle>
      <Title>Łukasz Kołosowski</Title>
      <HeaderParagraph>
        Looking for the perfect frontend development? You are in the right
        place. Get the professional results you're looking for. Your work
        will be done on time and according to your requirements. Just
        contact me and tell me about your needs.
      </HeaderParagraph>
      <ButtonLink hero>
        <Icon />
        Contact me
      </ButtonLink>
    </div>
  </StyledHeader>
);

export default Header;
