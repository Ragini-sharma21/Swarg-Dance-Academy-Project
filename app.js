const express = require("express");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const port = 8000;
//Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone : String,
    email: String,
    address: String,
    desc: String

  });
  var Contact = mongoose.model('Contact', contactSchema);

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

app.post('/contact',(req,res)=>{
    var myData =new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the Database")
    }).catch(()=>{
        res.status(400).send("This item has been saved to the database")
    });
    // res.status(200).render('contact.pug');
})




//START THE SERVER
app.listen(port,()=>{
    console.log(`the application started successfully ${port}`);

});