import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import {
  FormItem,
  Input,
  Label,
  LabelContent,
  MessageIcon,
  PhoneIcon,
  Pair,
  SpeechBubbleIcon,
  StyledForm,
  TextArea,
  FormSet,
  TopicIcon,
  EnvelopeIcon,
  PersonNameIcon,
  PersonSurnameIcon,
} from "./styled";
import { ButtonLink } from "../../../../common/Link";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Form = () => {
  const form = useRef();
  const [captchaIsDone, setCaptchaIsDone] = useState(false);
  const [emailIsSent, setEmailIsSent] = useState(false);
  const [confettiRain, setConfettiRain] = useState(0);
  const { width, height } = useWindowSize();

  const CAPTCHA_KEY = process.env.REACT_APP_CAPTCHA_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  function onChange() {
    setCaptchaIsDone(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (captchaIsDone && !emailIsSent) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      setEmailIsSent(true);
      setConfettiRain(300);
      setTimeout(() => setConfettiRain(0), 3000);
    }
  };

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <Confetti
        numberOfPieces={confettiRain}
        style={{ position: "fixed" }}
        width={width}
        height={height}
      />
      <FormSet>
        <Pair>
          <FormItem>
            <Label>
              <LabelContent>
                <PersonNameIcon />
              </LabelContent>
            </Label>
            <Input type="text" placeholder="Name" name="user_name" required />
          </FormItem>
          <FormItem>
            <Label>
              <LabelContent>
                <PersonSurnameIcon />
              </LabelContent>
            </Label>
            <Input
              type="text"
              placeholder="Surname"
              name="user_surname"
              required
            />
          </FormItem>
        </Pair>
        <Pair>
          <FormItem>
            <Label>
              <LabelContent>
                <EnvelopeIcon />
              </LabelContent>
            </Label>
            <Input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
          </FormItem>
          <FormItem>
            <Label>
              <LabelContent>
                <PhoneIcon />
              </LabelContent>
            </Label>
            <Input
              type="tel"
              placeholder="Phone number"
              name="user_phone_number"
              required
            />
          </FormItem>
        </Pair>
      </FormSet>
      <FormSet>
        <FormItem>
          <Label>
            <LabelContent>
              <TopicIcon />
            </LabelContent>
          </Label>
          <Input
            type="text"
            placeholder="Topic (optional)"
            name="message_topic"
          />
        </FormItem>
        <FormItem>
          <Label>
            <LabelContent>
              <SpeechBubbleIcon />
            </LabelContent>
          </Label>
          <TextArea rows="5" placeholder="Message" name="message" required />
        </FormItem>
        {captchaIsDone && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.9,
              bounce: 0.45,
            }}
            viewport={{
              once: true,
            }}
          >
            <ButtonLink success={emailIsSent} wide as="button" type="submit">
              <MessageIcon />
              {!emailIsSent ? "Send" : "Sent!"}
            </ButtonLink>
          </motion.div>
        )}
        <ReCAPTCHA sitekey={CAPTCHA_KEY} onChange={onChange} />
      </FormSet>
    </StyledForm>
  );
};

export default Form;
