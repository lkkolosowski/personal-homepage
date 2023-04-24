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
  Text,
} from "./styled";

const Skillset = ({ title, icon, subtitle, skills }) => (
  <Section>
    <Header icon={icon} title={title} subtitle={subtitle} />
    <SectionBody>
      <List>
        {skills.map(({ name, Icon, color, level }) => (
          <Card key={name}>
            <CardFront style={{ backgroundColor: color }}>
              <CardFrontInner>
                <Icon />
                <Text>{name}</Text>
              </CardFrontInner>
              <CardBack style={{ backgroundColor: color }}>
                <CardBackInner>
                  {level ? (
                    <Text>{level}</Text>
                  ) : (
                    <>
                      <Icon />
                      <Text>{name}</Text>
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
