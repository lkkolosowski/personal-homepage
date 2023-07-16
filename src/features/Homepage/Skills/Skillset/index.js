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
import { motion } from "framer-motion";

const Skillset = ({ title, icon, subtitle, skills }) => {
  const MotionSkill = motion(Skill);

  return (
    <Section>
      <Header icon={icon} title={title} subtitle={subtitle} />
      <SectionBody>
        <Skills>
          {skills.map(({ name, Icon, color, level, description }, i) => (
            <MotionSkill
              initial={{
                opacity: 0,
                y: 75,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                duration: 0.9,
                bounce: 0.45,
                delay: i * 0.1,
              }}
              viewport={{
                once: true,
              }}
              key={name}
            >
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

              {description && (
                <SkillBody variant={color}>{description}</SkillBody>
              )}
            </MotionSkill>
          ))}
        </Skills>
      </SectionBody>
    </Section>
  );
};

export default Skillset;
