const express = require('express')
const path = require('path')
require('./db/conn')
const app = express();

const port = process.env.PORT || 3000;

// setting the path
const staticPath = path.join(__dirname, '../public')
console.log(path.join(__dirname, '../public'))
//middlewares
//we are telling that we are using that static path in our express
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use(express.static(staticPath)) 

app.set("view engine", "hbs")


//routing
//app.get(path, callback)
app.get("/", (req,res) => {
    res.render("index")
})

app.get("/contact", (req,res) => {
    res.render("contact")
})



//server creation

app.listen(port, () => {
    console.log("Server Running")
})