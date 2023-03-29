import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../icons/message.svg";

export const StyledHero = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  margin: 8px 0 64px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  margin: 0;
  padding-bottom: 3px;
  letter-spacing: 0.05em;
`;

export const Subtitle = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const ExtraHeaderContent = styled.p`
  margin: 32px 0;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.05em;
  max-width: 640px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Header = styled.header`
  padding: 0 72px;
`;

export const Aside = styled.aside`
  max-width: 400px;
  min-height: 56px;
  width: 25vw;
`;

export const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
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
  max-width: 397px;
  transition: box-shadow .3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.color.anakiwa} 0px 0px 0px 2px;
  }
`;

export const Icon = styled(MessageIcon)`
  color: ${({ theme }) => theme.color.white};
  position: relative;
  top: 1px;
  align-items: center;
`;
