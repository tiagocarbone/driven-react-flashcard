import styled from "styled-components"
import { useState } from "react"

export default function Footer({cards, cont }){

    


    return(
        <DivContainer>
            <h1>  {cont}/{cards.length} CONCLUÍDOS</h1>
        </DivContainer>
    )
}

const DivContainer = styled.div `

    width: 100vw;
    height: 70px;
    background-color: white;
    position: fixed;
    bottom:0%;
    font-family:  "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        text-align: center;
    }
   
    

`