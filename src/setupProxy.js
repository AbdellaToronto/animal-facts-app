const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('api', { target: 'https://cat-fact.herokuapp.com' }));
  app.use(proxy('api', { target: 'https://api.pexels.com' }));
}