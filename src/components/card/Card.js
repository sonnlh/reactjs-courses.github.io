import React from "react";
import styled from "styled-components";
// const TenBien = styled.feDistantLight(h1,h2,div,span,...)``
// css in js
const StyledCard = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;
const CardImage = styled.div`
  ${"" /* height: 300px; */}
  border-radius: 8px;
  ${"" /* width: 300px; */}
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  width: 90%;
  height: 25%;
  background-color: white;
  ${"" /* position: absolute; */}
  transform: translate(5%, -50%);
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-tems: flex-start;
`;
const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  align-items: center;
  position: static;
`;
const CardBottom = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  align-items: center;
  position: static;
`;
const AvatarImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 1rem;
`;
const CardTitle = styled.span`
color: ##333333;
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  font-weight: thin;
`;

const CardUser = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const CardNumber = styled.span`
  font-size: 18px;
  font-weight: 700;
  background: -webkit-linear-gradient(#7d6aff, #ffb86c, #fc2872);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const CardDescribtion = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src={props.item.img} alt="" />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <AvatarImg src={props.item.avatar} alt="" />
            <CardTitle className="font-thin italic">{props.item.username}</CardTitle>
          </CardUser>
          <CardUser>
            <AvatarImg
              src="https://w7.pngwing.com/pngs/933/485/png-transparent-red-heart-illustration-love-hearts-love-hearts-hert-love-heart-cupid-thumbnail.png"
              alt=""
            />
            <span>{props.item.love}</span>
          </CardUser>
        </CardTop>
        <CardBottom>
          <CardDescribtion >{props.item.describtion}</CardDescribtion>
          <CardNumber>{props.item.psl} PSL</CardNumber>
        </CardBottom>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
