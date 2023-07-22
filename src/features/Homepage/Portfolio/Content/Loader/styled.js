import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLoader = styled.div`
  margin: 0 auto;
  border: 12px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  border-right: 12px solid ${({ theme }) => theme.primary};
  width: 160px;
  max-width: 75%;
  aspect-ratio: 1 / 1;
  animation: spin 1.5s linear infinite;
  transition: border-color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    border-width: 8px;
    width: 80px;
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
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 14px;
  }
`;
