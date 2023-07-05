import Button from "../../shared/buttons/button/Button";
import Input from "../../shared/inputs/input/input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./coracao.png" />
          <TitleLogin level={2} type="danger" >Login</TitleLogin>
          <Input title="Usuário" />
          <Input title="Senha" />
          <Button type="primary" margin="64px 0px 16px 0px" danger >
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
