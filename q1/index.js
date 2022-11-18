const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let name = req.params.name;
    if(!name){
        name="person";
    }
    let age= req.params.age;
    if(!age){
        age=26;
    }
    res.send(`Welcome ${name} with the age ${age}`);
});

app.listen(3000);

module.exports = app;