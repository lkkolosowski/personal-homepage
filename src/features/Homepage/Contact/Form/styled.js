import styled, { css } from "styled-components";
import { Form } from "formik";
import GoogleReCAPTCHA from "react-google-recaptcha";
import { ReactComponent as Msg } from "../../../../icons/message.svg";
import { ReactComponent as User } from "../../../../icons/user.svg";
import { ReactComponent as Phone } from "../../../../icons/phone.svg";
import { ReactComponent as Topic } from "../../../../icons/font.svg";
import { ReactComponent as Envelope } from "../../../../icons/envelope.svg";
import { ReactComponent as PersonName } from "../../../../icons/personName.svg";
import { ReactComponent as PersonSurname } from "../../../../icons/personSurname.svg";
import { ReactComponent as SpeechBubble } from "../../../../icons/speechBubble.svg";

export const ReCAPTCHA = styled(GoogleReCAPTCHA)`
  overflow: hidden;
  position: relative;
  border: 2px solid ${({ theme }) => theme.tile.border};
  border-radius: 8px;
  transition: border-color ${({ theme }) => theme.animation};

  ${({ size }) =>
    size === "normal" &&
    css`
      width: 302px; //original recaptcha width: 304px
      height: 76px; //original recaptcha height: 78px
    `}

  ${({ size }) =>
    size === "compact" &&
    css`
      width: 158px; //original recaptcha width: 164px
      height: 138px; //original recaptcha height: 144px
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

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

export const Pair = styled.div`
  display: flex;
  gap: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    flex-direction: column;
  }
`;

export const Message = styled.p`
  margin-top: 0;
  line-height: 1;
  min-height: 18px;

  ${({ formStatus }) => {
    switch (formStatus) {
      case "success":
        return css`
          color: ${({ theme }) => theme.success};
        `;
      case "error":
        return css`
          color: ${({ theme }) => theme.error};
        `;
      default:
        return css``;
    }
  }}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    min-height: 14px;
  }
`;

export const FormSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MessageIcon = styled(Msg)`
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

export const ErrorMessage = styled.p`
  margin: -5px 0 0;
  font-size: 13px;
  min-height: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.error};
`;
