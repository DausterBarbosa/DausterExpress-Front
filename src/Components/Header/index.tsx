import {
    HeaderContainer,
    Logo,
    NavContainer,
    ControlsContainer,
    ExitButton
} from "./style";

export default function Header(){
    return (
        <HeaderContainer>
            <Logo>
                <span>Dauster</span>
                <span>Express</span>
            </Logo>
            <ControlsContainer>
                <NavContainer>
                    <strong>ENCOMENDAS</strong>
                    <strong>ENTREGADORES</strong>
                    <strong>DESTINATÁRIOS</strong>
                    <strong>PROBLEMAS</strong>
                </NavContainer>
                <ExitButton>SAIR</ExitButton>
            </ControlsContainer>
        </HeaderContainer>
    );
}