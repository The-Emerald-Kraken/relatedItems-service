/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import App from '../client/src/components/App.jsx';
import List from '../client/src/components/List.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div id="list-container">Bar</div>)).toBe(false);
  });
});

describe('List component', () => {
  it('should render items', () => {
    const productList = [{
      product_id: 100,
      manufacturer: 'Morar Group',
      item_name: 'Tasty Cotton Chips',
      rating: 0.753092278577937,
      number_of_ratings: 496,
      price: 267,
      onSalePrice: 225.84,
      product_url: 'https://fecimagesghrsea12.s3-us-west-1.amazonaws.com/pics/image100.jpg',
      onSale: true,
      __v: 0,
    },
    {
      product_id: 90,
      manufacturer: 'Gusikowski, Kohler and Pacocha',
      item_name: 'Intelligent Plastic Shoes',
      rating: 3.655240113863547,
      number_of_ratings: 345,
      price: 925,
      onSalePrice: 785.84,
      product_url: 'https://fecimagesghrsea12.s3-us-west-1.amazonaws.com/pics/image90.jpg',
      onSale: true,
      __v: 0,
    },
    {
      product_id: 89,
      manufacturer: 'Gleason, Pacocha and Hyatt',
      item_name: 'Fantastic Metal Towels',
      rating: 4.510381807800804,
      number_of_ratings: 0,
      price: 324,
      onSalePrice: 274.84,
      product_url: 'https://fecimagesghrsea12.s3-us-west-1.amazonaws.com/pics/image89.jpg',
      onSale: true,
      __v: 0,
    }];
    const wrapper = shallow(<List list={productList} />);
    expect(wrapper.text()).toContain('Morar Group');
    expect(wrapper.text()).toContain('Tasty Cotton Chips');
    expect(wrapper.text()).toContain('267');
  });
});
