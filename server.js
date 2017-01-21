const express = require('express');
const path    = require('path');
const app     = module.exports = express();


app.use(express.static(path.resolve(__dirname, 'www')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'www/index.html'));
});

app.listen(8080, () => console.log('Server listening...'));
