import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLoader = styled.div`
  border: 12px solid ${({ theme }) => theme.color.semiTransparentIron};
  border-radius: 50%;
  border-right: 12px solid ${({ theme }) => theme.color.scienceBlue};
  width: 160px;
  max-width: 75%;
  aspect-ratio: 1 / 1;
  animation: spin 1.5s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    border-width: 8px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Paragraph = styled.p`
  margin-top: 64px;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: 0;
    margin-bottom: 24px;
  }
`;
