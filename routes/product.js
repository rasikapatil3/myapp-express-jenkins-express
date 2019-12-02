var express = require("express")
var mysql = require("mysql")

var routerProduct=express();

var connection = mysql.createConnection({
    host:"172.18.4.241",
    user:"root",
    password:"root",
    database:"myapp_db",
    port:9099
})
connection.connect()

routerProduct.get("/",(request,response)=>{
    queryText="select * from product";
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result))
        }
        else
        {
            response.send(JSON.stringify(err.message))
        }
    })
})
routerProduct.post("/",(request,response)=>{
    const {title,description,price}=request.body
    queryText=`insert into product(title,description,price) values('${title}','${description}',${price})`;
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result))
        }
        else
        {
            response.send(JSON.stringify(err.message))
        }
    })
})

module.exports=routerProduct;