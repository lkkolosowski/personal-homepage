import { motion } from "framer-motion";
import Card from "../../../Card";
import { Text, StyledSkill, SkillBody } from "./styled";

const Skill = ({ name, Icon, color, level, description, skillIndex }) => {
  return (
    <StyledSkill>
      <motion.div
        initial={{
          opacity: 0,
          y: 75,
          height: "100%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: 0.9,
          bounce: 0.45,
          delay: skillIndex * 0.1,
        }}
        viewport={{
          once: true,
        }}
        key={name}
      >
        <Card
          contentFront={
            <>
              <Icon />
              <Text>{name}</Text>
            </>
          }
          contentBack={
            <>
              {!level && <Icon />}
              <Text>{level ? level : name}</Text>
            </>
          }
          backgroundFront={color}
          backgroundBack={color}
          withPadding={true}
          brightening={true}
        />

        {description && <SkillBody variant={color}>{description}</SkillBody>}
      </motion.div>
    </StyledSkill>
  );
};

export default Skill;
