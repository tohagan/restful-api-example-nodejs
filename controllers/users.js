var users = require(__dirname + '/../config/models').users;

exports.list = function(req, res){
  users.findAll().success(function(users) {
    res.jsonp(users);
  });
};

exports.show = function(req, res){
  users.find({ where: { id: req.params.id }}).success(function(user) {
    res.jsonp(user);
  })
};

exports.create = function(req, res) {
  users.create({
    username: req.body.username,
    realname: req.body.realname,
    email: req.body.email
  }).success(function(user) {
    res.jsonp(201, user);
  }).error(function(errors) {
    res.jsonp(400, { error: errors.message});
  });
};
