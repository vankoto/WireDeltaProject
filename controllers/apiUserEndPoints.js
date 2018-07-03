var Users = require('../models/userModel');
var bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/users', function(req, res){
      Users.find(function(err, users){
        if(err) throw err;
        res.send(users);
      });
    });

    app.get('/api/users/:uname', function(req, res){
       Users.find({ name: req.params.uname },
         function(err, users){
           if(err) throw err;
           res.send(users);
       });
    });

    app.get('/api/user/:id', function(req, res){
        Users.findById({ _id: req.params.id }, function(err, user){
          if(err) throw err;
          res.send(user);
        });
    });

    app.post('/api/user', function(req, res){
        if(req.body.id){
          Users.findByIdAndUpdate(req.body.id, {
            active: req.body.active,
            profilePic: req.body.profilePic,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            zipCode: req.body.zipCode,
            city: req.body.city,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
          }, function(err, user){
            if(err) throw err;
            res.send('User Updated!');
          });
        }else{
            var newUser = Users({
              active: req.body.active,
              profilePic: req.body.profilePic,
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              phoneNumber: req.body.phoneNumber,
              address: req.body.address,
              zipCode: req.body.zipCode,
              city: req.body.city,
              createdAt: req.body.createdAt,
              updatedAt: req.body.updatedAt
            });
            newUser.save(function(err){
              res.send('New User Created!');
            });
        }
    });

    app.delete('/api/user', function(req, res){
      Users.findByIdAndRemove(req.body.id, function(err){
        if(err) throw err;
        res.send('Success - User Deleted');
      });
    });
}
