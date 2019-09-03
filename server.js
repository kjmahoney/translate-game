require('babel-polyfill');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 9000;

const translate = require('translate-utils');

app.use('/dist', express.static(path.join(__dirname, 'dist')))

// router.get('/api', async (req, res) => {
//     const 
//     res.json({a : 1});
// })

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.use('/', router)
app.listen(process.env.port || port)

console.log(`App running at port ${port}`);