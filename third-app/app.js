
var fs= require('fs')
var http =require('http')






var server = http.createServer(function(req, res){
    console.log('request was made on: ' + req.url)
  
    if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.createReadStream(__dirname + '/iuea.html').pipe(res)
    }
    else if(req.url === '/contact-us'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }else if(req.url === '/aboutUs'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/about.html').pipe(res)
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
});

server.listen(4000, '127.0.0.1')
console.log('hey im listening on port 4000')








































//net ninja server
// var fs= require('fs')


// var server = http.createServer(function(req, res){
//     console.log(`request was made ${req.url}`)
//     res.writeHead(200, {'Content-type': 'text/html'}
//     res.end('hey yeah')
// })

// server.listen(8080, '127.0.0.1')
// console.log('yo dawgs, now listening to port 8080')



// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')





// myReadStream.on('data', function(chunk)
// {
//     console.log('new chunk received:')
//     myWriteStream.write(chunk);
// })


//streaming the short method
// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')


// myReadStream.pipe(myWriteStream)

//using pipe method to output text to the browser
// var server = http.createServer(function(req, res){
//     console.log('request was made on: ' + req.url)
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     var myReadStream = fs.createReadStream(__dirname + '/readme.txt' , 'utf8')
//     myReadStream.pipe(res)
// });

// server.listen(4000, '127.0.0.1')
// console.log('hey im listening on port 3000')



// routing urls to their respective pages......nice!
// var server = http.createServer(function(req, res){
//     console.log('request was made on: ' + req.url)
  
//     if(req.url === '/home' || req.url === '/'){
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     fs.createReadStream(__dirname + '/iuea.html').pipe(res)
//     }
//     else if(req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         fs.createReadStream(__dirname + '/contact.html').pipe(res)
//     }else if(req.url === '/about'){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         fs.createReadStream(__dirname + '/about.html).pipe(res)
//     }else{
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         fs.createReadStream(__dirname + '/404.html').pipe(res)
//     }
// });

// server.listen(4000, '127.0.0.1')
// console.log('hey im listening on port 4000')
