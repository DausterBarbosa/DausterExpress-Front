import Styled from "styled-components";

export const LoginPage = Styled.div`
    background: #4d148c;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginPageContainer = Styled.div`
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 7px;
    width: 400px;
`;

export const LoginPageContainerInput = Styled.input`
    padding: 15px;
    font-size: 17px;
    border-radius: 7px;
    border: 1px solid #999;
    background: #EEE;
    width: 100%;
    margin-top: 30px;
    outline-color: #ff6200;

    & + &{
        margin-top: 10px;
    }
`;

export const LoginPageKeepConnectionContainer = Styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    input[type="checkbox"]{
        width: 17px;
        height: 17px;
        cursor: pointer;
    }

    p{
        font-size: 17px;
        margin-left: 5px;
    }
`;

export const LoginPageContainerButton = Styled.button`
    padding: 15px;
    font-weight: bold;
    font-size: 17px;
    color: #FFF;
    background: #ff6200;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 7px;
    width: 100%;

    &:hover{
        background: #e35f0c;
    }
`;

export const Logo = Styled.strong`
    font-size: 45px;
    font-weight: 1000;

    span{
        color: #4d148c;
    }

    span + span{
        color: #ff6200;
    }
`;