import { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";
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
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { schema } from "./schema";
import CustomInput from "./CustomInput";

const Form = () => {
  const form = useRef();
  const [captchaIsDone, setCaptchaIsDone] = useState(false);
  const [confettiRain, setConfettiRain] = useState(0);
  const [success, setSuccess] = useState(null);
  const { width, height } = useWindowSize();

  const CAPTCHA_KEY = process.env.REACT_APP_CAPTCHA_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  function SendEmail(values, actions) {
    if (captchaIsDone) {
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
    }
  }

  // function onChange() {
  //   setCaptchaIsDone(true);
  // }

  useEffect(() => {
    if (success) {
      setConfettiRain(300);
      setTimeout(() => setConfettiRain(0), 3000);
    }
  }, [success]);

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
            numberOfPieces={confettiRain}
            style={{ position: "fixed" }}
            width={width}
            height={height}
          />
          <Pair>
            <CustomInput
              label="user_name"
              required={true}
              icon={<PersonNameIcon />}
              name="user_name"
              type="text"
              placeholder="Name"
              id="user_name"
              as="input"
            />
            <CustomInput
              label="user_surname"
              required={false}
              icon={<PersonSurnameIcon />}
              name="user_surname"
              type="text"
              placeholder="Surname"
              id="user_surname"
              as="input"
            />
          </Pair>
          <Pair>
            <CustomInput
              label="user_email"
              required={true}
              icon={<EnvelopeIcon />}
              name="user_email"
              type="text"
              placeholder="Email"
              id="user_email"
              as="input"
            />
            <CustomInput
              label="user_phone_number"
              required={false}
              icon={<PhoneIcon />}
              name="user_phone_number"
              type="tel"
              placeholder="Phone number"
              id="user_phone_number"
              as="input"
            />
          </Pair>
          <CustomInput
            label="message_topic"
            required={false}
            icon={<TopicIcon />}
            name="message_topic"
            type="text"
            placeholder="Topic"
            id="message_topic"
            as="input"
          />
          <CustomInput
            withTextArea={true}
            label="message"
            required={true}
            icon={<SpeechBubbleIcon />}
            name="message"
            type="text"
            placeholder="Message"
            id="message"
            as="textarea"
          />
          <ButtonLink
            success={success}
            disabled={!captchaIsDone || isSubmitting}
            wide
            as="button"
            type="submit"
            style={{ marginBottom: "16px" }}
          >
            <MessageIcon />
            {!success ? "Send" : "Sent!"}
          </ButtonLink>
          <ReCAPTCHA
            name="g-recaptcha-response"
            sitekey={CAPTCHA_KEY}
            // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            // this is key for developers only
            onChange={(response) => {
              setFieldValue("g-recaptcha-response", response);
              setCaptchaIsDone(!captchaIsDone);
            }}
          />
          {/* {success !== null && (
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.9,
            bounce: 0.45,
          }}
        >
          <InfoParagraph success={success}>
            {success
              ? "Your message has been sent! :)"
              : "Something went wrong with your message :("}
          </InfoParagraph>
        </motion.div>
      )} */}
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
