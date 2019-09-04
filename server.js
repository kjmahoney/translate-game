require('babel-polyfill');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 9000;

app.use('/dist', express.static(path.join(__dirname, 'dist')))

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.use('/', router)
app.listen(process.env.port || port)

console.log(`App running at port ${port}`);