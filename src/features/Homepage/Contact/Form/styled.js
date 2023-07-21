import styled, { css } from "styled-components";
import { ReactComponent as Message } from "../../../../icons/message.svg";
import { ReactComponent as User } from "../../../../icons/user.svg";
import { ReactComponent as Phone } from "../../../../icons/phone.svg";
import { ReactComponent as Topic } from "../../../../icons/font.svg";
import { ReactComponent as Envelope } from "../../../../icons/envelope.svg";
import { ReactComponent as PersonName } from "../../../../icons/personName.svg";
import { ReactComponent as PersonSurname } from "../../../../icons/personSurname.svg";
import { ReactComponent as SpeechBubble } from "../../../../icons/speechBubble.svg";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

export const Pair = styled.div`
  display: flex;
  gap: 16px;

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    flex-direction: column;
  }
`;
export const FormSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextArea = styled.textarea`
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 0 8px 8px 0;
  padding: 6px 12px;
  border: 3px solid ${({ theme }) => theme.tile.border};
  outline: 0;
  background-color: ${({ theme }) => theme.tile.background};
  resize: vertical;
  min-height: calc(1.15em + 18px);
  transition: border-color ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};

  &:focus {
    border-color: ${({ theme }) => theme.tile.hover};
  }
`;

export const Label = styled.label`
  border-radius: 8px 0 0 8px;
  background-color: ${({ theme }) => theme.tile.background};
  width: calc(1.15em + 14px);
  height: 100%;
  transition: background-color ${({ theme }) => theme.themeAnimation};
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
  border: 3px solid ${({ theme }) => theme.tile.border};
  outline: 0;
  background-color: ${({ theme }) => theme.tile.background};

  transition: border-color ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};

  &:focus {
    border-color: ${({ theme }) => theme.tile.hover};
  }
`;

export const FormItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const MessageIcon = styled(Message)`
  position: relative;
  top: 1px;
`;

export const UserIcon = styled(User)`
  width: 24px;
  height: auto;
`;

export const PhoneIcon = styled(Phone)`
  width: 24px;
  height: auto;
`;

export const TopicIcon = styled(Topic)`
  width: 24px;
  height: auto;
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 24px;
  height: auto;
`;

export const PersonNameIcon = styled(PersonName)`
  width: 24px;
  height: auto;
`;

export const PersonSurnameIcon = styled(PersonSurname)`
  width: 24px;
  height: auto;
`;

export const SpeechBubbleIcon = styled(SpeechBubble)`
  width: 24px;
  height: auto;
`;

export const InfoParagraph = styled.div`
  padding: 0.75rem 1.25rem;
  margin: 0 auto;

  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  ${({ success }) =>
    success &&
    css`
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    `}
`;
