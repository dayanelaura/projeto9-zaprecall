import CardAberto from './CardAberto';
import seta_virar from "../assets/img/seta_virar.png";

export default function Pergunta(value){

  return (
    <CardAberto>
      {value.pergunta}
      <img src={seta_virar} alt="virar para resposta"/>
    </CardAberto>
  ); 
}