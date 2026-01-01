const fs = require("node:fs");

// .wasm binary পড়া
const wasmBuffer = fs.readFileSync("./add.wasm");

// instantiate (load + run-ready)
WebAssembly.instantiate(wasmBuffer).then(({ instance }) => {
  const { add } = instance.exports;

  console.log(add(5, 6));   // 11
  console.log(add(10, 20)); // 30
});
