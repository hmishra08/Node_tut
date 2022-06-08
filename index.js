const express = require('express');
const app = express();
const path = require('path');
const filter = require('./middleware');
const route = express.Router();

route.use(filter);

const assetsPath = path.join(__dirname, 'assets');
console.log(assetsPath);

//----api with middleware
route.get('', (req,res)=>{
    res.sendFile(`${assetsPath}/home.html`);
})

//----api without middleware
app.get('/about', (req,res)=>{
    res.sendFile(`${assetsPath}/about.html`);
})


app.use('/', route);
app.listen(8000);