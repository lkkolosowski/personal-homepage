import styled, { css } from "styled-components";

export const StyledReCaptcha = styled.div`
  overflow: hidden;
  position: relative;
  border: 2px solid ${({ theme }) => theme.tile.border};
  border-radius: 8px;
  transition: border-color ${({ theme }) => theme.animation};

  /* the sizes below allow to remove the original border and box shadow */

  ${({ size }) =>
    size === "normal" &&
    css`
      width: 302px; //original "normal" recaptcha width: 304px
      height: 76px; //original "normal" recaptcha height: 78px
    `}

  ${({ size }) =>
    size === "compact" &&
    css`
      width: 158px; //original "compact" recaptcha width: 164px
      height: 138px; //original "compact" recaptcha height: 144px
    `}

  & > div {
    position: relative;
    top: -2px;
    left: -2px;
  }

  ${({ error }) =>
    error &&
    css`
      border: 2px solid ${({ theme }) => theme.error};
    `}
`;
