const express = require("express");
const app = express();
const port = 3000;
const http = require("http").createServer();

const io = require("socket.io")(http);


io.on("connection",(socket)=>{
//socket is the line between user and server

socket.emit("welcome","Hello there and welcome to the socket.io Server")
})


http.listen(port,()=>{
    console.log("Server is on");
})