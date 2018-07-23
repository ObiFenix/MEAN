var mongoose = require('mongoose');

var ProductsShema = new mongoose.Schema({
  title: {type: String, minlength:4, required:true, trim:true},
  price: {type: Number, required:true, trim:true},
  imageURL: {type: String, trim:true}
 },{timestamps: true})

var Product = mongoose.model('Product', ProductsShema);
module.exports = Product;

