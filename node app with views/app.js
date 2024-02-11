//template engines
//by default the app will look in views folder when views are requested by the client
 var express = require('express')

 var app = express()


 app.set('view engine', 'ejs') //this is setting ejs as the view engine
app.use('/assets', express.static('assets'));

//this grabs the url after /assets i.e /assets/contact .here contact is grabbed







 app.get('/'  , function(req, res){
     console.log('request was made on' + req.url)
     res.render('home')
    })
    app.get('/contact', function(req, res)
    {
        //code between the request and the response is called middleware
        res.render('contact')
    })
    
    app.get('/about', function(req, res)
    {
        res.render('about')
    })
    
    app.get('/profile/:name', function(req, res)
    {
        var info = {age: 29, sex: 'male'}
        res.render('profile', {person: req.params.name, data: info})  //this is passing data to a view //here an object is used to store the value of the name input in url and the the value is sent to profile.ejs in views folder
        //info object is stored in data and passed to the profile.ejs 
    })



    app.listen(3000)
//this means write the contents of myreadstream to the response. 
//this shortens the writing of stream to one line