import {
  StyledHeader,
  ProfilePicture,
  Title,
  Subtitle,
  ExtraHeaderContent,
  Button,
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
      <ExtraHeaderContent>
        Looking for the perfect frontend development? You are in the right
        place. Get the professional results you're looking for. Your work
        will be done on time and according to your requirements. Just reach
        out and let me know your needs.
      </ExtraHeaderContent>
      <Button>
        <Icon />
        Hire Me
      </Button>
    </div>
  </StyledHeader>
);

export default Header;
