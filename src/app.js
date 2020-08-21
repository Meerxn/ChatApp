const io = require ("socket.io-client");

//know what let is
//what is the difference in doing app.listen
let socket = io.connect("http://localhost:3000");

socket.on("welcome",(data) =>{
    console.log(data);
});