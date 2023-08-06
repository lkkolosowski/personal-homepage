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
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  z-index: 160;
  position: absolute;
  padding: 25px;
  margin-top: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.tile.backgroundAlternative};
  color: ${({ theme }) => theme.textAlternative};
  transition: border-color ${({ theme }) => theme.themeAnimation},
    background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};
  border: 6px solid ${({ theme }) => theme.tile.border};
  font-size: 14px;
  line-height: 1.5;
  max-width: 288px;

  &:hover {
    border-color: ${({ theme }) => theme.tile.hover};
    transition: border-color ${({ theme }) => theme.animation},
      background-color ${({ theme }) => theme.themeAnimation},
      color ${({ theme }) => theme.themeAnimation};
  }

  &:before,
  &:after {
    content: "";
    width: 0;
    height: 0;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    position: absolute;
    transition: border-color ${({ theme }) => theme.themeAnimation},
      background-color ${({ theme }) => theme.themeAnimation};
  }

  &:before {
    border-top: solid 14px transparent;
    border-left: solid 14px transparent;
    border-right: solid 14px transparent;
    border-bottom: solid 14px ${({ theme }) => theme.tile.borderAlternative};
  }

  &:after {
    border-top: solid 6px transparent;
    border-left: solid 6px transparent;
    border-right: solid 6px transparent;
    border-bottom: solid 6px ${({ theme }) => theme.tile.backgroundAlternative};
  }

  &:hover:before {
    border-bottom: solid 14px ${({ theme }) => theme.tile.hoverAlternative};
    transition: border-color ${({ theme }) => theme.animation},
      background-color ${({ theme }) => theme.themeAnimation};
  }
`;

export const Label = styled.label`
  position: relative;
  /* z-index: 110; */
`;
