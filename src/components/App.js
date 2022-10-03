import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"
import Flashcards from "./Flashcards"
import Topo from "./Topo";

export default function App(){
    return (
      <>
        <GlobalStyles />
        <BodyContainer>
          <Topo />
          <Flashcards />
        </BodyContainer>
      </>
    )    
}

const BodyContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 110vh;
  padding-bottom: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;