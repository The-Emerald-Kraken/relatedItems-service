<<<<<<< HEAD
=======
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-use-before-define */
>>>>>>> 08cfe3d5445f2d2c27f9521deeb56c98f0485f62
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

const Wrap = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  letter-spacing: 0;
  font-size: 1rem;
  line-height: 2rem;
  list-style: none;
  padding: 0px;
  height: 350px;
  scroll-behavior: smooth;
`;
const ListWrap = styled.section`
<<<<<<< HEAD
  height: 175px;
  width: 179px;
  padding: 7px 0px 0px 10px;
  
=======
  height: 170px;
  width: 173px;
  padding: 0px 7px 0px 10px;
>>>>>>> 08cfe3d5445f2d2c27f9521deeb56c98f0485f62
`;
const ImageSizer = styled.img`
  height: 180px;
  width: 180px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;
const RedText = styled.span`
  color: #c83232;
  display: inline;
  font-family: Graphik,"Helvetica Neue",sans-serif;
    font-style: normal;
    font-weight: 300;
    letter-spacing: -.08px;
    font-size: .8rem;
    line-height: .75rem;
    margin-bottom: 4px;
`;
const ManufacturerText = styled.div`
  font-family: Graphik,"Helvetica Neue",sans-serif;
  font-style: normal;
  color: #292929;
  margin: 0px 0 0px;
  display: flex;
  align-items: center;
  font-weight: 340;
  letter-spacing: -.08px;
  font-size: .8rem;
  line-height: 1.1rem;
  left: 0;
  width: 100%;
  color: #292929;
`;
const ProductText = styled.span`
font-family: Graphik,"Helvetica Neue",sans-serif;
font-style: normal;
font-weight: 400;
letter-spacing: 0;
font-size: 1rem;
line-height: 1rem;
margin-bottom: 0;
`;
const NormalPrice = styled.div`
  text-decoration: line-through;
  display: inline;
  font-family: Graphik,"Helvetica Neue",sans-serif;
    font-style: normal;
    font-weight: 300;
    letter-spacing: -.08px;
    font-size: .8rem;
    line-height: .75rem;
    margin-bottom: 4px;
`;
const Price = styled.div`
  display: inline;
  font-family: Graphik,"Helvetica Neue",sans-serif;
    font-style: normal;
    font-weight: 300;
    letter-spacing: -.08px;
    font-size: .8rem;
    line-height: .75rem;
    margin-bottom: 4px;
`;
const StarCreator = styled.span`
color: #EDF0ED;
-webkit-text-stroke: .76px #BD7B2D;
height: 25px;

font-size: 17px;
position: relative;
float:left;

&:before {
  content: '★★★★★';
  opacity: .6;
}
&:after{
  font-size: 17px;
  content: "★★★★★";
  color: #F5CE6D;
  position: absolute;
  
  left: 0;
  top:0;
  width: ${(props) => props.rating * 15 || '0'}%;
  overflow: hidden;
}
`;
const NumberOfRatings = styled.span`
font-family: Graphik,"Helvetica Neue",sans-serif;
font-style: normal;
font-weight: 300;
letter-spacing: -.08px;
font-size: .8rem;
line-height: 1.9rem;
margin-bottom: 4px;
margin-right: 20px;
`;
const HoverUnderline = styled.div`
:hover {
  text-decoration: underline;
  cursor: pointer;
}
`;
<<<<<<< HEAD
const Section1 = styled.span`
display:flex;
a {
  postion: absolute;
  font-size: 3em;
  height: 45px;
  width: 45px;
  z-index: 1;
  margin: 130px 10px 0px 0px;
  &:nth-of-type(1){
    top: 0; bottom:0; left:0;
  }
}
`;
const Section2 = styled.span`
display:flex;

a {
  postion: absolute;
  color:#fff;
  text-decoration: none;
  height: 45px;
  width: 50px;
  text-align: center;
  z-index: 1;
  margin: 130px 0px 0px 0px;
  border: none;
  border-image: none;
}
`;
const ArrowShowRight = styled.img`
  background-image: url(https://fecimagesghrsea12.s3-us-west-1.amazonaws.com/pics/arrow2.png);
  height: 50px;
  width: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: circle(24px at center);
`;
const ArrowShowLeft = styled.img`
  background-image: url(https://fecimagesghrsea12.s3-us-west-1.amazonaws.com/pics/arrow2.png);
  height: 50px;
  width: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(180deg);
  clip-path: circle(24px at center);
=======
const LeftButton = styled.button`
  display: flex;
  background: 0 0;
  border: 0;
  color: #fefefe;
  margin: 220px 0px 0px 0px;
  width: 100%;
  max-height: 40px;
  max-width: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  cursor: pointer;
  border-radius: 50%;
  height: 40px;
  bottom: initial;
  background: #f9f8f6;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(12,11,8,.2);
`;
const RightButton = styled.button`
display: flex;
border: 0;
color: #fefefe;
right: 0;
margin: 220px 0px 0px 0px;
width: 100%;
max-height: 40px;
max-width: 40px;
position: absolute;
top: 0;
z-index: 1;
cursor: pointer;
border-radius: 50%;
height: 40px;
bottom: initial;
background: #f9f8f6;
box-shadow: 0 0.4rem 0.4rem 0 rgba(12,11,8,.2);


`;
const Section1 = styled.span`
display:flex;
`;
const Section2 = styled.span`
display:flex;
>>>>>>> 08cfe3d5445f2d2c27f9521deeb56c98f0485f62
`;

function List(props) {
  const { list } = props;
  const resultList = list.map((product) => {
<<<<<<< HEAD
    let salesPrice;
=======
    var salesPrice;
>>>>>>> 08cfe3d5445f2d2c27f9521deeb56c98f0485f62
    if (product.onSale) {
      salesPrice = (
        <div id="related-item-price">
          <RedText>
            $
            {product.onSalePrice}
            {' '}
          </RedText>

          <NormalPrice>
            $
            {product.price}
            .99
          </NormalPrice>
        </div>
      );
    } else {
      salesPrice = (
        <div id="related-item-price">
          <Price>
            $
            {product.price}
            .99
          </Price>
        </div>
      );
    }
    return (
      <ListWrap>
        <li key={product.product_id}>

          <ImageSizer image={product.product_url} key={product._id.toString()} />
          <HoverUnderline>

            <ManufacturerText>
              <div id="related-item-manufacturer">
                {' '}
                {product.manufacturer}
              </div>
            </ManufacturerText>

            <ProductText>
              <div id="related-item-product-name">
                {' '}
                {product.item_name}
              </div>
            </ProductText>

          </HoverUnderline>
          <div>
            <StarCreator rating={product.rating} />

            <NumberOfRatings>
              (
              {product.number_of_ratings}
              )
            </NumberOfRatings>
          </div>
          {salesPrice}
        </li>
      </ListWrap>
    );
  });

  return (
<<<<<<< HEAD
    <Wrap>

      <Section1 id="section1">
        {resultList.slice(0, 6)}
        <a href="#section2">
          {' '}
          <ArrowShowRight />
          {' '}
        </a>
      </Section1>

      <Section2 id="section2">
        <a href="#section1">
          {' '}
          <ArrowShowLeft />
          {' '}
        </a>
        {resultList.slice(6, resultList.Length)}
      </Section2>

    </Wrap>

=======
    <div id="list-container">

      <ol>
        <Wrap>

          <Section1>
            {resultList.slice(0, 6)}
          </Section1>

          <Section2>
            {resultList.slice(6, resultList.Length)}
          </Section2>

        </Wrap>
      </ol>
      <LeftButton />
      <RightButton />

    </div>
>>>>>>> 08cfe3d5445f2d2c27f9521deeb56c98f0485f62
  );
}

export default List;
