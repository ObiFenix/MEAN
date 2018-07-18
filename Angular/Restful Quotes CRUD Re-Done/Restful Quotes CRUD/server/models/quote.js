var mongoose = require('mongoose');

var QuotesShema = new mongoose.Schema({
  name: {type: String},
  quote: {type: String}
 },{timestamps: true})

var Quote = mongoose.model('Quote', QuotesShema);
module.exports = Quote;

