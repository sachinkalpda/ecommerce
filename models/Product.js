
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    sku : {
        type : String,
        required : true,
        unique : true,
    },
    price : {
        type : Number,
        required : true,
    },
    mrp : {
        type : Number,
        required : true,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : true,
    },
    status : {
        type : Number,
        required : true,
    }
},{
    timeStamps : true,
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;