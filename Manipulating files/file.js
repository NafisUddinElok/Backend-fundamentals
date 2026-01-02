// const fs = require("fs");

const fs = require('node:fs');

const path = require('node:path');

/// file paths
/***
 * 
 */


// try {
//   const stats = fs.statSync('/Users/joe/test.txt');
// } catch (err) {
//   console.error(err);
// }


// const readstCream = fs.createReadStream("data.txt");
// const writestream = fs.createWriteStream("copy.txt");
// readstCream.pipe(writestream); // er mane readstream theke writestream e chole jacch  chunk akaare


// const stream= fs.createReadStream("data.txt", "utf8");
// stream.on("open", (chunk) => {
//     console.log("file open korlam");
// });
// stream.on("data", (d)=>{
//     console.log("data inside the file : " + d);
// });
// stream.on("end", ()=>{
//     console.log("file close korlam");
// });
// stream.on("error", (err) =>{
//     console.log("error message : " + err.message);
// });









// fs.stat("data.txt", (err, stats)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("created time : " + stats.ctime);
//     console.log("last modified: " + stats.mtime);
//     console.log("It is a director : " + stats.isDirectory());
//     console.log("size : ", stats.size); // in bytes
//     console.log("folder of the file path : " + __dirname);
//     console.log("is file: ", stats.isFile()); // checking if data.txt is file or directory 
// });


// // creating a folder 
// fs.mkdir("logs", (err) =>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("folder created");
// });
// // foder delete
// fs.rmdir("logs", (err) =>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("folder removed")
// })


// // making a new file and writing in it
// fs.writeFile("output.txt", "Hello File System", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File written successfully");
// });
// // writing to an existing file
// fs.appendFile("output.txt", "\nNew line added", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Data appended");
// });
// // checking if file exits
// if (fs.existsSync("data.txt")) {
//   console.log("File exists");
// } else {
//   console.log("File not found");
// }
// //file delete
// fs.unlink("chudlingpong.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File deleted");
// });


// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log(data);
// });
