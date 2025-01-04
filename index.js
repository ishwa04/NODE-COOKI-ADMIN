const express = require("express")
const port = 8000
const db = require("./config/db")
const path = require("path")
const cookie = require("cookie-parser")

const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(cookie())
app.use("/",require("./routes/rout"));

app.use("/",express.static(path.join(__dirname,"public_1")));
app.use(express.static(path.join(__dirname,"public")));



app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at " + port);
})