import styled from "styled-components";

export const Text = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
`;

export const StyledSkill = styled.li`
  width: calc((100% / 4) - (((4 - 1) / 4) * 16px));

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: calc((100% / 2) - (((2 - 1) / 2) * 16px));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.backdrop.background};
  opacity: 0.67;
`;

export const SkillWrapper = styled.div`
  z-index: 111;
  position: relative;
`;

export const SkillBody = styled.div`
  position: absolute;
  padding: 25px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.tile.backgroundAlternative};
  color: ${({ theme }) => theme.textAlternative};
  transition: border-color ${({ theme }) => theme.themeAnimation},
    background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};
  border: 6px solid ${({ theme }) => theme.tile.border};
  font-size: 14px;
  line-height: 1.5;

  &:hover {
    border-color: ${({ theme }) => theme.tile.hover};
    transition: border-color ${({ theme }) => theme.animation},
      background-color ${({ theme }) => theme.themeAnimation},
      color ${({ theme }) => theme.themeAnimation};
  }
`;
