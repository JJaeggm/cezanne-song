const express = require('express');

const app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
    res.end('Hello Root Page!!!')
});

app.get('/user', (req, res) => {
    res.end('Hello User Page!!!')
});


app.listen(app.get('port'),() => {
    console.log('Express server Listening on port' + app.get('port'));
})