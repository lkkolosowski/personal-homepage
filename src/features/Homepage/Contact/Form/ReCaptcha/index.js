import GoogleReCAPTCHA from "react-google-recaptcha";
import { StyledReCaptcha } from "./styled";
import { useSelector } from "react-redux";
import { selectIsDarkTheme, selectToggleKey } from "../../../utilsSlice";

const ReCaptcha = ({ error, size, handleChange }) => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const toggleKey = useSelector(selectToggleKey);

  const CAPTCHA_KEY = process.env.REACT_APP_CAPTCHA_KEY; //change captcha key

  return (
    <StyledReCaptcha error={error} size={size}>
      <GoogleReCAPTCHA
        error={error}
        size={size}
        onChange={handleChange}
        name="g-recaptcha-response"
        sitekey={CAPTCHA_KEY}
        theme={isDarkTheme ? "dark" : "light"}
        key={toggleKey}
      />
    </StyledReCaptcha>
  );
};

export default ReCaptcha;
