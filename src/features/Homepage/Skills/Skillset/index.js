import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import Card from "../../Card";
import { Skills, Text, Skill, SkillBody } from "./styled";
import { motion } from "framer-motion";

const Skillset = ({ title, icon, subtitle, skills }) => {
  const MotionSkill = motion(Skill);

  return (
    <Section>
      <Header icon={icon} title={title} subtitle={subtitle} />
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
            <Card
              cardFrontContent={
                <>
                  <Icon />
                  <Text>{name}</Text>
                </>
              }
              cardBackContent={
                <>
                  {!level && <Icon />}
                  <Text>{level ? level : name}</Text>
                </>
              }
              cardFrontBackground={color}
              cardBackBackground={color}
              withPadding={true}
              brightening={true}
            />

            {description && (
              <SkillBody variant={color}>{description}</SkillBody>
            )}
          </MotionSkill>
        ))}
      </Skills>
    </Section>
  );
};

export default Skillset;
