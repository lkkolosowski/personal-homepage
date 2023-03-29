import picture from "../../images/profile-picture.jpg";
import {
  StyledHero,
  Title,
  Subtitle,
  ExtraHeaderContent,
  Header,
  Aside,
  Button,
  Icon,
  ProfilePicture,
} from "./styled";

const Hero = () => (
  <StyledHero>
    <Aside>
      <ProfilePicture src={picture} />
    </Aside>
    <Header>
      <Subtitle>This is</Subtitle>
      <Title>Łukasz Kołosowski</Title>
      <ExtraHeaderContent>
        I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </ExtraHeaderContent>
      <Button>
        <Icon width="24" height="24" />
        Hire Me
      </Button>
    </Header>
  </StyledHero>
);

export default Hero;
