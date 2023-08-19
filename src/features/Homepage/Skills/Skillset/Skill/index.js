import { motion } from "framer-motion";
import Card from "../../../Card";
import {
  Text,
  StyledSkill,
  Body,
  BodyWrapper,
  SkillWrapper,
  Radio,
  Label,
} from "./styled";

const Skill = ({
  selected,
  handleChange,
  handleClick,
  name,
  Icon,
  color,
  level,
  description,
}) => {
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <StyledSkill
      as={motion.li}
      variants={item}
      viewport={{
        once: true,
      }}
    >
      <SkillWrapper
        as={motion.div}
        initial={{ y: 0 }}
        animate={{ y: selected ? -8 : 0 }}
        transition={{
          type: "spring",
          duration: 0.75,
          bounce: 0.45,
          stiffness: 500,
          damping: 20,
        }}
      >
        <Radio
          id={name}
          value={name}
          name="cards"
          type="radio"
          checked={selected}
          onChange={handleChange}
        />
        <Label htmlFor={name}>
          <Card
            contentFront={
              <>
                <Icon />
                <Text>{name}</Text>
              </>
            }
            contentBack={
              <>
                <Icon />
                <Text>{level}</Text>
              </>
            }
            backgroundFront={color}
            backgroundBack={color}
            withPadding={true}
            brightening={true}
          />
        </Label>
      </SkillWrapper>
      {selected && (
        <BodyWrapper
          onClick={handleClick}
          as={motion.div}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: -8,
            opacity: 1,
          }}
        >
          <Body variant={color}>{description}</Body>
        </BodyWrapper>
      )}
    </StyledSkill>
  );
};

export default Skill;
