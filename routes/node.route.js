const express = require("express");
const nodeRouter = express.Router();
const nodeQuiz = require("../data/node.questions")



nodeRouter.route("/")
.get(function(req,res){
    res.json(nodeQuiz)
});


module.exports = nodeRouter