import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import { Backdrop, Break, Fieldset, Skills } from "./styled";
import { mapSkills } from "./utils";

const Skillset = ({ title, icon, subtitle, skills }) => {
  const [selected, setIsSelected] = useState(false);

  const handleChange = (event) => {
    setIsSelected(event.target.value);
  };

  const handleClick = () => {
    setIsSelected(false);
  };

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const transition = {
    type: "spring",
    duration: 0.75,
    bounce: 1,
    stiffness: 300,
    damping: 8,
  };

  return (
    <Section>
      <Header icon={icon} title={title} subtitle={subtitle} />
      <Backdrop visible={selected} onClick={handleClick} />
      <Fieldset>
        <Skills
          as={motion.ul}
          variants={container}
          whileInView="show"
          initial="hidden"
          animate={{ y: selected ? -8 : 0 }}
          transition={transition}
          viewport={{
            once: true,
          }}
        >
          {mapSkills(skills, selected, handleChange, handleClick).slice(0, 3)}
          <Break />
          {mapSkills(skills, selected, handleChange, handleClick).slice(3, 7)}
          <Break />
          {mapSkills(skills, selected, handleChange, handleClick).slice(7)}
          <Break />
          <Break />
        </Skills>
      </Fieldset>
    </Section>
  );
};

export default Skillset;
