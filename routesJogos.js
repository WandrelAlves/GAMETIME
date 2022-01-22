var express = require('express');
var router = express.Router();

var handler = { root: __dirname };

router.get('/', function(req, res) {
    res.redirect('/retro');
})

// Rota Jogos Retro
router.get('/retro', function(req, res) {
    res.sendFile('./JogosRetro.html', handler);
});

// Rota Jogos Terror
router.get('/terror', function(req, res) {
    res.sendFile('./JogosTerror.html', handler);
});

// Rota Jogos Mobile
router.get('/mobile', function(req, res) {
    res.sendFile('./JogosMobile.html', handler);
});

// Rota Jogos Ação
router.get('/acao', function(req, res) {
    res.sendFile('./JogosAcao.html', handler);
});

// Rota Jogos fps
router.get('/fps', function(req, res) {
    res.sendFile('./fps.html', handler);
});


module.exports = router;