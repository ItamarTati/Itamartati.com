const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer(function(req, res){
    if(req.url === "/"){
        fs.readFile("./index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }
    else if(req.url === "/pages/about.html"){
        fs.readFile("./pages/about.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }

    else if(req.url === "/pages/articles.html"){
        fs.readFile("./pages/articles.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }

    else if(req.url === "/pages/courses.html"){
        fs.readFile("./pages/courses.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }

    else if(req.url === "/pages/experience.html"){
        fs.readFile("./pages/experience.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }

    else if(req.url === "/pages/projects.html"){
        fs.readFile("./pages/projects.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }

    else if(req.url === "/pages/videos.html"){
        fs.readFile("./pages/videos.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }

    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }

    else if (req.url.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|gltf|bin)$/i)) {
        var filePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(filePath);
        var contentType;

        if (req.url.match(/\.(jpg|jpeg)$/i)) {
            contentType = "image/jpeg";
        } else if (req.url.match(/\.(png)$/i)) {
            contentType = "image/png";
        } else if (req.url.match(/\.(gif)$/i)) {
            contentType = "image/gif";
        } else if (req.url.match(/\.(webp)$/i)) {
            contentType = "image/webp";
        } else if (req.url.match(/\.(bmp)$/i)) {
            contentType = "image/bmp";
        } else if (req.url.match(/\.(svg)$/i)) {
            contentType = "image/svg+xml";
        } else if (req.url.match(/\.(ico)$/i)) {
            contentType = "image/x-icon";
        } else if (req.url.match(/\.(gltf)$/i)) {
            contentType = "model/gltf+json";
        } else if (req.url.match(/\.(bin)$/i)) {
            contentType = "application/octet-stream";
        }

        if (contentType) {
            res.writeHead(200, { "Content-Type": contentType });
            fileStream.pipe(res);
        }
    }


    else if (req.url.match(/\.js$/)) {
        const jsPath = path.join(__dirname, req.url);
        const fileStream = fs.createReadStream(jsPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        fileStream.pipe(res);
    }

    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }

})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});