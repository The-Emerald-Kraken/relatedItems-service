const mongoose = require('mongoose');

const RelatedItemSchema = new mongoose.Schema({
    product_id: Number,           //0-100
    Item_name: String,            //
    rating: Number,               //0-5 floating point
    number_of_ratings: Number,    //0-519 
    price: Number,                //
    onSalePrice: Number,          // number that end in .83
    product_url: String,          // url for product image
    onSale: Boolean,              //is the item on sale T or F
});

const Item = mongoose.model('Item', RelatedItemSchema);

module.exports = Item;