import styled from "styled-components";
import picture from "../../images/profile-picture.jpg";
import { ReactComponent as MessageIcon } from "../../icons/message.svg";

export const StyledHeader = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 0 72px;
  color: ${({ theme }) => theme.textAlternative};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-bottom: 8px;
  }
`;

export const HeaderParagraph = styled.p`
  margin: 35px 0 32px;
  font-size: 20px;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 17px;
    max-width: 530px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 16px 0 24px;
    max-width: 530px;
  }
`;

export const ProfilePicture = styled.aside`
  width: 40vw;
  min-width: 128px;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-image: url(${picture});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: ${({ theme }) => theme.shadow.thick};
`;

export const Icon = styled(MessageIcon)`
  position: relative;
  top: 1px;
`;
