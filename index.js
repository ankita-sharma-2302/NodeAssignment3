const http = require("http");
const createServer = http.createServer;
const fs = require("fs");

// const server=createServer((request,response)=>{
// 	response.writeHead(200,{"content-typed":"text/html"});
// 	response.write('<h1> Hello World </h1>');
// 	return response.end()
// })

const data = `<h1> Hello World </h1>
<p> This is Ankita Sharma... </p>`;
fs.writeFile("index.html", data, (err) => {
  console.log(err);
});

const server = createServer((request, response) => {
  response.writeHead(200, { "content-typed": "text/html" });
  const html = fs.readFileSync("./index.html");
  response.end(html);
  return response.end();
});

server.listen(5000, () => {
  console.log("server running at 5000 port");
});
