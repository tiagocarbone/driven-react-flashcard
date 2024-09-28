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
    justify-content: center;
    gap: 80px;
    padding-top: 15px;

    font-family:  "Righteous", system-ui;


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