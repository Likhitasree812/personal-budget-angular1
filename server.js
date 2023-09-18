const express = require('express');
const fileSystem = require('fs');
const app=express();
const port=3000;
const importJSON = fileSystem.readFileSync('data.json', 'utf8');
const budgetData = JSON.parse(importJSON);


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
}
);

app.get('/budget', (req, res) => {
    res.json(budgetData);
});

app.use('/',express.static('public'));