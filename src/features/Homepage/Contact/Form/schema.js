import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = yup.object().shape({
  user_name: yup.string().min(2, "Name must be at least 2 characters").required("Required"),
  user_surname: yup.string().min(2, "Username must be at least 2 characters"),
  user_email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  user_phone_number: yup
    .string()
    .matches(phoneRegExp, "Please enter a valid phone number"),
  message_topic: yup.string(),
  message: yup.string().required("Required"),
  recaptcha: yup.string().required("Req"),
});
