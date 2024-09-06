import styled from "styled-components"
import playLogo from "../assets/seta_play.png"
import turnLogo from "../assets/seta_virar.png"

import rightLogo from "../assets/icone_certo.png"
import almostLogo from "../assets/icone_quase.png"
import wrongLogo from "../assets/icone_erro.png"

import { useState } from "react"


export default function Question({ questionNumber, cards, question, answer, setCont }) {

    const [clickQuestion, setClickQuestion] = useState(true)
    const [clickAnswer, setClickAnswer] = useState(false)

    const [difficulty, setDifficulty] = useState(false)

    const [valueAnswer, setValueAnswer] = useState("")

    function questionAnswered(string) {

        if (string == "wrong") {
            setValueAnswer("wrong")
        }
        if (string == "almost") {
            setValueAnswer("almost")
        }

        if (string == "right") {
            setValueAnswer("right")
        }



        setDifficulty(!difficulty)
        setClickAnswer(!clickAnswer)
        setClickQuestion(!clickQuestion)
        setCont((c) => c + 1)
    }




    return (
        <DivContainer>
            {clickQuestion && !difficulty &&
                <DivQuestion  >
                    <h1>Pergunta {questionNumber}  </h1>
                    <img onClick={() => setClickQuestion(!clickQuestion)} src={playLogo} alt="" />
                </DivQuestion>
            }



            {!clickQuestion && !clickAnswer &&
                <DivQuestionClick  >
                    <h1>{question} </h1>
                    <img onClick={() => setClickAnswer(!clickAnswer)}

                        src={turnLogo} alt="" />
                </DivQuestionClick>

            }


            {clickAnswer &&
                <DivQuestionClick  >
                    <h1>{answer} </h1>
                    <DivButtonContainer>
                        <DivLembrei onClick={() => questionAnswered("wrong")} ><p>Não lembrei</p></DivLembrei>
                        <DivQuaseNaoLembrei onClick={() => questionAnswered("almost")} ><p>Quase não lembrei</p></DivQuaseNaoLembrei>
                        <DivZap onClick={() => questionAnswered("right")} >Zap!</DivZap>
                    </DivButtonContainer>

                </DivQuestionClick>
            }

            {difficulty && valueAnswer == "wrong" &&
                <DivQuestionAnswered  cor={"#FF3030"} >
                    <h1>Pergunta {questionNumber}  </h1>
                    <img src={wrongLogo} alt="" />
                </DivQuestionAnswered>
            }

            {difficulty && valueAnswer == "almost" &&
                <DivQuestionAnswered cor={"#FF922E"}  >
                    <h1>Pergunta {questionNumber}  </h1>
                    <img src={almostLogo} alt="" />
                </DivQuestionAnswered>
            }

            {difficulty && valueAnswer == "right" &&
                <DivQuestionAnswered cor={"#2FBE34"}  >
                    <h1>Pergunta {questionNumber}  </h1>
                    <img src={rightLogo} alt="" />
                </DivQuestionAnswered>
            }

        </DivContainer>
    )
}



const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    
    
`


const DivQuestion = styled.div`
   width: 300px;
   height: 65px;
   color: black;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-left: 10px;
  
   background-color: white;
    h1{
        font-weight: 700;
        font-family: "Recursive", sans-serif;
        font-size: 16px;
    }
   img{
    margin-right: 10px;
   }
`

const DivQuestionClick = styled.div`
   width: 300px;
   height: 131px;
   color: black;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding-left: 10px;
   flex-direction: column;
  
   background-color: #FFFFD4;
   h1{
        font-weight: 400;
        font-family: "Recursive", sans-serif;
        
    }
   img{
    margin-right: 10px;
   
   }
`

const DivButtonContainer = styled.div`
   display: flex;
   flex-direction: row;
   gap: 13px;
`

const DivLembrei = styled.div`
    background-color: #ff3030 ;
    width: 85px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:  "Recursive", sans-serif;
    p{
        font-size: 12px;
        text-align: center;
        
    }
`

const DivQuaseNaoLembrei = styled.div`
    background-color: #ff922e ;
    width: 85px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:  "Recursive", sans-serif;
    p{
        font-size: 12px;
        text-align: center;
        
    }
`

const DivZap = styled.div`
    background-color: #2fbe34;
    width: 85px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:  "Recursive", sans-serif;
    p{
        font-size: 12px;
        text-align: center;
        
    }
`

const DivQuestionAnswered = styled.div`
  width: 300px;
   height: 65px;
   color: black;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-left: 10px;
  
   background-color: white;
    h1{
        font-weight: 700;
        font-family: "Recursive", sans-serif;
        font-size: 16px;
        text-decoration: line-through;
        color: ${props => props.cor};
    }
   img{
    margin-right: 10px;
   }

`