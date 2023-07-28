import styled, { css } from "styled-components";
import { ReactComponent as BrighnessIcon } from "../../icons/brightness.svg";

export const Positioned = styled.div`
  position: absolute;
  top: 120px;
  right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    top: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ThemeSwitchWrapper = styled.div`
  background-color: ${({ theme }) => theme.switch.background};
  border-radius: 14px;
  padding: 2px;
  height: 100%;
  width: 100%;
  display: flex;
  transition: background-color ${({ theme }) => theme.themeAnimation};
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 12px;
  line-height: 26px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textAlternative};
  transition: ${({ theme }) => theme.themeAnimation};
  opacity: ${({ theme }) => theme.switch.textModeOff};

  ${({ overlayed }) =>
    overlayed &&
    css`
      position: absolute;
      opacity: ${({ theme }) => theme.switch.textModeOn};
    `};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: none;
  }
`;

export const StyledThemeSwitch = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.switch.border};
  padding: 0;
  border-radius: 13px;
  width: 46px;
  height: 26px;
  transition: ${({ theme }) => theme.themeAnimation};
`;

export const Switcher = styled.div`
  background-color: ${({ theme }) => theme.switch.switcher};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ theme }) => theme.switch.translate};
  transition: ${({ theme }) => theme.switchAnimation};
`;

export const Icon = styled(BrighnessIcon)`
  & path {
    fill: ${({ theme }) => theme.switch.icon};
    transition: ${({ theme }) => theme.themeAnimation};
  }
`;
