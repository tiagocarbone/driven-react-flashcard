import logo from "../assets/logo.png"
import styled from "styled-components"

export default function Header(){
    return (
        <Container>

            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
            
        </Container>
    )
}


const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 30px ;
    padding-left: 45px;
    padding-right: 45px;
    font-family:  "Righteous", system-ui;
    margin-top: -10px;
    margin-bottom: -10px;
    h1{
        font-size: 36px;
        font-weight: 400;
        color: white;
    }

    img{
        width: 52px;
        height: 60px;
    }

`