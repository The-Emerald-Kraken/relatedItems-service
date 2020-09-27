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
    return (
      <div>
        <List list={productList} />
      </div>
    );
  }
}

export default App;
