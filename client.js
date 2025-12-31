const WebSocket = require("ws");

// WebSocket server URL
const ws = new WebSocket("wss://echo.websocket.events");

ws.on("open", () => {
  console.log("✅ Connected to WebSocket server");

  // Send message to server
  ws.send("Hello from Node.js client");
});

ws.on("message", (data) => {
  console.log("📩 Received:", data.toString());
});

ws.on("close", () => {
  console.log("❌ Connection closed");
});

ws.on("error", (error) => {
  console.error("⚠️ WebSocket error:", error.message);
});
