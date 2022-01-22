var express = require('express');
var router = express.Router();

var handler = { root: __dirname };

// Rota Pagina inicial
router.get('/', function(req, res) {
    res.sendFile('./index.html', handler);
});

// Rota Mundo E-Sports
router.get('/esports', function(req, res) {
    res.sendFile('./mundoE-sports.html', handler);
});

// Rota Sobre nos
router.get('/sobrenos', function(req, res) {
    res.sendFile('./sobreNos.html', handler)
});

module.exports = router;