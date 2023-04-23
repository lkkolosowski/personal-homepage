import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import {
  SectionBody,
  Card,
  CardInner,
  CardBody,
  CardBodyInner,
  List,
  Name,
} from "./styled";

const Skillset = ({ title, icon, subtitle, skills }) => (
  <Section>
    <Header icon={icon} title={title} subtitle={subtitle} />
    <SectionBody>
      <List>
        {skills.map(({ name, Icon, color }) => (
          <Card key={name}>
            <CardInner style={{ backgroundColor: color }}>
              <Icon />
              <Name>{name}</Name>
              <CardBody style={{ backgroundColor: color }}>
                <CardBodyInner>
                  <Icon />
                  <Name>{name}</Name>
                </CardBodyInner>
              </CardBody>
            </CardInner>
          </Card>
        ))}
      </List>
    </SectionBody>
  </Section>
);

export default Skillset;
