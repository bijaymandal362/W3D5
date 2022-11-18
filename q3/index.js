const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));

app.use('/css', express.static(path.join(__dirname,'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();

    const style = (hour >= 6 && hour < 18) ? 'day' : 'night';

    res.send(`
    <DOCTYPE html>
    <html lang="en">
        <head>
            <title>Express</title>
            <link rel="stylesheet" href="/css/${style}.css">
        </head>
        <body>
            <form action="/result" method="post">
                <label>Name</label>
                <input type="text" id="name" name="name">
                <label >Agee</label>
                <input type="number" id="age" name="age">
                <input type="submit" value="Submit Query">
            </form>
        </body>
    </html>
    `);
});

app.post('/result',(req,res)=>{

    const {name,age}= req.body;

    res.send(`Welcome ${name} ${age}`);

});

app.listen(3000, ()=>{
    console.log('App runing on 3000 port');
})