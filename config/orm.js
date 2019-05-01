var connection = require("./connection.js");

var orm = {
  selectAll: function( table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      cb(result)
    });
  },

  insertOne: function(table, colOne, colTwo, valOfColOne, valOfColTwo, cb) {
    var queryString = "insert into ?? (??, ??) values(?, ?)";
    connection.query(queryString, [table, colOne, colTwo, valOfColOne, valOfColTwo], function(err, result){
        if (err) throw err;
        cb(result);
    })
  },

  updateOne: function(table, colToUpdate, updateValue, whereColumn, whereValue, cb ) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, colToUpdate, updateValue, whereColumn, whereValue], function(err, result){
        if (err) throw err;
        cb(result);
    })
  }
};

module.exports = orm;
