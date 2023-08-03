import { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useWindowScroll, useWindowSize } from "react-use";
import ReCAPTCHA from "react-google-recaptcha";
import {
  MessageIcon,
  PhoneIcon,
  Pair,
  SpeechBubbleIcon,
  StyledForm,
  TopicIcon,
  EnvelopeIcon,
  PersonNameIcon,
  PersonSurnameIcon,
} from "./styled";
import { ButtonLink } from "../../../../common/Link";
import Confetti from "react-confetti";
import { schema } from "./schema";
import CustomInput from "./CustomInput";

const Form = () => {
  const [captchaIsDone, setCaptchaIsDone] = useState(false);
  const [isChaptchaVisible, setIsCaptchaVisible] = useState(false);
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const [success, setSuccess] = useState(null);
  const { width, height } = useWindowSize();
  const { y } = useWindowScroll();

  const form = useRef();

  const CAPTCHA_KEY = process.env.REACT_APP_CAPTCHA_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const SendEmail = (values, actions) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        actions.resetForm();
        setSuccess(true);
        actions.setSubmitting(false);
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
        alert("Something went wrong with your message :(");
      }
    );
  };

  useEffect(() => {
    if (success) {
      setNumberOfPieces(300);
      setTimeout(() => setNumberOfPieces(0), 3000);
    }
  }, [success]);

  useEffect(() => {
    if (y >= height && !isChaptchaVisible) {
      setIsCaptchaVisible(true);
    }
  }, [y, height, isChaptchaVisible]);

  return (
    <Formik
      initialValues={{
        "g-recaptcha-response": "",
        user_name: "",
        user_surname: "",
        user_email: "",
        user_phone_number: "",
        message_topic: "",
        message: "",
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          SendEmail(values, actions);
        }, 1000);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm ref={form}>
          <Confetti
            numberOfPieces={numberOfPieces}
            style={{ position: "fixed" }}
            width={width}
            height={height}
          />
          <Pair>
            <CustomInput
              label="user_name"
              icon={<PersonNameIcon />}
              name="user_name"
              id="user_name"
              type="text"
              placeholder="Name"
              required
            />
            <CustomInput
              label="user_surname"
              icon={<PersonSurnameIcon />}
              name="user_surname"
              id="user_surname"
              type="text"
              placeholder="Surname"
            />
          </Pair>
          <Pair>
            <CustomInput
              label="user_email"
              icon={<EnvelopeIcon />}
              name="user_email"
              id="user_email"
              type="text"
              placeholder="Email"
              required
            />
            <CustomInput
              label="user_phone_number"
              icon={<PhoneIcon />}
              name="user_phone_number"
              id="user_phone_number"
              type="tel"
              placeholder="Phone number"
            />
          </Pair>
          <CustomInput
            label="message_topic"
            icon={<TopicIcon />}
            name="message_topic"
            id="message_topic"
            type="text"
            placeholder="Topic"
          />
          <CustomInput
            as="textarea"
            label="message"
            icon={<SpeechBubbleIcon />}
            name="message"
            id="message"
            type="text"
            placeholder="Message"
            withTextArea
            required
          />
          <ButtonLink
            as="button"
            success={success}
            disabled={!captchaIsDone || isSubmitting}
            type="submit"
            formButton
            wide
          >
            <MessageIcon />
            {success ? "Sent!" : "Send"}
          </ButtonLink>
          {isChaptchaVisible && (
            <ReCAPTCHA
              size={width < 768 ? "compact" : "normal"}
              name="g-recaptcha-response"
              sitekey={CAPTCHA_KEY}
              onChange={(response) => {
                setFieldValue("g-recaptcha-response", response);
                setCaptchaIsDone(!captchaIsDone);
              }}
            />
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
