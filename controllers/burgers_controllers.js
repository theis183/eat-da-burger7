var express = require("express")
var router = express.Router()

var burger = require("../models/burger")

router.get("/", function(req, res){

    burger.allBurgers(function(data){

        hbsObj = {burgers: data}
        res.render("index", hbsObj)
    })
})

router.post("/api/burger", function(req, res){

    burger.addBurger(req.body.burgerName, false, function(data){
        res.json({id: data.insertId})
    })
})

router.put("/api/burger/:id", function(req, res){
    burger.devourBurger(req.params.id, function(data){
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
      
    })
})

module.exports = router
