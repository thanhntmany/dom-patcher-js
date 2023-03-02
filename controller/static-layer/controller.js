'use strict';
const express = require('express');
const { join } = require('path')


const rootDir = join(__dirname, 'public', 'www');

const app = express();

// #TODO: Add in-memory cache feature for this. E.g: node-cache...
// Static website
app.use(express.static(rootDir));

// Last routing: 404 not found
app.use(function (req, res, next) {
    res.status(404);

    res.format({
        html: function () {
            res.sendFile(join(rootDir, '404.html'))
        },
        json: function () {
            res.json({ error: 'Not found' })
        },
        default: function () {
            res.type('txt').send('Not found')
        }
    })
});


module.exports = exports = app;
