module.exports = function(app) {

  var controller = app.controllers.home;

  app.get('/index', function(req, res) {
    res.json({'teste': '123'})
  });
  app.get('/', controller.index);
};
