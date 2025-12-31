const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.url === "/users") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify(users));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
}); // http://localhost:3000/users
