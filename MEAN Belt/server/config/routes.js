var pets = require('../controllers/pets')
var path    = require('path');


module.exports = function(app) {
  app.get('/pet', pets.pet);
  app.get('/pet/:id/edit',pets.getPet)
  app.post('/pet/:id/edit',pets.edit)
  app.post('/pet/add',pets.add)
  app.get('/pet/delete/:id',pets.delete)
  // app.get('/pet/like/:id',pets.like)
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}