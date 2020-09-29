/* eslint-disable import/extensions */
/* eslint-disable no-console */
import axios from 'axios';
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import List from './List.jsx';

const Wrapper = styled.section`
    font-size: 16px;
`;
const BorderBox = styled.div`
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
    max-height: 500px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
    this.getProductList = this.getProductList.bind(this);
  }

  componentDidMount() {
    this.getProductList();
  }

  getProductList() {
    axios({
      method: 'get',
      url: '/api/products/:id/relatedItems',
    })
      .then((data) => { this.setState({ productList: data.data }); })
      .catch((err) => { console.log(err); });
  }

  render() {
    const { productList } = this.state;
    let toRender = null;
    if (productList.length === 0) {
      toRender = <div>LOADING</div>;
    } else {
      toRender = <List list={productList} />;
    }
    return (
      <Wrapper>
        <div id="related-item">
          <h1 id="related-item-header"> Top picks for you </h1>
          <BorderBox>
            <div>
              {toRender}
            </div>
          </BorderBox>

        </div>
      </Wrapper>
    );
  }
}

export default App;
