/* eslint-disable react/prop-types */
import React from 'react';

function List(props) {
  const { list } = props;
  const resultList = list.map((product) => (
    <li key={product.product_id}>
      <div id="related-item-image" src={product.product_url}>
        {product.product_url}
      </div>
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
  ));

  return (
    <div id="list-container">
      <ul>
        {resultList}
      </ul>
    </div>
  );
}

export default List;
