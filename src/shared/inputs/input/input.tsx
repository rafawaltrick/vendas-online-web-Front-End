import { Input as Inputantd, InputProps as InputPropsAntd } from "antd";

import { BoxInput, TitleInput } from "./input.styles";

interface InputProps extends InputPropsAntd {
  title?: string;
  margin?: string;
}

const Input = ({ title, margin, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin }}>
      {title && <TitleInput type="danger">{title}</TitleInput>}

      <Inputantd {...props} />
    </BoxInput>
  );
};

export default Input;
