import {
    LoginPage,
    LoginPageContainer,
    LoginPageContainerInput,
    LoginPageContainerButton,
    Logo,
    LoginPageKeepConnectionContainer
} from "./style";

export default function Login(){
    return (
        <LoginPage>
            <LoginPageContainer>
                <Logo>
                    <span>Dauster</span>
                    <span>Express</span>
                </Logo>
                <LoginPageContainerInput
                    placeholder="E-mail"
                />
                <LoginPageContainerInput
                    placeholder="Senha"
                    type="password"
                />
                <LoginPageKeepConnectionContainer>
                    <input type="checkbox" />
                    <p>Mantenha-me conectado</p>
                </LoginPageKeepConnectionContainer>
                <LoginPageContainerButton>
                    Entrar no sistema
                </LoginPageContainerButton>
            </LoginPageContainer>
        </LoginPage>
    );
}