const http = require("http");
const server = http.createServer((req, res) => {
  // LOG incoming request
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js server");
  } else if (req.url === "/health") {
    res.writeHead(200);
    res.end("OK");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
}); // hello from node.js server




// const http = require("http");
// const WebSocket = require("ws");
// const server = new WebSocket.Server({ port: 8080 }); // connecting to the client server
// server.on(
//     "connection"/*1*/, (socket) => { // er mane client connect korle ei function chalabe
//     console.log("New client connected");
//     socket.on("message"/*3*/, (message) => { // client theke message ashle eita chalabe
//         console.log("Received: ", message.toString());
//         // Echo the message back to the client / responding to the client message
//         socket.send("Server received: " + message);/*4*/
//     });
//     socket.on("close", () => {
//         console.log("Client disconnected");
//     });
//     socket.on("error", (error) => {
//         console.error("WebSocket error:", error.message);
//     });
//   }
// );
// console.log("WebSocket server is running on ws://localhost:8080");



// const server = http.createServer(async (req, res) => {
//   if (req.url === "/users") {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     const users = await response.json();

//     res.writeHead(200, {
//       "Content-Type": "application/json"
//     });
//     res.end(JSON.stringify(users));
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// }); // http://localhost:3000/users
