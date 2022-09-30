import DECK from '../mock';
import React from 'react';
import styled from 'styled-components';
import seta_play from "../assets/img/seta_play.png";

export default function Flashcards() {
  console.log(DECK);
  let index = 1;
  //troquei por essa variável só para prosseguir porque não identifiquei ainda o 
  //que corresponde ao index do array para referenciar direto no map...

  return (
      <div>
      {DECK.map( () => 
        <PerguntaFechada /* onClick={PerguntaAberta} */>
          <p>Pergunta {index++}</p>
          <img src={seta_play} alt="play"/>
        </PerguntaFechada>
      )}
      </div>
  ); 
}  

const PerguntaFechada = styled.div`
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

    p {
       font-family: 'Recursive';
       font-style: normal;
       font-weight: 700;
       font-size: 16px;
       line-height: 19px;
       color: #333333;
    }

    img {
        margin-left: 163px;
    }
`;