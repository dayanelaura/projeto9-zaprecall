import React from 'react';
import styled from 'styled-components';
import DECK from '../mock';

let contador = 0;

export default function Footer(){
    return(    
    <FooterContainer>
        <ButtonsContainer />
        <h1>{contador}/{DECK.length} CONCLUÍDOS</h1>
    </FooterContainer>
    );
}

const FooterContainer = styled.div`
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

const ButtonsContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

  button {
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
  }
`;