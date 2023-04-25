import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import {
  SectionBody,
  Card,
  CardFront,
  CardFrontInner,
  CardBack,
  CardBackInner,
  Skills,
  Text,
  Skill,
  SkillBody,
} from "./styled";

const Skillset = ({ title, icon, subtitle, skills }) => (
  <Section>
    <Header icon={icon} title={title} subtitle={subtitle} />
    <SectionBody>
      <Skills>
        {skills.map(({ name, Icon, color, level, description }) => (
          <Skill key={name}>
            <Card>
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

            {description && <SkillBody>{description}</SkillBody>}
          </Skill>
        ))}
      </Skills>
    </SectionBody>
  </Section>
);

export default Skillset;
