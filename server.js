const express = require('express');

const app = express();

app.get('/', (rep, res) => ('Hello world with express'))

app.listen(3000);
console.log('server on port 3000')