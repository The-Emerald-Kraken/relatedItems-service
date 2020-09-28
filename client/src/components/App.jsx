/* eslint-disable import/extensions */
/* eslint-disable no-console */
import axios from 'axios';
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';

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
      <div>
        {toRender}
      </div>
    );
  }
}

export default App;
