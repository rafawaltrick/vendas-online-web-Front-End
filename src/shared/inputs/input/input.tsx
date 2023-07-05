import { Input as Inputantd, InputProps as InputPropsAntd } from "antd";

import { BoxInput, TitleInput } from "./input.styles";

interface InputProps extends InputPropsAntd {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      {title && <TitleInput type="danger">{title}</TitleInput>}

      <Inputantd {...props} />
    </BoxInput>
  );
};

export default Input;
