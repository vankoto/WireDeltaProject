

var displayCompanies = require('../models/companyModel');

module.exports = function(app){

    app.get('api/companies/', function(req, res){

          var initialCompanies = [
              {
                name: "BoatMakers",
                lat: "-3.7325",
                lng: "15.2324",
                userId: "5126bbf64aed4daf9e2ab771",
                logoImgUrl: "cdnSomething",
                cvr: "DK12345",
                isPaid: true,
                isEnabled: true,
                isVisible: true,
                createdAt: "2018-08-01T23:28:56.782Z",
                updatedAt: "2018-08-01T23:28:56.782Z"
              },
              {
                name: "EngineRepairs",
                lat: "-3.7325",
                lng: "15.2324",
                userId: "5b3b61933ae4d03a10334fa2",
                logoImgUrl: "cdnSomething",
                cvr: "DK12345",
                isPaid: true,
                isEnabled: true,
                isVisible: true,
                createdAt: "2018-08-01T23:28:56.782Z",
                updatedAt: "2018-08-01T23:28:56.782Z"
              }
          ];
          displayCompanies.create(initialCompanies, function(err, results){
              res.send(results);
          });
    });

}
