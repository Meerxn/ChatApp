const io = require ("socket.io-client");

//know what let is
//what is the difference in doing app.listen
let games = io.connect("http://localhost:3000/games");
let connect = io.connect("http://localhost:3000");
connect.on("connection",(data)=>{
    console.log(data)
});
games.on("welcome",(data) =>{
    console.log(data);
});

games.emit("joinRoom" , "Room1");


games.on("NewUser" ,(err) =>{
    console.log(err);
}); 



games.on ("err",(err) =>{
    console.log(err);
});
games.on ("success",(err) =>{
    console.log(err);
});