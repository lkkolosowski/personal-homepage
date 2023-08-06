import styled from "styled-components";

export const Text = styled.span`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.semiBold};
  font-size: 14px;
  line-height: 1;
`;

export const SkillWrapper = styled.div`
  position: relative;
  /* z-index: 200; */
`;

export const StyledSkill = styled.li`
  position: relative;
  width: calc((100% / 4) - (((4 - 1) / 4) * 16px));

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: calc((100% / 2) - (((2 - 1) / 2) * 16px));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;

export const Radio = styled.input`
  position: absolute;
  visibility: hidden;
`;

export const BodyWrapper = styled.div`
  z-index: 111;
  position: relative;
`;

export const Body = styled.div`
  z-index: 160;
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

export const Label = styled.label`
  position: relative;
  /* z-index: 110; */
`;
