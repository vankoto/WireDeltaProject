///I am setting up a user controller for some data which will
//allow me to add fake data to the Mongo database with the help of mongoose.

var displayUsers = require('../models/userModel');

module.exports = function(app){

    app.get('/api/users', function(req, res){

        var initialUsers = [
            {
              active: true,
              profilePic: "JohnPic",
              name: "John",
              email: "JohnW@gmail.com",
              password: "12345ABC",
              phoneNumber: "22 23 55 33",
              address: "Vestergade 1",
              zipCode: "2300",
              city: "Copenhagen",
              createdAt: "2018-08-01T23:28:56.782Z",
              updatedAt: "2018-08-01T23:28:56.782Z"
            },
            {
              active: true,
              profilePic: "SamPic",
              name: "Sam",
              email: "Sammy@gmail.com",
              password: "12345ABC",
              phoneNumber: "33 33 55 23",
              address: "Vestergade 5",
              zipCode: "2300",
              city: "Copenhagen",
              createdAt: "2018-08-01T23:28:56.782Z",
              updatedAt: "2018-08-01T23:28:56.782Z"
            },
            {
              active: false,
              profilePic: "SarahPic",
              name: "Sarah",
              email: "SaraHH@gmail.com",
              password: "12345ABC",
              phoneNumber: "55 21 43 27",
              address: "Vestergade 10",
              zipCode: "8000",
              city: "Aarhus",
              createdAt: "2018-08-01T23:28:56.782Z",
              updatedAt: "2018-08-01T23:28:56.782Z"
            },
            {
              active: false,
              profilePic: "MarioPic",
              name: "Mario",
              email: "MarioOo@gmail.com",
              password: "12345ABC",
              phoneNumber: "43 31 13 27",
              address: "Vestergade 18",
              zipCode: "9000",
              city: "Aalborg",
              createdAt: "2018-08-01T23:28:56.782Z",
              updatedAt: "2018-08-01T23:28:56.782Z"
            }
        ];
        displayUsers.create(initialUsers, function(err, results){
            res.send(results);
        });
    });
}
