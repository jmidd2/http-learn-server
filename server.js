const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello, Galvanize!");
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${3000}/`);
});
