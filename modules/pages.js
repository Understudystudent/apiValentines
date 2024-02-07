const fs = require('fs');
const path = require('path');

const pages_dir = path.join(__dirname, '../pages/');

const homePage = path.join(pages_dir, 'index.html');
const aboutPage = path.join(pages_dir, 'aboutUs.html');
const matchmakerPage = path.join(pages_dir, 'matchmaker.html');
const error_404 = path.join(pages_dir, '404.html');

let page = {
    home: homePage,
    about: aboutPage,
    matchmaker: matchmakerPage,
    error_404: error_404
}

function getPage(pathToFile){
    return fs.readFileSync(pathToFile, 'utf-8', function(error, data){
        if( error ) throw error;
        return data
    })
}

module.exports = {
    page,
    getPage
}