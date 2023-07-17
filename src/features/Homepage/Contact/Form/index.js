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

const Form = () => {
  const form = useRef();
  const [captchaIsDone, setCaptchaIsDone] = useState(false);

  const CAPTCHA_KEY = process.env.REACT_APP_CAPTCHA_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  function onChange() {
    setCaptchaIsDone(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (captchaIsDone) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <FormSet>
        <Pair>
          <FormItem>
            <Label>
              <LabelContent>
                <PersonNameIcon />
              </LabelContent>
            </Label>
            <Input type="text" placeholder="Name" name="user_name" />
          </FormItem>
          <FormItem>
            <Label>
              <LabelContent>
                <PersonSurnameIcon />
              </LabelContent>
            </Label>
            <Input type="text" placeholder="Surname" name="user_surname" />
          </FormItem>
        </Pair>
        <Pair>
          <FormItem>
            <Label>
              <LabelContent>
                <EnvelopeIcon />
              </LabelContent>
            </Label>
            <Input type="email" placeholder="Email" name="user_email" />
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
          <Input type="text" placeholder="Topic" name="message_topic" />
        </FormItem>
        <FormItem>
          <Label>
            <LabelContent>
              <SpeechBubbleIcon />
            </LabelContent>
          </Label>
          <TextArea rows="5" placeholder="Message" name="message" />
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
            <ButtonLink wide as="button" type="submit">
              <MessageIcon />
              Send
            </ButtonLink>
          </motion.div>
        )}
        <ReCAPTCHA sitekey={CAPTCHA_KEY} onChange={onChange} />
      </FormSet>
    </StyledForm>
  );
};

export default Form;
