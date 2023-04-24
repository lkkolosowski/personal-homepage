import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import {
  SectionBody,
  Card,
  CardFront,
  CardFrontInner,
  CardBack,
  CardBackInner,
  List,
  Name,
} from "./styled";

const Skillset = ({ title, icon, subtitle, skills }) => (
  <Section>
    <Header icon={icon} title={title} subtitle={subtitle} />
    <SectionBody>
      <List>
        {skills.map(({ name, Icon, color, Rating }) => (
          <Card key={name}>
            <CardFront style={{ backgroundColor: color }}>
              <CardFrontInner>
                <Icon />
                <Name>{name}</Name>
              </CardFrontInner>
              <CardBack style={{ backgroundColor: color }}>
                <CardBackInner>
                  {Rating ? (
                    <Rating />
                  ) : (
                    <>
                      <Icon />
                      <Name>{name}</Name>
                    </>
                  )}
                </CardBackInner>
              </CardBack>
            </CardFront>
          </Card>
        ))}
      </List>
    </SectionBody>
  </Section>
);

export default Skillset;
