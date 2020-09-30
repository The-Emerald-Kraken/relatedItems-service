/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.ul`
  display: flex;
  overflow: hidden;
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
  height: 170px;
  width: 173px;
  padding: 7px 0px 0px 10px;
`;
const ImageSizer = styled.img`
  height: 170px;
  width: 170px;
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
const Section1 = styled.span`
display:flex;

a {
  postion: absolute;
  color:#fff;
  text-decoration: none;
  font-size: 3em;
  background: rgb(0, 0, 0);
  height: 45px;
  width: 45px;
  text-align: center;
  z-index: 1;
  border-radius: 50%;
  margin: 130px 0px 0px 0px;
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
  font-size: 3em;
  background: rgb(0, 0, 0);
  height: 45px;
  width: 45px;
  text-align: center;
  z-index: 1;
  border-radius: 50%;
  margin: 130px 0px 0px 0px;
}
`;

function List(props) {
  const { list } = props;
  const resultList = list.map((product) => {
    var salesPrice;
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
    <div id="list-container">

      <ol>
        <Wrap>

          <Section1 id="section1">
            {resultList.slice(0, 6)}
            <a href="#section2">
              {' '}
              { '>' }
              {' '}
            </a>
          </Section1>

          <Section2 id="section2">
            <a href="#section1">
              {' '}
              { '<' }
              {' '}
            </a>
            {resultList.slice(6, resultList.Length)}
          </Section2>

        </Wrap>
      </ol>

    </div>
  );
}

export default List;
