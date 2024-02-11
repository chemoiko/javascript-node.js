var fs=require('fs')


fs.readFile('readme.txt', function(err, data){
    res.write(data)
})