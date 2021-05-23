const express = require("express");
const htmlRouter = express.Router();
const htmlQuiz = require("../data/html.questions")



htmlRouter.route("/")
.get(function(req,res){
    res.json(htmlQuiz)
});


module.exports = htmlRouter