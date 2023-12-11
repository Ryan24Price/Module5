const express = require('express');

const app1 = express();
const app2 = express();

const port1 = 3000;
const port2 = 5000;

app1.get('/', (req, res) => {
 res.send('Hello World From Express on Port 3000!');
});

app1.get('/test', (req, res) => {
    res.send('This is a test on Port 3000.');
});

app1.listen(port1, () => {
 console.log(`Example app listening at http://localhost:${port1}`);
});


app2.get('/', (req, res) => {
    res.send('Hello World From Express on Port 5000!');
   });
   
   app2.get('/test', (req, res) => {
       res.send('This is a test on Port 5000.');
   });
   
   app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`);
   });


