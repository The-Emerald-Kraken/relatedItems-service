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
`;
const ListWrap = styled.section`
  height: 290px;
  width: 290px;
  padding: 0px 10px 0px 10px;
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
const StarCreator = styled.div`
color: #EDF0ED;
-webkit-text-stroke: .76px #BD7B2D;
height: 25px;
width: 110px;
font-size: 17px;
position: relative;
float:left;
display:inline-block;margin-right:10px;
&:before {
  content: '★★★★★';
  opacity: .6;
}
&:after{
  font-size: 17px;
  content: "★★★★★";
  color: #F5CE6D;
  position: absolute;
  display: block;
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
float:left;
`;
const HoverUnderline = styled.div`
:hover {
  text-decoration: underline;
  cursor: pointer;
}
`;

function List(props) {
  const { list } = props;
  const resultList = list.map((product) => {
    if (product.onSale) {
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

            <span id="related-item-rating">

              <span>
                <StarCreator rating={product.rating} />
              </span>

              <NumberOfRatings>
                (
                {product.number_of_ratings}
                )
              </NumberOfRatings>

            </span>

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

          </li>
        </ListWrap>
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

          <span id="related-item-rating">

            <span>
              <StarCreator rating={product.rating} />
            </span>

            <NumberOfRatings>
              (
              {product.number_of_ratings}
              )
            </NumberOfRatings>

          </span>

          <div id="related-item-price">

            <Price>
              $
              {product.price}
              .99
            </Price>

          </div>

        </li>
      </ListWrap>
    );
  });

  return (
    <div id="list-container">
      <ul>
        <Wrap>
          {resultList}
        </Wrap>
      </ul>
    </div>
  );
}

export default List;
