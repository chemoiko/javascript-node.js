var express = require('express')
var app = express();


app.get('/', function(req, res){   //u don't need to tell express the type of file it's sending. it's smart like that
    res.send('this is the homepage')
})

app.get('/contact', function(req, res){  //once a contact url request is received, fire the function
    res.send('this is the contact page')
})


app.listen(3000);