var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){

    if(req.url=="/"){

        var data=fs.readFileSync('home.html','UTF-8');
        res.end(data);
    }
    else if(req.url=="/About"){

        var data=fs.readFileSync('about.html','UTF-8');
        res.end(data);
    }
    else if(req.url=="/Contact"){

        var data=fs.readFileSync('contact.html','UTF-8');
        res.end(data);
    }
    else if(req.url=="/Protfolio"){
        
        var data=fs.readFileSync('protfolio.html','UTF-8');
        res.end(data);
    }
})


server.listen(9090);
console.log("Server run success");
