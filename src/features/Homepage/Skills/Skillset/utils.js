import Skill from "./Skill";

export const mapSkills = (skills, selected, handleChange) =>
  skills.map(({ name, Icon, color, level, description }) => (
    <Skill
      key={name}
      selected={selected === name}
      handleChange={handleChange}
      name={name}
      Icon={Icon}
      color={color}
      level={level}
      description={description}
    />
  ));
