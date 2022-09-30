import DECK from '../mock';
import react from 'react';
import Pergunta from './Pergunta';
import Resposta from './Resposta';
import CardFechado from './CardFechado';

const [EscolherPergunta, setEscolherPergunta] = react.useState(true)
const [RevelarPergunta, setRevelarPergunta] = react.useState(true)
const [RevelarResposta, setRevelarResposta] = react.useState(true)

export default function Flashcards() {
  console.log(DECK);

  return (
      <>
      {DECK.map( (value, index) => 

        EscolherPergunta ? (
          <CardFechado index={index} EscolherPergunta={EscolherPergunta} setEscolherPergunta={setEscolherPergunta}/>
        ) : RevelarPergunta ? (
          <Pergunta index={index} RevelarPergunta={value.pergunta} setRevelarPergunta={setRevelarPergunta}/>
        ) : (
          <Resposta index={index} RevelarResposta={value.resposta} setRevelarResposta={setRevelarResposta}/>
        )

        /* <Pergunta value={value.pergunta}/>
        <Resposta value={value.resposta}/> */
      )}
      </>
  ); 
}  