"use strict";

var express = require("express");

var app = express();
var port = 3000;

var http = require("http").createServer();

var io = require("socket.io")(http);

var gameRooms = ["Room1", "Room2", "Room3", "Room4"];
io.on("connection", function (socket) {
  // // //socket is the line between user and server
  socket.emit("connection", "Hello there and welcome to the socket.io Server");
});
http.listen(port, function () {
  console.log("Server is on");
});
io.of("/games").on("connection", function (socket) {
  socket.emit("welcome", "Hello welcome to the games ");
  socket.on("joinRoom", function (room) {
    if (gameRooms.includes(room)) {
      socket.join(room);
      io.of("/games")["in"](room).emit("NewUser", "New user entered");
      return socket.emit("success", "Room joined successfully");
    } else {
      return socket.emit("err", "Error no room like this ");
    }
  });
});