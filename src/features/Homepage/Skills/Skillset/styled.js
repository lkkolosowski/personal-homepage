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

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    gap: 16px;
  }
`;

export const Skill = styled.li`
  width: calc((100% / 4) - (((4 - 1) / 4) * 16px));

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: calc((100% / 2) - (((2 - 1) / 2) * 16px));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;

export const SkillBody = styled.div`
  position: relative;
  height: calc(100% - 66px);
  padding: 25px;
  margin-top: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.tile.background};
  color: ${({ theme }) => theme.textAlternative};
  transition: border-color ${({ theme }) => theme.themeAnimation},
    background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};
  border: 6px solid ${({ theme }) => theme.tile.border};
  box-shadow: ${({ theme }) => theme.shadow.thick};
  font-size: 14px;
  line-height: 1.5;

  &:hover {
    border-color: ${({ theme }) => theme.tile.hover};
  }

  &:before {
    display: block;
    content: "";
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translate(-6px, -3px);
    opacity: 0.5;
    height: 0;
    border-radius: 50%;
    width: 0;
    margin: 0 auto;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid transparent;

    ${({ variant }) =>
      variant &&
      css`
        border-top: 6px solid ${({ variant }) => variant};
      `};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 24px;
    height: calc(100% - 64px);
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
    pointer-events: none;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 26px;
    height: 26px;
  }
`;

export const styledRating = (Rating) => styled(Rating)`
  height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 18px;
  }
`;
