var products  = require('../controllers/products')
var path    = require('path');

module.exports = function(app) {
  app.get('/products', products.products);
  app.get('/products/edit/:id',products.product)
  app.post('/products/edit/:id',products.edit)
  app.post('/products/add',products.add)
  app.get('/products/delete/:id',products.delete)
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}