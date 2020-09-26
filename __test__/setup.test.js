/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div className="foo">Bar</div>)).toBe(false);
  });
});
