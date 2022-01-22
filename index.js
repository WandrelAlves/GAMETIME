const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const routesJogos = require('./routesJogos');

app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));
app.use('/audio', express.static('audio'));

app.use('/', routes);
app.use('/jogos', routesJogos);

app.use('/error', (req, res) => {
    res.sendFile('./error.html', { root: __dirname });
})

app.use((error, req, res, next) => {
    console.log("Error Handling Middleware called");
    console.log('Path: ', req.path);
    console.error('Error: ', error);

    if (error.type == 'time-out')
        res.status(408).redirect('/error');
    else
        res.status(500).redirect('/error');
})

app.get('*', function(req, res) {
    res.status(404).redirect('/error');
});

app.listen(process.env.PORT || port,
    () => console.log("Server is running..."));