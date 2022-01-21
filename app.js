const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    res.send('<h1>Hello!</h1>')
})

const Port = 1337;
app.listen(Port, ()=>{
    console.log("I am listening")
});