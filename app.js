const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')) //'static' is the folder name
app.use(express.urlencoded()) //help krta hai form ke data ko express tak laane ke liye ]

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the template engine as pug 
app.set('views',path.join(__dirname,'views'))  //dirname=directory name

//ENDPOINTS
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);
})





//START THE SERVER
app.listen(port,()=>{
    console.log(`the application started successfully ${port}`);

});