/**********************************

Video Streaming

***********************************/

// Function call.
// Takes one parameter,
// module server.
// Stars server.
// Stores ouput in object http.
var http = require("http");
// Function call.
// Takes one parameter,
// fs module.
// Access file system.
// Stores output in object fs.
var fs = require("fs");

// Starts sever.
console.log("Sever starting at localhost 3000");

// Method call
// using object name.
// Takes one parameter,
// a function which.
// Creates http server.
http.createServer(function (request, response) {

  // Outputs response to the browser.
  // Takes two parameters,
  // the first one is response time,
  // second one is json string
  // Creates mp4.
  response.writeHead(200, {'Content-Type': 'Video/mp4'});
  // Function call using object name.
  // Stores output in the variable rs.
  // Takes one parameter a file,
  // which in this case is a video.
  // Outputs video to browser.
  var rs = fs.createReadStream("Better.mp4");
  // Method call
  // using object name.
  rs.pipe(response);

// Makes server
// litsen on a port.
}).listen(3000);
