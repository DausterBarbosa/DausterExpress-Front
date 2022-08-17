import Styled from "styled-components";

export const StatusBarContainer = Styled.div`
    display: flex;
    align-items: center;
`;

export const StatusBarBox = Styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px #333;
    padding: 10px 20px;
    border-radius: 7px;

    & + &{
        margin-left: 20px;
    }

    div{
        color: #333;
        font-size: 17px;
        margin-left: 5px;
    }
`;

