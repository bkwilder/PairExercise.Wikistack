const express = require('express');
const morgan = require('morgan');
const path = require('path');
const layout = require('./view/layout')
const {db} = require("./models")


const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    res.send(layout('hello'))
})

db.authenticate().then(()=>{
    console.log('connected to the database')
})




const Port = 1337;

const start = async() =>{
    await db.sync({force: true});
    app.listen(Port, ()=>{
        console.log("I am listening")
    });
}

start()
