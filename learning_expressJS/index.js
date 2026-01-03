const express = require("express");

const app = express();

// route 
app.get("/", (req, res) => {
    res.send("hello from express");
});
// server starting
app.listen(3000, () => {
    console.log("server is at http://localhost:3000");
});