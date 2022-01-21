const express = require('express');
const morgan = require('morgan');
const path = require('path');
const layout = require('./views/layout')
const {db} = require("./models")
const wikiRouter = require('./routes/wiki.js')
const usersRouter = require('./routes/users.js')


const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/stylesheets")));/* directory/stylesheets */
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);
app.use('/users', usersRouter);

app.get("/", (req, res)=>{
    res.redirect('/wiki');
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
