const express=require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const javascriptRouter = require("./routes/javascript.route");
const reactRouter = require("./routes/react.route");
const nodeRouter = require("./routes/node.route")
const htmlRouter = require("./routes/html.route")


const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get("/",(req,res)=>
{
    res.send({success:"true"})
})

app.use("/javascript-quiz",javascriptRouter);
app.use("/react-quiz",reactRouter)
app.use("/node-quiz",nodeRouter)
app.use("/html-quiz",htmlRouter)







app.use((req, res) => {
    res.status(404).json({ success: false, message: "route not found on server, please check"})
  })
  
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "error occured, see the errMessage key for more details", errorMessage: err.message})
  })

app.listen(process.env.PORT||5000,()=>
{
    console.log("server started")
})