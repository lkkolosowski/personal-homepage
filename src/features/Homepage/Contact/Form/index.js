import { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useWindowScroll, useWindowSize } from "react-use";
import { useDispatch, useSelector } from "react-redux";
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
  Message,
  ErrorMessage,
} from "./styled";
import { ButtonLink } from "../../../../common/Link";
import { schema } from "./schema";
import CustomInput from "./CustomInput";
import { selectFormStatus, setFormStatus } from "../../utilsSlice";
import ReCaptcha from "./ReCaptcha";

const Form = () => {
  const dispatch = useDispatch();
  const formStatus = useSelector(selectFormStatus);
  const [captchaIsDone, setCaptchaIsDone] = useState(false);
  const [isChaptchaVisible, setIsCaptchaVisible] = useState(false);
  const [dimensionsOnLoad, setDimensionsOnLoad] = useState({});
  const [message, setMessage] = useState("");
  const { width, height } = useWindowSize();
  const { y } = useWindowScroll();
  const form = useRef();

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const SendEmail = (values, actions) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        actions.resetForm();
        dispatch(setFormStatus("success"));
        setMessage("The message has been sent! :)");
      },
      (error) => {
        console.log(error.text);
        dispatch(setFormStatus("error"));
        setMessage("Something went wrong :( Refresh the page and try again!");
      }
    );
  };

  useEffect(() => {
    setDimensionsOnLoad({ width: width, height: height });
  }, []); // eslint-disable-line

  useEffect(() => {
    if (y >= height && !isChaptchaVisible) {
      setIsCaptchaVisible(true);
    }
  }, [dispatch, y, height, isChaptchaVisible]);

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
      {({ isSubmitting, setFieldValue, touched, errors }) => (
        <StyledForm ref={form}>
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
            required
          />
          <ButtonLink
            as="button"
            formStatus={formStatus}
            disabled={isSubmitting}
            type="submit"
            formButton
            wide
          >
            <MessageIcon />
            {formStatus === "success"
              ? "Sent!"
              : formStatus === "error"
              ? "Not Sent"
              : "Send"}
          </ButtonLink>
          {isChaptchaVisible && (
            <ReCaptcha
              error={
                touched["g-recaptcha-response"] &&
                errors["g-recaptcha-response"]
              }
              size={dimensionsOnLoad.width < 768 ? "compact" : "normal"}
              handleChange={(response) => {
                setFieldValue("g-recaptcha-response", response);
                setCaptchaIsDone(!captchaIsDone);
              }}
            />
          )}
          <ErrorMessage>
            {touched["g-recaptcha-response"] && errors["g-recaptcha-response"]
              ? errors["g-recaptcha-response"]
              : ""}
          </ErrorMessage>
          <Message formStatus={formStatus}>{message}</Message>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
