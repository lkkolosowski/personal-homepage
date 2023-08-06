import Skill from "./Skill";

export const mapSkills = (skills, selected, handleChange, handleClick) =>
  skills.map(({ name, Icon, color, level, description }) => (
    <Skill
      key={name}
      selected={selected === name}
      handleChange={handleChange}
      handleClick={handleClick}
      name={name}
      Icon={Icon}
      color={color}
      level={level}
      description={description}
    />
  ));
