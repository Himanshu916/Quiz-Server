const express = require("express");
const javascriptRouter = express.Router();
const javascriptQuiz = require("../data/javascript.questions")



javascriptRouter.route("/")
.get(function(req,res){
    res.json(javascriptQuiz)
});


module.exports = javascriptRouter