const http = require('http');
const fs = require('fs');
const { page, getPage } = require('./modules/pages')

const port = process.env.port || 8081

console.log( `server running on: http://localhost:${port}` )

const homePage = getPage(page.home);
const aboutPage = getPage(page.about);
const matchmakerPage = getPage(page.matchmaker);
const error_404Page = getPage(page.error_404);


http.createServer(function(req, res){
    if( req.url == '/' ){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(homePage);
        res.end()
    }
    else if(req.url == '/aboutus'){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(aboutPage);
        res.end()
    }
    else if( req.url == '/matchmaker') {
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(matchmakerPage);
        res.end()
    }
    else {
        res.writeHead(404, {'Content-type': 'text/html'})
        res.write(error_404Page);
        res.end()
    }
}).listen(port);