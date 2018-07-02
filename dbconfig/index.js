//I am just creating a string which will help me connect to the database.
//It could have been better and more secure, but just for the sake of the exercise.

var username = "ivanwiredelta";
var password = "wiredelta03";

module.exports = {
  getDbConnectionString: function(){
    return 'mongodb://' + username + ':' + password + '@ds125211.mlab.com:25211/nodejswiredelta';
  }
}
