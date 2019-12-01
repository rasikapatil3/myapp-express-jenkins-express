var express = require("express")
var routerProduct = require("./routes/product")
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.get("/",(request,response)=>{
    response.send("Welcome to backend...");
})
app.use("/product",routerProduct)

app.listen(9898,()=>{
    console.log("server started on 9898 ...")
})