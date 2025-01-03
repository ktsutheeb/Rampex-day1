//schema -structure of mongodb

var mdb = require("mongoose");
var userSchema = mdb.Schema({
  firstName: String,
  lastName: String,
  id: Number,
});


var user_schema = mdb.model("users", userSchema); //model going to be stored in mongodb   *users is the test collection name in mongodb

module.exports = user_schema;
