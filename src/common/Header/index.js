import {
  StyledHeader,
  ProfilePicture,
  Title,
  Subtitle,
  ExtraHeaderContent,
  HeaderContent,
  Button,
  Icon,
} from "./styled";

const Header = () => (
  <StyledHeader>
    <ProfilePicture />
    <HeaderContent>
      <Subtitle>
        <span>This is</span>
      </Subtitle>
      <Title>Łukasz Kołosowski</Title>
      <ExtraHeaderContent>
        I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </ExtraHeaderContent>
      <Button>
        <Icon />
        Hire Me
      </Button>
    </HeaderContent>
  </StyledHeader>
);

export default Header;
