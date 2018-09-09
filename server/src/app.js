const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'ezdevprojeto'
    }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/',  (req, res, next) => {
    knex('herois').then((dados) => {
        res.send(dados);
    }, next)
});

app.post('/register', (req, res, next) => {
    knex('herois')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next)
});


app.listen(process.env.PORT || 8081);
