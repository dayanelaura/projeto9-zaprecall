import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import DECK from '../mock';
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import icone_certo from "../assets/img/icone_certo.png"

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
          <FlashcardFechado color={`#FF3030`} textdecoration={`line-through`}>
            <p data-identifier="flashcard-index-item"> Pergunta {index+1} </p>
            <img src={icone_erro} alt='icone erro' data-identifier="flashcard-status" />
          </FlashcardFechado>
        )
    }
    else if(cardQuase.includes(index)){
      cont++;
      setContador(cont);
        return (
          <FlashcardFechado color={`#FF922E`} textdecoration={`line-through`}>
            <p data-identifier="flashcard-index-item"> Pergunta {index+1} </p>
            <img src={icone_quase} alt='icone quase' data-identifier="flashcard-status" />
          </FlashcardFechado>
        )
    }
    else if(cardLembrei.includes(index)){
      cont++;
      setContador(cont);
        return (
          <FlashcardFechado color={`#2FBE34`} textdecoration={`line-through`}>
            <p data-identifier="flashcard-index-item"> Lembrete {index+1} </p>
            <img src={icone_certo} alt='icone acerto' data-identifier="flashcard-status" />
          </FlashcardFechado>
        )
    }
    else if(respostaAberta.includes(index)){
      return (
        <FlashcardAberto>
          <p data-identifier="flashcard-answer"> 
            {value.resposta} 
          </p>
          <ButtonsContainer>
            <Button 
              color={`#FF3030`} 
              onClick={() => setCardEsqueci([...cardEsqueci, index])}
              data-identifier="forgot-btn">
              Não lembrei
            </Button>

            <Button 
              color={`#FF922E`} 
              onClick={() => setCardQuase([...cardQuase, index])}
              data-identifier="almost-forgot-btn">
              Quase não lembrei
            </Button>

            <Button 
              color={`#2FBE34`} 
              onClick={() => setCardLembrei([...cardLembrei, index])}
              data-identifier="zap-btn">
              Zap!
            </Button>         
          </ButtonsContainer>
        </FlashcardAberto>
      )
    }
    else if(perguntaAberta.includes(index)){
      return (
        <FlashcardAberto>
          <p data-identifier="flashcard-question">
            {value.pergunta}
          </p>
          <img src={seta_virar} 
            onClick={() => setRespostaAberta([index])} 
            alt='mostrar resposta'
            data-identifier="flashcard-turn-btn" />
        </FlashcardAberto>
      )
    }
    else {
      return (
        <FlashcardFechado >
          <p data-identifier="flashcard-index-item"> Pergunta {index+1} </p>
          <img src={seta_play} 
            onClick={() => setPerguntaAberta([index])}
            alt='seta play'
            data-identifier="flashcard-show-btn" />
        </FlashcardFechado>
      )}
  }
  return(
    <>
      <FlashcardsContainer>
        {DECK.map((value, index) => <DinamicaCards key={index} value={value} index={index}/>)}
      </FlashcardsContainer>
      <Footer data-identifier="flashcard-counter">
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
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.color};
    text-decoration: ${props => props.textdecoration}; 

    p {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
    img {
      margin-left: 163px;
      cursor: pointer;
    }
`;

const FlashcardAberto = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;

  img{
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

const Button = styled.div`
  background-color: ${props => props.color};
  height: 37px;
  width: 90px;
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
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