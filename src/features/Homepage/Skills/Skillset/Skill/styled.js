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

export const SkillBody = styled.div`
  position: relative;
  height: calc(100% - 66px);
  padding: 25px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.tile.background};
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

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 24px;
    height: calc(100% - 64px);
  }
`;
