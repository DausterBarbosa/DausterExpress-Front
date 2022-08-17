import Styled from "styled-components";

export const HeaderContainer = Styled.header`
    background: #4d148c;
    padding: 15px;
    display: flex;
    align-items: center;
`;

export const Logo = Styled.strong`
    font-size: 35px;
    font-weight: 1000;

    span{
        color: #FFF;
    }

    span + span{
        color: #ff6200;
    }
`;

export const NavContainer = Styled.nav`
    margin-left: 35px;

    strong{
        color: #FFF;
        font-size: 15px;
        cursor: pointer;
    }

    strong + strong{
        margin-left: 20px;
    }

    strong:hover{
        color: #AAA;
    }
`;

export const ControlsContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ExitButton = Styled.button`
    padding: 10px 15px;
    cursor: pointer;
    font-weight: bold;
    background: #cc0000;
    border: none;
    color: #FFF;
    border-radius: 7px;
    font-size: 15px;

    &:hover{
        background: #c20000;
    }
`;