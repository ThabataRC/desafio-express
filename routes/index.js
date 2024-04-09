const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

router.get('/', function (req, res, next) {
  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Express1535@',
    database: 'desafio-express',
    port: 3306,
  }).then((connection) => {
    connection.query('SELECT * FROM clientes;')
        .then((result) => {
          res.send(result[0]);
        });
  });

  router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express'});
  });
});
module.exports = router;


router.get('/', function (req, res, next) {
  mysql.createConnection({
    host: 'localhost',
    user: 'express-08-09',
    password: 'ghs1535',
    database: 'express-08-09',
    port: 3306,
  })
      .then((connection) => {
        connection.query('SELECT * FROM produtos;')
            .then((result) => {
              if (result[0].length === 0) {
                // Nenhum produto encontrado
                res.send('Nenhum produto encontrado no banco de dados.');
              } else {
                res.send(result[0]);
              }
            })
            .catch((error) => {
              console.error('Erro ao buscar produtos:', error);
              res.status(500).send('Erro Interno no Servidor');
            });
      })
      .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error);
        res.status(500).send('Erro Interno no Servidor');
      });
});

router.get('/index', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

module.exports = router;

