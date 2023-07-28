import { object, string } from "yup";

const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const stringRegex = /^(?!\s+$).*/;

export const schema = object().shape({
  user_name: string()
    .min(2, "Name must be at least 2 characters")
    .matches(stringRegex, "This field cannot contain only blankspaces")
    .required("Required"),
  user_surname: string()
    .min(2, "Username must be at least 2 characters")
    .matches(stringRegex, "This field cannot contain only blankspaces"),
  user_email: string().email("Please enter a valid email").required("Required"),
  user_phone_number: string().matches(
    phoneRegex,
    "Please enter a valid phone number"
  ),
  message_topic: string().matches(
    stringRegex,
    "This field cannot contain only blankspaces"
  ),
  message: string()
    .matches(stringRegex, "This field cannot contain only blankspaces")
    .required("Required"),
  "g-recaptcha-response": string().required(),
});
