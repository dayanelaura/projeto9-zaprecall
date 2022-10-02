// import IconeZap from "../assets/img/icone_certo.png"
// import IconeError from "../assets/img/icone_erro.png"
// import IconeAlmost from "../assets/img/icone_quase.png"

import React from 'react';
import { useState } from "react";
import seta_virar from "../assets/img/seta_virar.png"
import styled from "styled-components";
import DECK from '../mock';

export default function Flashcards(){
  const [perguntaAberta, setPerguntaAberta] = useState([]);
  const [respostaAberta, setRespostaAberta] = useState([])
  const [cardEsqueci, setCardEsqueci] = useState([]);
  const [cardQuase, setCardQuase] = useState([]);
  const [cardLembrei, setCardLembrei] = useState([]);
  const [contador, setContador] = useState(0);
  let cont=0;

  function DinamicaCards(props){
    const { index, value } = props;

    if(cardEsqueci.includes(index)){
      cont++;
      setContador(cont);
        return (
          <CardEsqueciFechado> Pergunta {index+1} </CardEsqueciFechado>
        )
    }
    else if(cardQuase.includes(index)){
      cont++;
      setContador(cont);
        return (
          <CardQuaseFechado> Pergunta {index+1} </CardQuaseFechado>
        )
    }
    else if(cardLembrei.includes(index)){
      cont++;
      setContador(cont);
        return (
          <CardLembreiFechado> Pergunta {index+1} </CardLembreiFechado>
        )
    }
    else if(respostaAberta.includes(index)){
      return (
        <FlashcardAberto>
          <p>{value.resposta}</p>
          
          <ButtonsContainer>
            <Button 
              color={`#FF3030`} 
              onClick={() => setCardEsqueci([...cardEsqueci, index])}>
              Não lembrei
            </Button>

            <Button 
              color={`#FF922E`} 
              onClick={() => setCardQuase([...cardQuase, index])}>
              Quase não lembrei
            </Button>

            <Button 
              color={`#2FBE34`} 
              onClick={() => setCardLembrei([...cardLembrei, index])}>
              Zap!
            </Button>         
          </ButtonsContainer>

        </FlashcardAberto>
      )
    }
    else if(perguntaAberta.includes(index)){
      return (
        <FlashcardAberto>
          <p>{value.pergunta}</p>
          <img src={seta_virar} onClick={() => setRespostaAberta([index])} alt='mostrar resposta'/>
        </FlashcardAberto>
      )
    }
    else {
      return (
        <FlashcardFechado 
          onClick={() => setPerguntaAberta([index])}>
          Pergunta {index+1}
        </FlashcardFechado>
      )}
  }
  return(
    <>
      <FlashcardsContainer>
        {DECK.map((value, index) => <DinamicaCards value={value} index={index}/>)}
      </FlashcardsContainer>
      <Footer>
        <h1>{contador}/{DECK.length} CONCLUÍDOS</h1>
      </Footer>
    </>
  )
}

const FlashcardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FlashcardFechado = styled.div`
  width: 300px;
  height: 65px;
  margin: 13px 0px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  color: black;
  font-family: 'Recursive', cursive;
  cursor: pointer;
`;

const CardQuaseFechado = styled.div`
  width: 300px;
  height: 65px;
  margin: 13px 0px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  color: #FF922E;
  font-family: 'Recursive', cursive;
  text-decoration: line-through; 
  cursor: pointer;
`

const CardEsqueciFechado = styled.div`
  width: 300px;
  height: 65px;
  margin: 13px 0px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  color: #FF3030;
  font-family: 'Recursive', cursive;
  text-decoration: line-through; 
  cursor: pointer;
`

const CardLembreiFechado = styled.div`
  width: 300px;
  height: 65px;
  margin: 13px 0px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  color: #2FBE34;
  font-family: 'Recursive', cursive;
  text-decoration: line-through; 
  cursor: pointer;
`

const FlashcardAberto = styled.div`
  width: 280px;
  height: 111px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFD5;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 18px 15px;
  padding-bottom: 6px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

  img {
    width: 30px;
    height: 20px;
    margin-top: 65px;
    margin-left: 254px;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.div`
  background-color: ${props => props.color};
  height: 37px;
  width: 85px;
  border-radius: 5px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;