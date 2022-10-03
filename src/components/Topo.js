import React from 'react';
import styled from 'styled-components';
import logo from "../assets/img/logo.png"

export default function Topo(){
    return(
        <TopoContainer>
            <img src={logo} alt='logo'/>
            <h1>ZapRecall</h1>
        </TopoContainer>
    )
}

const TopoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 44px;
  margin-bottom: 38px;

  h1{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
  }
  
  img {
    width: 52px;
    height: 60px;
    margin-right: 20px;
  }
`;