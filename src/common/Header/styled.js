import styled from "styled-components";
import picture from "../../images/profile-picture.jpg";
import { ReactComponent as MessageIcon } from "../../icons/message.svg";

export const StyledHeader = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 0 72px;
  color: ${({ theme }) => theme.color.slateGray};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 1.2;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mineShaft};

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
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-bottom: 8px;
  }
`;

export const ExtraHeaderContent = styled.p`
  margin: 35px 0 32px;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  max-width: 630px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 17px;
    max-width: 530px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 16px 0 24px;
    max-width: 530px;
  }
`;

export const ProfilePicture = styled.div`
  width: 40vw;
  min-width: 128px;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-image: url(${picture});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: ${({ theme }) => theme.shadow.thin};
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  background: #0366d6;
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.semiTransparentIron};
  border-radius: 4px;
  width: 100%;
  transition: box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.color.anakiwa} 0px 0px 0px 2px;
  }

  &:active {
    box-shadow: ${({ theme }) => theme.color.parsley} 0px 2px 0px 0px inset;
  }

  &::selection {
    background: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
  }
`;

export const Icon = styled(MessageIcon)`
  position: relative;
  top: 1px;
`;
