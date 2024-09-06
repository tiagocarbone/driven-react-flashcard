import Question from "./Question";
import styled from "styled-components"



export default function Questions({cards, setCont}){
    return (
        <>
            
            {cards.map((e, i) => (
                <Question questionNumber={i + 1} key={i} cards={cards} question={e.question} answer={e.answer} setCont={setCont}  />
            ))}

        </>
    )
}


