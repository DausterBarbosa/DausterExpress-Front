import {BiErrorCircle} from "react-icons/bi";

import {
    AiOutlineCheckCircle,
    AiOutlineClockCircle
} from "react-icons/ai";

import {VscError} from "react-icons/vsc";

import {
    StatusBarContainer,
    StatusBarBox
} from "./style";

export default function StatusBar(){
    return (
        <StatusBarContainer>
            <StatusBarBox>
                <BiErrorCircle size={40} color="#fce903"/>
                <div>
                    <p>1</p>
                    <strong>PROBLEMAS</strong>
                </div>
            </StatusBarBox>
            <StatusBarBox>
                <AiOutlineCheckCircle size={40} color="#00cc00"/>
                <div>
                    <p>1</p>
                    <strong>ENTREGUES</strong>
                </div>
            </StatusBarBox>
            <StatusBarBox>
                <VscError size={40} color="#ae0000"/>
                <div>
                    <p>1</p>
                    <strong>CANCELADOS</strong>
                </div>
            </StatusBarBox>
            <StatusBarBox>
                <AiOutlineClockCircle size={40} color="#4d148c"/>
                <div>
                    <p>1</p>
                    <strong>PENDENTES</strong>
                </div>
            </StatusBarBox>
        </StatusBarContainer>
    );
}