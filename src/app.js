const express = require('express')
require('./db/conn')
const app = express();

const port = process.env.PORT || 3000;

//routing
//app.get(path, callback)
app.get("/", (req,res) => {
    res.send("Hello World")
})



//server creation

app.listen(port, () => {
    console.log("Server Running")
})