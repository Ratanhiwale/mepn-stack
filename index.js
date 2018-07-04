const express = require('express');
const app = express();
const PORT=80;


//For connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://ratan:619619_Key@ds127841.mlab.com:27841/qcom');
let db = mongoose.connection;
db.on('error',function(err){
    console.log(err);
})
db.once('open',function(){
    console.log('ok');
})


app.set('view engine','pug');

//For page calling
app.get('/',function(req,res){
    res.render('pages/index');
})



//For starting server
app.listen(PORT);