const http = require("http");
const { readFileSync } = require("fs");
// const {} =  require('./express-tutorial/navbar-app/browser-app')
//Get All Files
const HomePage = readFileSync("./express-tutorial/navbar-app/index.html");
const HomeLogic = readFileSync("./express-tutorial/navbar-app/browser-app.js");
const HomeStyle = readFileSync("./express-tutorial/navbar-app/styles.css");
const HomeImage = readFileSync("./express-tutorial/navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  const url = req.url;
  // console.log(url);
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(HomePage);
    res.end(); // ye zruri he wrna browser chalta rehga
    //hr page pr ye dega ab yha conditions lagau , headers me bhi status ka itna data bhejo
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about Page</h1>");
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(HomeStyle);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(HomeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(HomeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5000);
