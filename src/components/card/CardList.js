import React from "react";
import cardList from "../../cardList";
import styled from "styled-components";
import Card from "./Card";
import CardTailwind from "./CardTailwind";

const ListCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
`;
const CardList = () => {
  return (
    <ListCard>
      {cardList.map((item, index) => (
         //<Card item={item} key={index}></Card>
        <CardTailwind  item ={item} key = {index}></CardTailwind>    
      ))}
    </ListCard>
  );
};

export default CardList;
