import styled, { css } from "styled-components";

export const StyledButtonLink = styled.a`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.semiTransparentIron};
  border-radius: 4px;
  transition: box-shadow 0.3s ease;

  ${({ hero }) =>
    hero &&
    css`
      display: flex;
    `};

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.color.anakiwa} 0px 0px 0px 2px;
  }

  &:active {
    box-shadow: ${({ theme }) => theme.color.parsley} 0px 2px 0px 0px inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
  }
`;
