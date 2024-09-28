import '../src/styles/reset.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import styled from "styled-components"

import { useState } from 'react'


function App() {
  
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  const [cont, setCont] = useState(0) 

  return (
    <Container>
      <Header/>
      <Content cards={cards} setCont={setCont} />
      <Footer cards={cards} cont={cont} />
    </Container>
  )
}


const Container = styled.div `
  width: 100vw ;
  height: 98vh;
  position: relative;



  background-color: red;


`

export default App
