// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  tableName: "burger",
  all: function(cb) {
    orm.all(this.tableName, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create(this.tableName, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update(this.tableName, objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
