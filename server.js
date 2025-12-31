const http = require("http");

const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on(
    "connection", (socket) => {
    console.log("New client connected");

    socket.on("message", (message) => {
        console.log("Received: ", message.toString());


        // Echo the message back to the client
        socket.send("Server received: " + message);
    });
    socket.on("close", () => {
        console.log("Client disconnected");
    });
    socket.on("error", (error) => {
        console.error("WebSocket error:", error.message);
    });
  }
);
console.log("WebSocket server is running on ws://localhost:8080");


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
