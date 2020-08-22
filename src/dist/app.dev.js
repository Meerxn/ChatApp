"use strict";

var io = require("socket.io-client"); //know what let is
//what is the difference in doing app.listen


var games = io.connect("http://localhost:3000/games");
var connect = io.connect("http://localhost:3000");
connect.on("connection", function (data) {
  console.log(data);
});
games.on("welcome", function (data) {
  console.log(data);
});
games.emit("joinRoom", "Room1");
games.on("NewUser", function (err) {
  console.log(err);
});
games.on("err", function (err) {
  console.log(err);
});
games.on("success", function (err) {
  console.log(err);
});