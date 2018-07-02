//I am just creating a string which will help me connect to the database.
//It could have been better and more secure, but just for the sake of the exercise.

module.exports = {
  var username = "ivanwiredelta";
  var password = "wiredelta03";

  getDbConnectionString: function(){
    return 'mongodb://' + username + ':' + password + '@ds125211.mlab.com:25211/nodejswiredelta';
  }
}
