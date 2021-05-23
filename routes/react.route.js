const express = require("express");
const reactRouter = express.Router();
const reactQuiz = require("../data/react.questions")



reactRouter.route("/")
.get(function(req,res){
    res.json(reactQuiz)
});


module.exports = reactRouter