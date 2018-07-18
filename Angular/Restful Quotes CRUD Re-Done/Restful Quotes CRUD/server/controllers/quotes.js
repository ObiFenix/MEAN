var Quote = require('../models/quote')

module.exports = {
  quotes: function(req,res) {
    Quote.find({}, function(err, quotes){
      if(err){
        res.json({error: err})
      }
      else {
        res.json({message: "Success", quotes: quotes})
      }
   })
  },
  new: function(req,res) {
    let newQuote = new Quote({name:req.body.name,quote: req.body.quote})
    newQuote.save((err)=>{
      if(err){
        res.json({error: err})
      }
      else{
        res.json({message: "Success"})
      }
    })
  },
  delete: function(req,res) {
    Quote.deleteOne({_id:req.body.id},(err)=>{
      if(err){
        res.json({error: err})
      }
      else{
      res.json({message: "Deleted Record"})
      }
    })
  },
  quote_info: function(req,res) {
    Quote.findById({_id:req.body.id},(err, quote_info)=>{
      if(err){
        res.json({message: "Error", error: err})
      }
      else {
        res.json(quote_info)
      }
   })
  },
  update: function(req,res) {
    Quote.findById({_id:req.body._id},(err, quote)=>{
      if(err){
        res.json({error: err})
      }
      else {        
        quote.quote = req.body.quote;
        quote.name = req.body.name;
        quote.save((err)=>{
          if(err){
            res.json({error: err})
          }
          else{
            res.json({message: "Success"})
          }
        })
      }
   })
  }
}