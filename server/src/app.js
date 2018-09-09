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
/*
app.post('/register', (req, res, next) => {
    knex('herois').then((dados) => {
        res.send(dados);
    }, next)
});*/


app.listen(process.env.PORT || 8081);

/*
const server = restify.createServer ({
    name: 'myapp',
    version: '1.0.0'
});

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'ezdevprojeto'
    }
  });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(bodyParser.json());
server.use(restify.plugins.bodyParser());
server.use(cors());
server.use(morgan('combined'));

server.listen(8081, function () {
    console.log('%s listening at %s', server.name, server.url);
});


//rotas REST


server.get('/',  (req, res, next) => {


    knex('herois').then((dados) => {
        res.send(dados);
    }, next)


});


server.post('/register',  (req, res, next) => {


    knex('herois')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next)


});


server.get('/show/:id',  (req, res, next) => {

    const { id } = req.params;

    knex('herois')
        .where('id', id)
        .first()
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
            res.send(dados);
        }, next)


});


 
server.put('/update/:id',  (req, res, next) => {

    const { id } = req.params;

    knex('herois')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
            res.send('dados atualizados');
        }, next)


});


server.del('/delete/:id',  (req, res, next) => {

    const { id } = req.params;

    knex('herois')
        .where('id', id)
        .delete()
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
            res.send('dados deletados');
        }, next)


});
*/