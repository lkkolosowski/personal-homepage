import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../icons/message.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 17px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  margin: 32px 0;
  max-width: 417px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
    margin: 16px 0;
  }
`;

export const Icon = styled(DangerIcon)`
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-bottom: 12px;
  }
`;
