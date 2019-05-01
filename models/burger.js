var orm = require("../config/orm")

var burgers = {

    addBurger: function (burgerName, devoured, cb){
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, devoured, function(res){
            cb(res)
        })
    },

    devourBurger: function(burgerId, cb){
        orm.updateOne("burgers", "devoured", true, "id", parseInt(burgerId), function(res){
            cb(res)
        })
    },

    allBurgers: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    }
}

module.exports = burgers