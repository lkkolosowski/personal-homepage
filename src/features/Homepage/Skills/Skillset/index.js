import { motion } from "framer-motion";
import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import Skill from "./Skill";
import { Break, Skills } from "./styled";

const Skillset = ({ title, icon, subtitle, skills }) => {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Section>
      <Header icon={icon} title={title} subtitle={subtitle} />
      <Skills
        as={motion.ul}
        variants={container}
        whileInView="show"
        initial="hidden"
        viewport={{
          once: true,
        }}
      >
        {skills
          .map(({ name, Icon, color, level, description }) => (
            <Skill
              key={name}
              name={name}
              Icon={Icon}
              color={color}
              level={level}
              description={description}
            />
          ))
          .slice(0, 3)}
        <Break />
        {skills
          .map(({ name, Icon, color, level, description }) => (
            <Skill
              key={name}
              name={name}
              Icon={Icon}
              color={color}
              level={level}
              description={description}
            />
          ))
          .slice(3, 7)}
        <Break />
        {skills
          .map(({ name, Icon, color, level, description }) => (
            <Skill
              key={name}
              name={name}
              Icon={Icon}
              color={color}
              level={level}
              description={description}
            />
          ))
          .slice(7)}
        <Break />
        <Break />
      </Skills>
    </Section>
  );
};

export default Skillset;
