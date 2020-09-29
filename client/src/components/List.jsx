/* eslint-disable no-use-before-define */
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
`;

const ListWrap = styled.section`
  height: 300px;
  width: 300px;
  padding: 16px;
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
    line-height: 1.6rem;
    margin-bottom: 4px;
`;

const ManufacturerText = styled.div`
  font-family: Graphik,"Helvetica Neue",sans-serif;
  font-style: normal;
  color: #292929;
  margin: 8px 0 2px;
  display: flex;
  align-items: center;
  font-weight: 400;
  letter-spacing: -.08px;
  font-size: .7rem;
  line-height: 1.6rem;
  left: 0;
  width: 100%;
  color: #292929;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }

`;

const ProductText = styled.span`
font-family: Graphik,"Helvetica Neue",sans-serif;
font-style: normal;
font-weight: 500;
letter-spacing: 0;
font-size: 1rem;
line-height: 1.3rem;
margin-bottom: 0;
:hover {
  text-decoration: underline;
  cursor: pointer;
}
`;

const NormalPrice = styled.div`
  text-decoration: line-through;
  display: inline;
  font-family: Graphik,"Helvetica Neue",sans-serif;
    font-style: normal;
    font-weight: 300;
    letter-spacing: -.08px;
    font-size: .8rem;
    line-height: 1.6rem;
    margin-bottom: 4px;
`;

const StarCreator = styled.div`
unicode-bidi: bidi-override;
color: #c5c5c5;
font-size: 25px;
height: 25px;
width: 100px;
margin: 0 auto;
position: relative;
text-shadow: 0 1px 0 #a2a2a2;
content: '★★★★';
  opacity: .3;
`;

function List(props) {
  const { list } = props;
  const resultList = list.map((product) => {
    if (product.onSale) {
      return (
        <ListWrap>
          <li key={product.product_id}>

            <ImageSizer image={product.product_url} key={product._id.toString()} />

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

            <span id="related-item-rating">

              <span>
                {' '}
                {product.rating}
              </span>

              <span>
                (
                {product.number_of_ratings}
                )
              </span>

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
      <li key={product.product_id}>
        <ImageSizer image={product.product_url} />
        <div id="related-item-manufacturer">
          {' '}
          {product.manufacturer}
        </div>
        <div id="related-item-product-name">
          {' '}
          {product.item_name}
        </div>
        <div id="related-item-rating">
          {' '}
          {product.rating}
        </div>
        <div id="related-item-number-of-ratings">
          (
          {product.number_of_ratings}
          )
        </div>
        <div id="related-item-price">
          $
          {product.price}
        </div>
      </li>
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
