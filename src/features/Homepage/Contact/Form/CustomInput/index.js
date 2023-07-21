import { useField } from "formik";
import {
  ErrorMessage,
  Input,
  Label,
  LabelContent,
  StyledFormItem,
} from "./styled";

const CustomInput = ({ withTextArea, label, required, icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <StyledFormItem withTextArea={withTextArea}>
      <Label htmlFor={label}>
        <LabelContent required={required}>{icon}</LabelContent>
      </Label>
      <Input {...field} {...props} isError={meta.touched && meta.error} />
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </StyledFormItem>
  );
};

export default CustomInput;
