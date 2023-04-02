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
        I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </ExtraHeaderContent>
      <Button>
        <Icon />
        Hire Me
      </Button>
    </div>
  </StyledHeader>
);

export default Header;
