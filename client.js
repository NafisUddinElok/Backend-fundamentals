const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");
// WebSocket server URL
// const ws = new WebSocket("wss://echo.websocket.events");

ws.on("open", () => {
  console.log("✅ Connected to WebSocket server");

  // Send message to server
  ws.send("Hello server");
});

ws.on("message", (data) => {
  console.log("Received:", data.toString());
});

ws.on("close", () => {
  console.log("Connection closed");
});

ws.on("error", (error) => {
  console.error(" WebSocket error:", error.message);
});
