import React from 'react';

function List(props) {
  console.log(props.list[0]);
  return (
    <div id="list-container">
      <ul>
        <li>
          <div id="related-item-image"> image</div>
          <div id="related-item-manufacturer"> manufacturer</div>
          <div id="related-item-product-name"> name</div>
          <div id="related-item-rating"> 3.5</div>
          <div id="related-item-number-of-ratings">`(72)`</div>
          <div id="related-item-price">$199.99</div>
        </li>
      </ul>
    </div>
  );
}

export default List;
