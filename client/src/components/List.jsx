/* eslint-disable react/prop-types */
import React from 'react';

function List(props) {
  const { list } = props;
  const resultList = list.map((product) => {
    if (product.onSale) {
      return (
        <li key={product.product_id}>
          <img src={product.product_url} alt="a dog" />
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
            {product.onSalePrice}
            {' '}
            <div id="related-item-price-onsale" style={{ textDecorationLine: 'line-through' }}>
              $
              {product.price}
              .99
            </div>

          </div>
        </li>
      );
    }
    return (
      <li key={product.product_id}>
        <img src={product.product_url} alt="a dog" />
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
        {resultList}
      </ul>
    </div>
  );
}

export default List;
