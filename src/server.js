const express = require("express");
const app = express();
const port = 3000;
const http = require("http").createServer();

const io = require("socket.io")(http);

const gameRooms = ["Room1", "Room2" , "Room3" , "Room4"];
  io.on("connection",(socket)=>{
// // //socket is the line between user and server

  socket.emit("connection","Hello there and welcome to the socket.io Server")
 });


http.listen(port,()=>{
    console.log("Server is on");
})

io.of("/games").on("connection" , (socket) =>{
 socket.emit("welcome" , "Hello welcome to the games ");
 
 socket.on("joinRoom" , (room) =>{
     if (gameRooms.includes(room)){
        socket.join(room);
        io.of("/games").in(room).emit("NewUser" , "New user entered");
        return socket.emit ("success" , "Room joined successfully");
     }
     else {
         return socket.emit ("err", "Error no room like this ")
     }
     
     
 });

});
