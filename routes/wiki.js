const express = require('express');
const addPage = require('../views/addPage')
const router = express.Router();
const path = require('path');
const { Page, db } = require('../models');



//router.use(express.static(path.join(__dirname, "stylesheets")));

router.get('/', async (req, res) => {
    res.send("retrieve all wiki pages")
})

router.post('/', async (req, res, next) => {
    const name = req.body.name;
    const title = req.body.title;
    const content = req.body.content;


    try{
        const page = await Page.create({
            title: title,
            content: content,
        })

    } catch(errors){
        console.log(errors);
    }
    db.save();
    res.redirect('/');
})

router.get('/add', async (req, res) => {
    res.send(addPage())
})


module.exports = router;