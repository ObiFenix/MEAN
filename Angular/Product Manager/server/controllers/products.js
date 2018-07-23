var Product = require('../models/product')


module.exports = {
  products: function(req,res) {
    Product.find({}, function(err, products){
      if(err){
        res.json({error: err})
      }
      else {
        res.json({products})
      }
   })
  },
  product: function(req,res) {
    Product.findById({_id:req.params.id},(err, product)=>{
      if(err){
        res.json({message: "Error", error: err})
      }
      else {
        res.json(product)
      }
   })
  },
  edit: function(req,res) {
    Product.findById({_id:req.params.id},(err, product)=>{
      if(err){
        res.json({error: err})
      }
      else {        
        product.title = req.body.title;
        product.price = req.body.price;
        product.imageURL = req.body.imageURL;
        product.save((err)=>{
          if(err){
            res.json({error: err})
          }
          else{
            res.json({_id: product._id})
          }
        })
      }
   })
  },
  add: function(req,res) {
    let newProduct = new Product({title:req.body.title,price: req.body.price, imageURL: req.body.imageURL})
    newProduct.save((err,data)=>{
      if(err){
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
        }
        res.json({error: err})
      }
      else{
        res.json({message: "Success"})
      }
    })
  },
  delete: function(req,res) {
    Product.findByIdAndRemove({_id:req.params.id},(err)=>{
      if(err){
        res.json({error: err})
      }
      else{
      res.json({message: "Deleted Record"})
      }
    })
  }
}