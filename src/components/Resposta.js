import CardAberto from './CardAberto';
import React from 'react';

export default function Resposta(value){

    return (
        <CardAberto>
          {value.resposta}
        </CardAberto>
    ); 
}