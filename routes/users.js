const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send("retrieve all wiki pages")
})

router.post('/', async (req, res) => {
    res.send('submit new page to the database')
})

router.get('/add', async (req, res) => {
    res.send("retrieve the 'add a page' form")
})


module.exports = router;