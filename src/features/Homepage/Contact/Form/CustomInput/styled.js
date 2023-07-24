import styled, { css } from "styled-components";

export const StyledFormItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  align-items: center;
  grid-template-areas:
    "label input"
    "message message";
  margin-bottom: 16px;
  height: calc(1.15em + 18px);

  ${({ withTextArea }) =>
    withTextArea &&
    css`
      height: calc(5.75em + 18px);
    `}
`;

export const Label = styled.label`
  border-radius: 8px 0 0 8px;
  background-color: ${({ theme }) => theme.tile.background};
  width: calc(1.15em + 14px);
  height: 100%;
  transition: background-color ${({ theme }) => theme.themeAnimation};
  grid-area: label;
`;

export const LabelContent = styled.div`
  position: relative;
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 8px 0 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.tile.border};
  width: 100%;
  height: 100%;
  transition: background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};
  padding-left: 3px;
  overflow: hidden;

  ${({ required }) =>
    required &&
    css`
      &:after {
        color: ${({ theme }) => theme.white};
        content: "*";
        padding: 11px 3px 7px 1px;
        position: absolute;
        top: -14px;
        right: -4px;
        background-color: ${({ theme }) => theme.button.background};
        transform: rotate(-45deg);
        opacity: 0.8;
        transition: background-color ${({ theme }) => theme.themeAnimation};

        @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
          right: -3px;
        }
      }
    `}
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 0 8px 8px 0;
  padding: 6px 12px;
  border: 2px solid ${({ theme }) => theme.tile.border};
  outline: 0;
  background-color: ${({ theme }) => theme.tile.background};
  transition: border-color ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};
  grid-area: input;

  &:hover {
    transition: border-color ${({ theme }) => theme.animation},
      background-color ${({ theme }) => theme.themeAnimation},
      color ${({ theme }) => theme.animation};
  }

  &:focus {
    border-color: ${({ theme }) => theme.tile.hover};
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.tile.error}cc;
    `}

  ${({ as }) =>
    as === "textarea" &&
    css`
      resize: none;
      min-height: calc(5.75em + 18px);
    `}
`;

export const ErrorMessage = styled.p`
  margin: 3px 0 0;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.tile.error};
  grid-area: message;
`;
