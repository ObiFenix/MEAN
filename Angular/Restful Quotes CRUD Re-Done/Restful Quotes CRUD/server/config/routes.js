var quotes = require('../controllers/quotes')

module.exports = function(app) {
  app.get('/quotes', quotes.quotes);
  app.post('/new', quotes.new);
  app.post('/delete', quotes.delete);
  app.post('/quote_info', quotes.quote_info);
  app.post('/update', quotes.update);
}