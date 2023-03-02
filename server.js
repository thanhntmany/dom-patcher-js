'use strict';
const express = require('express');


const port = 3000;
const app = express();


// app.get('/', (req, res, next) => {
//     res.send('List API')
// })


// static layer
app.use(require('./controller/static-layer/controller'));


app.listen(port, () => {
    console.log(`\n`)
    console.log(`App listening on port ${port}`)
    console.log(`-> http://localhost:${port}`)
});

console.log(process.env.NODE_ENV)