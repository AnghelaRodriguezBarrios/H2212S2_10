const express = require('express');

const app = express();

app.get('/', (rep, res) => ('<h1>Express or wordt </h1>'))

app.listen(3000);
console.log('server on port 3000')