const express = require('express');
const app = express();

const cors = require('cors');

// Middleware  
app.use(cors());
app.use(express.json());

app.get(
    '/',
    (req, res) => res.send("Hello World!")
);

app.post(
    '/api',
    (req, res) => {

        console.log('req.body:', req.body);

        const fruit = req.body['fruit']; 

        res.send(JSON.stringify({
            poem: `${fruit}s are great!`
        }));
    }
)

module.exports = app;