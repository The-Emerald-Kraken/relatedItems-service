const faker = require('faker');
const db = require('./index.js');
const Item = require('./Item.js');

const data = [
  {
    product_id: 1,
    manufacturer: 'prAna',
    Item_name: 'cool shirt',
    rating: 4.0,
    number_of_ratings: 77,
    price: 199.99,
    onSalePrice: 199.83,
    product_image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FT-shirt&psig=AOvVaw2V-iLUzcNsVM2mcj5rIzPH&ust=1601053369158000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiVqtyiguwCFQAAAAAdAAAAABAF', // url for product image
    onSale: false,
  },
  {
    product_id: 2,
    manufacturer: 'prAna',
    Item_name: 'another cool shirt',
    rating: 2.5,
    number_of_ratings: 2,
    price: 99.99,
    onSalePrice: 89.83,
    product_image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FT-shirt&psig=AOvVaw2V-iLUzcNsVM2mcj5rIzPH&ust=1601053369158000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiVqtyiguwCFQAAAAAdAAAAABAF', // url for product image
    onSale: false,
  },
];

// create a function that makes 100 related item objects
/*
I- number
O- an array of n objects (where an obj is a set of data)
C-
E-
*/

const generateRandomClothingItems = (input = 100) => {
  const arrayOfOnSale = [true, false];

  const result = [];

  const arrayCreator = () => {
    let newInput = input;
    while (newInput >= 0) {
      const obj = {
        product_id: newInput,
        manufacturer: faker.company.companyName(),
        item_name: faker.commerce.productName(),
        rating: Math.random() * 5,
        number_of_ratings: Math.floor(Math.random() * 500),
        price: faker.commerce.price(),
        onSalePrice: null,
        product_url: null,
        onSale: arrayOfOnSale[Math.floor(Math.random())],
      };
      obj.onSalePrice = Math.floor(obj.price * 0.85) - 0.16;

      result.push(obj);
      newInput -= 1;
    }
  };

  arrayCreator();

  return result;
};

const insertProducts = async (products) => {
  const result = await products();
  Item.create(result)
    .then(() => {
      db.close();
    })
  // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
};

// insertProducts(data);

insertProducts(generateRandomClothingItems);
