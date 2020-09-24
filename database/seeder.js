const db = require("./index.js");
const Item = require('./Item.js');

const data = [
    {
        product_id: 1,
        Item_name: "cool shirt",
        rating: 4.0,
        number_of_ratings: 77,
        price: 199.99,
        onSalePrice: 199.83,
        product_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FT-shirt&psig=AOvVaw2V-iLUzcNsVM2mcj5rIzPH&ust=1601053369158000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiVqtyiguwCFQAAAAAdAAAAABAF',          // url for product image
        onSale: false,
    },
    {
        product_id: 2,
        Item_name: "another cool shirt",
        rating: 2.5,
        number_of_ratings: 2,
        price: 99.99,
        onSalePrice: 89.83,
        product_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FT-shirt&psig=AOvVaw2V-iLUzcNsVM2mcj5rIzPH&ust=1601053369158000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiVqtyiguwCFQAAAAAdAAAAABAF',          // url for product image
        onSale: false,
    },
];

const insertDummyProducts = () => {
    Item.create(data)
      //   .then( () => { console.log(data)})
      .then(() => db.close())
      .catch( (err) => console.log(err))
};

insertDummyProducts();