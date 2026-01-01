const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080"); // defining that i am a client
// WebSocket server URL
// const ws = new WebSocket("wss://echo.websocket.events");

ws.on("open", () => { // server accept korle ei ta cholbe 
  console.log("✅ Connected to WebSocket server");

  // Send message to server
  ws.send("Hello server"); /*2*/
});

ws.on("message", (data) => { // server theke message ashle eita cholbe
  console.log("Received:"/*6*/, data.toString()); // data jeta ashe seta binary te ashe tai setake string e convert kora lage.
});

ws.on("close", () => {
  console.log("Connection closed");
});

// error handling 
ws.on("error", (error) => {
  console.error(" WebSocket error:", error.message);
});

// workflow : node server.js -> node client.js
