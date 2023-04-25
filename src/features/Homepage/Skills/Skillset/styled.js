import styled, { css } from "styled-components";

export const SectionBody = styled.div``;

export const Text = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
`;

export const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    gap: 16px;
  }
`;

export const Skill = styled.li`
  width: calc((100% / 4) - (((4-1) / 4) * 16px));

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: calc((100% / 2) - (((2-1) / 2) * 16px));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;

export const SkillContent = styled.div`
  margin-top: -25px;
  padding-top: 25px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.tile.background};
  color: ${({ theme }) => theme.textAlternative};
  transition: border-color ${({ theme }) => theme.themeAnimation},
    background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};
  border: 3px solid ${({ theme }) => theme.tile.border};
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: -24px;
    padding-top: 24px;
    font-size: 14px;
  }
`;

export const SkillContentInner = styled.div`
  height: calc(13.5em + 50px);
  padding: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    height: calc(10.5em + 50px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: auto;
    padding: 24px;
  }
`;

export const Card = styled.div`
  perspective: 800px;
  cursor: default;

  &:hover > div {
    transform: rotateX(180deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;

export const CardFront = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition-property: transform;
  transition-duration: 0.5s;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
`;

export const CardFrontInner = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.skills.front};
  box-shadow: ${({ theme }) => theme.tile.border} 0 0 0 1px;
  display: flex;
  border-radius: 4px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: background-color ${({ theme }) => theme.themeAnimation},
    box-shadow ${({ theme }) => theme.themeAnimation};
  padding: 9px 12px;
`;

export const CardBack = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  transform: rotateX(180deg);
`;

export const CardBackInner = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.skills.back};
  border: 1px solid ${({ theme }) => theme.tile.border};
  display: flex;
  border-radius: 4px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: background-color ${({ theme }) => theme.themeAnimation};
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 0 8px;
  }
`;

export const styledIcon = (Icon) => styled(Icon)`
  width: 28px;
  height: 28px;
  margin: 2px 0;

  ${({ enlarged }) =>
    enlarged &&
    css`
      margin: 22px 0;
    `};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 26px;
    height: 26px;

    ${({ enlarged }) =>
      enlarged &&
      css`
        margin: 2px 0;
      `};
  }
`;

export const styledRating = (Rating) => styled(Rating)`
  height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 18px;
  }
`;
